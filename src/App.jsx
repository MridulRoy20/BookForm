import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Books from './components/Books'
import BookByTitle from './components/BookByTitle'
import BookByAuthor from './components/BookByAuthor'
import AddBookFrom from './components/AddBookForm'

function App() {
  

  return (
    <>
      <Books />

      <BookByTitle title = "Shoe Dog"/>

      <BookByAuthor author="Harper Lee"/>

      <AddBookFrom />
    </>
  )
}

export default App
