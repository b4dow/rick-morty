import React from 'react'
import './App.css'
import Cards from './components/Cards/Cards.jsx'
import Nav from './components/Nav/Nav'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom'
import About from './components/About/About'
import Detail from './components/Detail/Detail'
import Form from './components/Form/Form'
import Favorites from './components/Favorites/Favorites'

function App () {
  const [characters, setCharacters] = useState([])
  const [access, setAccess] = useState(false)

  const EMAIL = 'meli@gmail.com'
  const PASSWORD = '1234meli'

  const { pathname } = useLocation()

  const navigate = useNavigate()

  useEffect(() => {
    !access && navigate('/')
  }, [access])

  const login = userData => {
    const { email, password } = userData
    const URL = 'http://localhost:3001/rickandmorty/login/'
    axios(URL + `?email=${email}&password=${password}`).then(({ data }) => {
      const { access } = data
      setAccess(data)
      access && navigate('/home')
    })
  }

  const onSearch = id => {
    axios(`http://localhost:3001/rickandmorty/character/${id}`).then(
      ({ data }) => {
        const characterFind = characters.find(char => char.id === Number(id))

        if (characterFind) {
          console.log('personaje ya agregado')
          window.alert('Try with another id')
        } else if (data.id !== undefined) {
          setCharacters(character => [...character, data])
        } else {
          console.log('no existe ese personaje')
          window.alert('¡No hay personajes con este ID!')
        }
      }
    )
  }

  const onClose = id => {
    // id recibido es un string
    setCharacters(
      //                             id es un number
      characters.filter(character => character.id !== Number(id))
    )
  }

  return (
    <div className='container'>
      {pathname !== '/' && <Nav />}

      <Routes>
        <Route path='/' element={<Form login={login} />} />
        {pathname}
        <Route
          path='/home'
          element={
            <Cards
              characters={characters}
              onClose={onClose}
              onSearch={onSearch}
            />
          }
        />
        <Route path='/about' element={<About />} />
        <Route path='/detail/:id' element={<Detail />} />
        <Route path='/favorites' element={<Favorites />} />
      </Routes>
    </div>
  )
}

export default App
