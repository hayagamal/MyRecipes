import React from 'react'
import {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'
import styled from 'styled-components'

function Recipe() {
    const params = useParams();
    const [recipe, SetRecipe] = useState({})
    const [Active, SetActive] = useState('ingredients')
    const getRecipebyId = async() =>{
        console.log(params.name)
        const api = await fetch(`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=94bad2d73d314ebd9256da8ed133ec09`);
        const data = await api.json();
        SetRecipe(data);
    }
    useEffect(()=>{
        getRecipebyId()
    },[params.name])
  
  
    

    return (<DetailWrapper className='row d-flex'>
       
        <div className="col-xl-6  col-sm-12 order-md-1">
            <h2 >{recipe.title}</h2>
            <img  src={recipe.image}/>

        </div>
        <Info className="col-xl-6 col-sm-12 order-md-2 mt-4">
            <Button className={Active === 'instructions'? 'active': ''} onClick={()=> SetActive('instructions')}>Instructions</Button>
            <Button className={Active === 'ingredients'? 'active': ''} onClick={()=> SetActive('ingredients')}>Ingredients</Button>
            {Active === "instructions" && (
                   <h3>          
                <h3  dangerouslySetInnerHTML={{ __html: recipe.summary}}></h3>
                <h3  dangerouslySetInnerHTML={{ __html: recipe.instructions}}></h3>
                </h3>

            )
            }
            {Active === "ingredients" && (
                
               <ul>
                    {recipe.extendedIngredients?.map((ingredient) =>  (
                        <li key={ingredient.id}>{ingredient.original}</li>
                    )
                    )
                    }
                </ul>
            )
               
            }
                </Info>
            
    </DetailWrapper>)
  
}
const DetailWrapper = styled.div`
margin-top: 6rem;
justify-content: center;
.active{
    background: linear-gradient(35deg, #494949, #313131);
    color: white;
}
h2{
    margin-bottom: 2rem;
}

li{
    font-size: 1.2rem;
    line-height: 2.5rem;
}
ul{
    margin-top: 2rem;
    margin-bottom: 100px;
}
h3{
    margin-bottom: 50px;
    text-align: justify;
}
div{
    margin-left: 0;
}

`
const Button = styled.div`
padding: 1rem 2rem;
color: #313131;
background: white;
border: 2px solid black;
margin-right: 2rem;
font-weight: 600;
display: inline;
cursor: pointer;
margin-bottom: 100px;


`
const Info = styled.div`
margin-left: 10rem;
margin-top: 40px;

`
export default Recipe