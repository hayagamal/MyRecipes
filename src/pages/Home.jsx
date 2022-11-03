import Veggie from '../components/Veggie'
import Popular from '../components/Popular'
import React from 'react'
import ContactUs from '../components/ContactUs'
import Header from '../components/Header'
import { createGlobalStyle } from 'styled-components'
import NavBar from '../components/NavBar'
import styled from 'styled-components'
import { useEffect, useState } from 'react'
function Home() {
  const [popup, SetPopUP] = useState(false);
  useEffect(()=>{
    setTimeout(()=>{
      SetPopUP(true)
    })
  },[])
  return (
    <div>
      
       <Header/>
        <Veggie/>
        <Popular/>
        <GlobalStyle/>
        <ContactUs trigger={popup} setTrigger={SetPopUP}/>
   
    </div>

    
  )
}

const GlobalStyle = createGlobalStyle`
  body {
   background-color: #2c2c2c;
   
  }`

export default Home