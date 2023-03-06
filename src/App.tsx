import { useState } from 'react'
import reactLogo from './assets/react.svg'

import 'bootstrap/dist/css/bootstrap.min.css'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import { NewNote } from './cmps/new-note'

export type Note = {
  id: string,

} & NoteData

export type NoteData = {
  title: string,
  markdown: string,
  tags: Tag[],
}

export type Tag = {
  id: string,
  label: string
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <Container className='my-4'>
      <Routes>
        <Route path='/' element={<h1>hello</h1>} />
        <Route path='/new' element={<NewNote />} />
        <Route path='/:id'>
          <Route index element={<h1>show</h1>} />
          <Route path='edit' element={<h1>edit</h1>} />
        </Route>
        <Route path='*' element={<Navigate to={'/'} />} />
      </Routes>
    </Container>
  )
}

export default App
