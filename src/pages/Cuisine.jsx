import React from 'react'
import { useState, useEffect, memo } from 'react'
import {useParams, Link} from 'react-router-dom'
import styled from "styled-components"
import {GlobalStyle} from './Home'
import {motion} from 'framer-motion'
function Cuisine() {
    const [cuisine, setCuisine] = useState([]);
    let params = useParams();
    const getCuisine = async (name) =>{
        const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=d478834f6ebc49508f02ba3b193c1ee3&cuisine=${name}`);
        const recipes = await data.json();
        setCuisine(recipes.results);
    }

    useEffect(()=>{
        getCuisine(params.type);
        
    },[params.type])
  return (
    
    <Grid>
     {cuisine.map((dish) => {
      return(
     <Card whileHover={{scale: 1.1}} key={dish.id}>
      <Link to={'/recipe/'+dish.id}>
      <img src={dish.image} alt={dish.title}/>
      <h4>{dish.title}</h4>
        </Link>
     </Card>
      ) 
    })}
     
    </Grid>
    
  )
}
const Grid = styled.div`
display: grid;
grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
grid-gap: 20px;
`
const Card = styled(motion.div)`
background-color: white;
padding: 5px;
border-radius: 0px;
border: 0.5px #d0d0d0 solid;
&:hover{
  border: 0.5px orange solid;
  box-shadow: 5px 5px #ff5500;
}
img{
  border-radius: 0px;
  width: 100%;
  
  padding-bottom:0px;

}
h4{
  color:black;
  font-size: 15px;
  margin-top: 15px;
}
a{
  text-decoration: none;
}
`
export default memo(Cuisine)