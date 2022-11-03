import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import styled from "styled-components"
import "@splidejs/splide/dist/css/splide.min.css"
import '@splidejs/react-splide'
import {Splide, SplideSlide } from '@splidejs/react-splide';
import {Link} from 'react-router-dom'
import {BiDish} from 'react-icons/bi'
import {FcLike} from 'react-icons/fc'
import {motion} from 'framer-motion'
import Aos from 'aos';
import "aos/dist/aos.css"
function Popular() {
    
    const [popular, setPopular] = useState([])
    useEffect(()=>{
        Aos.init({duration: 1500})
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
   
        
        <Wrapper data-aos="fade-left">
            <h3>Popular Picks</h3>
        <Grid>
            {popular.map(item=>{
                return(
                   

          
     
        <Card key={item.id} whileHover={{scale: 1.1}}>
        <Link to={'/recipe/'+item.id}>        
        <div><img src={item.image} alt={item.title}/>
        <p>{item.title}</p>
        <E1 style={{color: 'white', 'padding': '4px 15px 4px 15px'}}> <BiDish/> View Recipe</E1>
        <span><FcLike/> {item.aggregateLikes} Likes</span>
        </div>
        
        
        </Link>

        </Card>
       
       
       
        
        )
            })}
       
       </Grid>
        </Wrapper>
       
       )
  
  
}
const Grid =styled.div`
display: grid;
grid-template-columns: repeat(4, minmax(200px, 1fr));
max-width: 100%;
@media (max-width: 1000px){
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
}
`

const E1 = styled.p`
display: none;
margin-top: 60px;
margin-left: 65px;
border: 2px #cc0000 solid;
border-radius: 15px;
background: #cc0000;

@media(max-width: 850px){
       display: none;
}
svg{
    line-height: 5px;
    margin: 1px;
   
}
`
const Wrapper = styled.div`
bottom: 10%;
background-color: #18191ae1;
position: relative;
border-radius: 10px;
max-width: 100%;
h3 {
    color:white;
    padding-top :15px;
    padding-left: 15px;
    text-align: center;
    font-size: 35px;
    text-decoration: underline #ff5500;
    text-underline-offset: 7px;
    font-family: Haya;
    font-weight: normal;
    
}
`
const Card= styled(motion.div)`
background-color: white;
border-radius: 5px;
height: 22rem;
box-shadow: 5px 5px rgba(0,0,0,0.2);
left: 10%;
margin-bottom: 60px;
position: relative;
width: 80%;
top: 30px;
@media (max-width: 850px){
    height: 16rem; 
}
@media(max-width: 750px){
    height: 13rem;
}
span{
    position: absolute;
    top: 280px;
    left: 1px;
    font-size: 13px;
    font-weight: bold;
    color: black;
    @media (max-width: 1000px){
        display: none;
    }
}
&:hover{
    
    box-shadow: 5px 5px #ff5500;
    ${E1}{
        display: block;
        @media(max-width: 1350px){
            margin-left: 50px;
        }
        @media(max-width: 1200px){
            display: none;
        }
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
    @media(max-width: 850px){
        top: 135px;
    }
    @media(max-width: 750px){
        top: 105px;
        font-size: 11px;
    }
    
}


img {
    width: 100%;
    height:60%;
    position: absolute;
    border-radius: 5px 5px 0px 0px;
}

`



export default Popular