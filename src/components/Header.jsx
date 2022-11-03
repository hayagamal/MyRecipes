import React from 'react'
import logo from '../images/hhhh.jpg'
import styled from 'styled-components'
import { BiRightArrow } from 'react-icons/bi'
import {NavLink} from 'react-router-dom'
import  "../index.css"
function Ingredients() {
  return (
    
    
    <Gradient>
    <Ingredient>
        <Content>
        <h1>MyRecipes</h1>
        <div>Discover over 3,000 tested and proven recipes and how-tos based on the food you love from cuisines from all over the world!</div>
        <p> Check recipes through categories or search for your favorite recipe! </p>
        <Recipe to={'/cuisine/Italian'}>Discover Recipes <BiRightArrow/></Recipe>
        </Content>
        
    </Ingredient>
    </Gradient>
    
  )
}
const Recipe = styled(NavLink)`
 font-size: 15px;
 color: #ff5500;

 &:hover{
    text-decoration: #cc0000 underline;
    color: #ff5500;
    text-underline-offset: 7px;
 }
 @media (max-width: 1300px){
    font-size: 15px;
    
 }
 

`

const Content = styled.div`
border: 1px #ffa500 solid;
height: 280px;
margin: 20px;
background: white;
text-align: center;

h1{
    padding-top: 35px;
    font-size: 40px;
    padding-bottom: 7px;
    font-family: "Haya";
    @media (max-width: 1000px){
        font-size: 20px;
        padding-top: 15px;
    }
}
div{
    
    font-size: 15px;
    max-width: 580px;
    text-align: center;
    @media (max-width: 1000px){
        font-size: 12px;
        margin-left: 5px;
    }

}
p{
    color: #cc0000;
    padding: 20px;
    font-size: 14px;
    font-weight: bold;
    @media (max-width: 1000px){
        font-size: 15px;
        padding: 10px;
    }
}
`
const Gradient= styled.div`
background-image:
linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,0.7)),
url(${logo});
max-width: 100%;
height: 450px;
background-size: cover;
color: white;
position: relative;

`
const Ingredient = styled.div`
position: absolute;
color: black;
left: 26%;
max-width: 60%;
top: 15%;
background-color: #eeeee4;
opacity: 0.9;
text-align: center;
height: 320px;

@media (max-width: 850px){
    left: 20%;
}

`
export default Ingredients