import { useState } from 'react'
import './App.css'
import AllPuppies from './components/AllPuppies'
import AddPuppies from './components/AddPuppies'
import SinglePuppy from './components/SinglePuppy'
import { Link, Route, Routes } from 'react-router-dom'

export default function App() {

  return (
    <>
      <h1>Puppy Bowl</h1>
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/add'>Add Puppy</Link>
      </nav>

    <Routes>
      <Route path='/' element={<AllPuppies/>}/>
      <Route path='/add' element={<AddPuppies/>}/>
      <Route path='/details/:id' element={<SinglePuppy/>}/>
    </Routes>
    </>
  )
}


