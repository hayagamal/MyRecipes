import React, { useEffect, useState } from 'react'
import {useParams, Link} from 'react-router-dom'
import styled from "styled-components"
function Searched() {
    const [result, SetResult] = useState([])
    const params = useParams();
    const getSearch = async(name) =>{
        
        const api = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=94bad2d73d314ebd9256da8ed133ec09&query=${name}`);
        const data = await api.json();
        SetResult(data.results);
    }
    useEffect(()=>{
        getSearch(params.search)
    },[params.search])
  return (
    <Grid>
      {result.map((item)=>{
        return(

            <Card key={item.id}>
                <Link to={'/recipe/'+ item.id}>
                <img src={item.image} alt={item.title}/>
                <h3>{item.title}</h3> 
                </Link>
            </Card>
        )
      })}
      
    </Grid>
  )
}
const Grid = styled.div`
display: grid;
margin: 10px;
grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
grid-gap: 10px;
`
const Card = styled.div`
background-color: white;
padding: 5px;
border-radius: 0px;
border: 0.5px #d0d0d0 solid;
&:hover{
  border: 0.5px #ff5500 solid;
  box-shadow: 5px 5px #ff5500;
}
img{
  border-radius: 0px;
  width: 100%;
  
  padding-bottom:0px;

}
h3{
    color:black;
    font-size: 15px;
    margin-top: 15px;
  }
a{
  text-decoration: none;
}
`
export default Searched