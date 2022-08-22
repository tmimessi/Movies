import { Header } from "../../components/Header"
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import { Section } from '../../components/Section'
import { Textarea } from '../../components/Textarea'
import { NoteItem } from '../../components/NoteItem'
import { BiArrowBack } from 'react-icons/bi'
import { Container, Form, RemoveMovie } from './styles'
import { Link } from 'react-router-dom'
import { useState } from "react"
import { api } from "../../services/api"
import { useNavigate } from "react-router-dom"

export function NewMovie(){
  const [title, setTitle] = useState("")
  const [rating, setRating] = useState()
  const [description, setDescription] = useState("")

  const [tags, setTags] = useState([])
  const [newTag, setNewTag] = useState("")

  const navigate = useNavigate()

  function handleAddTag(){
    setTags(prevState => [...prevState, newTag])
    setNewTag("")
  }

  function handleRemoveTag(deleted){
    setTags(prevState => prevState.filter(tag => tag !== deleted))
  }

  async function handleNewNote(){
    if (!title){
      return alert ("Digite o título do filme!")
    }
    if (newTag){
      return alert("Você deixou uma tag no campo para adicionar, mas não clicou em adicionar. Clique para adicionar ou deixe o campo vazio.")
    }

    await api.post("/movie_notes", {
      title,
      rating,
      description,
      tags
    })

    alert("Filme criado com sucesso!")
    navigate("/")
  }

  return (
    <Container>
    < Header />

    <main>
      <Form>
        <header>
            <Link to="/">
            <BiArrowBack />
            Voltar
            </Link>
        </header>
        <h1>Novo filme</h1>

        <div className='inputs'>

          <Input 
          type="text" 
          placeholder="Título"
          onChange={e => setTitle(e.target.value)}
          />

          <Input 
          type="number" 
          min="0" max="5"
          placeholder="Sua nota (de 0 a 5)"
          onChange={e => setRating(e.target.value)}
          />

          </div>

          <Textarea
          placeholder="Observações"
          onChange={e => setDescription(e.target.value)}
          />

          <Section title="Marcadores">
            <div className='tags'>
           { 
            tags.map((tag, index) => (
             <NoteItem 
               key={String(index)}
               value={tag}
               onClick={() => handleRemoveTag(tag)}
              />
           ))
          }
                
            <NoteItem 
            isNew 
            placeholder="Novo marcador"
            onChange={e => setNewTag(e.target.value)}
            value={newTag}
            onClick={handleAddTag}
            />

            </div>
          </Section>
        
        <div className='buttons'>

          <RemoveMovie 
          type="button">
            Excluir filme
            </RemoveMovie>

          <Button 
          title="Salvar alterações"
          onClick={handleNewNote}
          />

        </div>

        </Form>
      </main>
    </Container>
  )
}       