import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import styled from "styled-components"
import "@splidejs/splide/dist/css/splide.min.css"
import '@splidejs/react-splide'
import {Splide, SplideSlide } from '@splidejs/react-splide';
import {Link} from 'react-router-dom'
import {BiDish} from 'react-icons/bi'
function Popular() {
    
    const [popular, setPopular] = useState([])
    useEffect(()=>{
        getPopular();
    },[]);
    const getPopular = async() =>{
        const check = localStorage.getItem("popular");
       
        if(check!='undefined'){
            setPopular(JSON.parse(check));
        }
        else{
        const api= await fetch(`https://api.spoonacular.com/recipes/random?apiKey=3f47422cba924df3b50d700618410754&number=8`);
        const data = await api.json();
        localStorage.setItem("popular",JSON.stringify(data.recipes));
        setPopular(data.recipes)
        console.log(data.recipes)
        }
    }
  return (
   
        
        <Wrapper>
            <h3>Popular Picks</h3>
        <Splide options={{perPage:4, arrows: false, pagination: false}}>
            {popular.map(item=>{
                return(
                    <SplideSlide key={item.id}>

          
     
        <Card>
        <Link to={'/recipe/'+item.id}>        
        <div><img src={item.image} alt={item.title}/>
        <p>{item.title}</p>
        <E1 style={{color: '#cc0000'}}> <BiDish/> View Recipe</E1>
        </div>
        
        
        </Link>

        </Card>
       
       
       
        </SplideSlide>
        )
            })}
       
        </Splide>
        </Wrapper>
       
       )
  
  
}
const E1 = styled.p`
display: none;
margin-top: 80px;


svg{
    line-height: 5px;
    margin: 1px;
   
}
`
const Wrapper = styled.div`
bottom: 10%;
background: linear-gradient(to bottom ,#d5f3fe, white);
position: relative;


h3 {
    color: black;
    padding-top :15px;
    padding-left: 15px;
    
    text-align: center;
    font-size: 25px;
    text-decoration: underline #ff5500;
    text-underline-offset: 7px;
    
}
`
const Card= styled.div`
background-color: white;
border-radius: 5px;
min-height: 22rem;
color: white;
left: 10%;

margin-bottom: 100px;
position: relative;
width: 80%;
top: 30px;

&:hover{
    
    box-shadow: 5px 5px #ff5500;
    ${E1}{
        display: block;
    }
}
p{
    position: absolute;
    z-index: 2;
    top: 181px;
    font-size: 14px;
    word-wrap: break-word;
    color: black;
    text-align: center;
    font-weight: bold;
    padding: 15px;
    padding-top: 10px;
    

    
}


img {
    width: 100%;
    height:60%;
    position: absolute;
    border-radius: 5px 5px 0px 0px;
}

`



export default Popular