import { useState } from 'react';
import { useEffect } from 'react';
import styled from "styled-components"
import "@splidejs/splide/dist/css/splide.min.css"
import '@splidejs/react-splide'
import {Splide, SplideSlide } from '@splidejs/react-splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
import {Link} from "react-router-dom"
import { BiDish } from 'react-icons/bi';
import {FcLike} from 'react-icons/fc'
import {motion} from 'framer-motion'
import Aos from 'aos';
import "aos/dist/aos.css"
function Veggie() {
    
    const [Veggie, setVeggie] = useState([])
    useEffect(()=>{
        getVeggie();
        Aos.init({});
    },[]);
    const getVeggie = async() =>{
        const check = localStorage.getItem("Veggie");
        console.log(check)
        if(check!='undefined'){
            setVeggie(JSON.parse(check));
        }
        else{
       
        const api= await fetch(`https://api.spoonacular.com/recipes/random?apiKey=3f47422cba924df3b50d700618410754&number=9&tags=vegetarian`);
        const data = await api.json();
        localStorage.setItem("Veggie",JSON.stringify(data.recipes));
        setVeggie(data.recipes)
        console.log(data.recipes)
        }
    }
  return (
   
        
        <Wrapper data-aos="fade-right">
            <h3>Our Vegeterian Picks</h3>
        <Splide options={{perPage:5, autoplay: { speed: 100}, drag:'free', arrows: false, pagination: false, type: 'loop', gap: 0}}>
            {Veggie.map(item=>{
                return(
                    <SplideSlide key={item.id} >

          
     
        <Card  whileHover={{scale: 1.1}} >
        <Link to={'/recipe/'+item.id}>
        <img src={item.image} alt={item.title}/>
        <p>{item.title}</p>
        <span><FcLike/> {item.aggregateLikes} Likes</span>
        
       
        <E1 style={{color: 'white', 'padding': '4px 15px 4px 15px'}}><BiDish/> View Recipe </E1>
        
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
margin-top: 50px;
margin-left: 50px;
border: 2px #cc0000 solid;
border-radius: 15px;
background: #cc0000;




svg{
    line-height: 5px;
    margin: 1px;
   
}
`
const Wrapper = styled.div`

background-color: #2c2c2c;
position: relative;
padding-top: 30px;

padding-bottom: 40px;
border-radius: 5px;
margin-bottom: 50px;
margin-top: 50px;
h3 {
    color:white;
    padding-top :15px;
    text-align: center;
    font-size: 23px;
    text-decoration: #cc0000 underline;
    text-underline-offset: 9px;
    
    
}

`
const Card= styled(motion.div)`
height: 22rem;
color: white;
background-color: white;
left: 4%;
position: relative;
width: 90%;
top: 30px;
box-shadow: 10px 10px rgba(0,0,0,0.2);

margin-bottom: 50px;

@media (max-width: 850px){
     height: 15rem;
    
}
span{
    position: absolute;
    top: 280px;
    font-size: 13px;
    color: black;
    font-weight: bold;
    @media (max-width: 1000px){
        display: none;
    }
    
}
&:hover{
   border-bottom: 5px #cc0000 solid;
    ${E1}{
        display: block;
        @media(max-width: 850px){
            display: none;
        }
    }
}

p{
    position: absolute;
    z-index: 2;
    top: 180px;
    font-size: 14px;
    align-items: center;
    word-wrap: break-word;
    color: black;
    text-align: center;
    font-weight: bold;
    padding: 5px;
    padding-top: 0px;
    @media (max-width: 850px){
        top: 120px;
       
   }
   @media(max-width: 767px){
    top:120px;
    font-size: 12px;
   }
    
}

img {
    width: 100%;
    height:55%;
    position: absolute;
   
   
    
   
}

`

export default Veggie