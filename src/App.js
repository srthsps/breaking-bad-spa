import React,{useState,useEffect} from 'react'
import {Button} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import NavbarThree from './components/Navbar'
import NavbarTwo from './components/NavbarTwo'
import HeroSection from './components/HeroSection'
import Data from './components/Data'
import axios from 'axios'
import {dataContext} from './dataContext'
import { Link } from 'react-scroll';
import Fooder from './components/Fooder'
import './App.css'

const App = () => {

    const [data,setData] = useState([""])

  useEffect(()=>{
    axios.get("https://www.breakingbadapi.com/api/characters?limit=25").then(res=>{
      
      setData(res.data)
    })
  },[])

  return (
    <div>
      <dataContext.Provider value={data}>
      <Link activeClass="active" to="section1" spy={true} smooth={true} duration={1000}>
      <NavbarTwo/>
      <NavbarThree/>
      </Link>
      <Link activeClass="active" to="section1" spy={true} smooth={true} duration={1000}>
      <HeroSection/>
      </Link>
      <Link activeClass="active" to="section1" spy={true} smooth={true} duration={1000}>
      <Data/>
      </Link>
      <Link activeClass="active" to="section1" spy={true} smooth={true} duration={1000}>
      <Fooder/>
      </Link>
      </dataContext.Provider>
    </div>
  )
}

export default App
