import { useState } from 'react';
import { useEffect } from 'react';
import styled from "styled-components"
import "@splidejs/splide/dist/css/splide.min.css"
import '@splidejs/react-splide'
import {Splide, SplideSlide } from '@splidejs/react-splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
import {Link} from "react-router-dom"
import { BiDish } from 'react-icons/bi';
function Veggie() {
    
    const [Veggie, setVeggie] = useState([])
    useEffect(()=>{
        getVeggie();
    },[]);
    const getVeggie = async() =>{
        const check = localStorage.getItem("Veggie");
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
   
        
        <Wrapper>
            <h3>Our Vegeterian Picks</h3>
        <Splide options={{perPage:5, autoplay: { speed: 100}, drag:'free', arrows: false, pagination: false, type: 'loop', gap: 0}}>
            {Veggie.map(item=>{
                return(
                    <SplideSlide key={item.id}>

          
     
        <Card >
        <Link to={'/recipe/'+item.id}>
        <img src={item.image} alt={item.title}/>
        <p>{item.title}</p>
        <E1 style={{color: '#cc0000'}}><BiDish/> View Recipe!</E1>
        
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

background-color: white;
position: relative;

border-radius: 25px;
margin-bottom: 50px;
h3 {
    color:black;
    padding-top :15px;
    padding-left: 5px;
    text-align: center;
    font-size: 25px;
    text-decoration: underline #ff5500;
    text-underline-offset: 7px;
    
}
`
const Card= styled.div`
min-height: 20rem;
color: white;
left: 4%;
position: relative;
width: 90%;
top: 30px;
border-bottom: 0.5px #d0d0d0 solid;
box-shadow: 7px 10px #d0d0d0;
margin-bottom: 30px;



&:hover{
    border: 0.5px #ff5500 solid;
    box-shadow: 5px 10px #ff5500;
    ${E1}{
        display: block;
    }
}

p{
    position: absolute;
    z-index: 2;
    top: 160px;
    font-size: 14px;
    align-items: center;
    word-wrap: break-word;
    
    color: black;
    text-align: center;
    font-weight: bold;
    padding: 5px;
    padding-top: 0px;
    
}

img {
    width: 100%;
    height:55%;
    position: absolute;
    
    
   
}

`

export default Veggie