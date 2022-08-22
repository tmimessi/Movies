require('express-async-errors')
const migrationsRun = require("./database/sqlite/migrations")
const appError = require('./utils/appError')
const express = require('express')
const uploadConfig = require("./configs/upload")
const app = express()
app.use(express.json())

const cors = require("cors")
app.use(cors())

app.use("/files", express.static(uploadConfig.UPLOADS_FOLDER))

const routes = require('./routes')
app.use(routes)

migrationsRun()

app.use((error, request, response, next) => {
  if (error instanceof appError) {
    return response.status(error.statusCode).json({
      status: 'error',
      message: error.message
    })
  }

  console.log(error)
  return response.status(500).json({
    status: 'error',
    message: 'internal server error'
  })
}) 

const port = 3333
app.listen(port, () => console.log(`Server is running on port ${port}`))
