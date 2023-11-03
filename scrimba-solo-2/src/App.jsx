import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from '../components/Navbar.jsx'
import Places from '../components/Places.jsx'
import data from '../components/data.jsx'


function App() {
  const [count, setCount] = useState(0)

  const places = data.map(item =>{

    return(
      <Places

    key = {item.id}
    title = {item.title}
    googleMapsUrl = {item.googleMapsUrl}
    startDate = {item.startDate}
    endDate = {item.endDate}
    description = {item.description}
    imageUrl = {item.imageUrl}
    
    />
    )

    


  })

  return (
    <>
    <Navbar />
    <section>{places}</section>
    
     
    </>
  )
}

export default App
