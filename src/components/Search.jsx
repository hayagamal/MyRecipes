import React from 'react'
import {useState, useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import { FaSearch } from 'react-icons/fa'
import styled from "styled-components"

function Search() {
    const [search, setSearch] = useState('')
    const nav = useNavigate();
    

    const submitHandler =(e) =>{
        e.preventDefault();
        nav('/searched/'+search)
    }
  return (
    
    <Formi onSubmit={submitHandler}>
        
        <FaSearch/>
        <input type="text" value={search} placeholder="Search Recipes..." onChange={(e) => setSearch(e.target.value)}/>
        
    </Formi>
  )
}
const Formi = styled.form`
  
   margin-bottom : 20px;
   display: grid;
   justify-content: center;
    position: relative;
    
 input{
     
  
    background-color: #18191a;
    color: white;
    width: 40rem;
    height: 2rem;
    border: none;
    border-radius: 10px;
    padding: 10px;
    padding-left: 30px;
    margin-top: -7px;
    position: relative;
    
    @media (max-width: 500px){
        width: 30rem;
    }
    
 }
 svg{
    display: grid;
    justify-content: around;
    margin-bottom: -20px;
    margin-left: 7px;
    z-index: 1;
    color: white;
    display: sticky;
   
    
}
`
export default Search