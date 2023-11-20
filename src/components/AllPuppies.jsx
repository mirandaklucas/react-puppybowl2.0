import { useState, useEffect } from 'react'
import Axios from 'axios'

import { useNavigate } from 'react-router-dom'

export default function AllPuppies() {
  
  const [ puppies, setPuppies ] = useState([])

  const navigate = useNavigate()

  useEffect(() => {
    fetchPuppies()
  }, [])


  async function fetchPuppies() {

    let API ='https://fsa-puppy-bowl.herokuapp.com/api/2309-FTB-ET-WEB-FT/'

    try {
      const { data: response } = await Axios.get(`${API}/players`)
      setPuppies(response.data.players)
    }
    catch (err) {
      console.error(err.message)
    }
  }


  async function removePuppy(id) {

    let API ='https://fsa-puppy-bowl.herokuapp.com/api/2309-FTB-ET-WEB-FT/'

    try {
      await Axios.delete(`${API}/players/${id}`)
      fetchPuppies()

    } catch(err) {
      console.error(err.mesage)
    }
  }


  return <ul className='puppies-container'>
    {
      puppies.length ? 
        puppies.map(puppy => {
          return <li key={puppy.id}>
            <h3>{puppy.name}</h3>
            <h3>#{puppy.id}</h3>
            <img src={puppy.imageUrl} />
            <button onClick={() => navigate(`/details/${puppy.id}`)}>Show Details</button>
            <button className='deleteBtn' onClick={() => removePuppy(puppy.id)}>X</button>
          </li>
        })
        :
        <h2>Loading ...</h2>
    }

  </ul>
}