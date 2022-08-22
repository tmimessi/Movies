const {Router} = require("express")

const movieNotesController = require("../controllers/movieNotesController")

const ensureAuthentication = require("../middlewares/ensureAuthentication")

const notesRoutes = Router()

notesRoutes.use(ensureAuthentication)

const notesController = new movieNotesController()

notesRoutes.get("/", notesController.index)
notesRoutes.post("/", notesController.create)
notesRoutes.get("/:id", notesController.show)
notesRoutes.delete("/:id", notesController.delete)

module.exports = notesRoutes