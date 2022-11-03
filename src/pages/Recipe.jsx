import React from 'react'
import {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'
import styled from 'styled-components'
import {BiTime} from 'react-icons/bi'
import {GiHotMeal} from 'react-icons/gi'
import {FcLike} from 'react-icons/fc'
function Recipe() {
    const params = useParams();
    const [recipe, SetRecipe] = useState({})
    const [Active, SetActive] = useState('instructions')
    const getRecipebyId = async() =>{
        console.log(params.name)
        const api = await fetch(`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=d478834f6ebc49508f02ba3b193c1ee3`);
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
            <ExtraInfo>
            <span><BiTime/> Preparation Time: <p> {recipe.readyInMinutes} Minutes</p></span>
            <span><GiHotMeal/> Servings: <p>{recipe.servings} Person(s)</p></span>
            <span> <FcLike/> Likes: <p>{recipe.aggregateLikes} Likes</p></span>
            </ExtraInfo>

        </div>
        <Info className="col-xl-6 col-sm-12 order-md-2 mt-4">
            <Button className={Active === 'instructions'? 'active': ''} onClick={()=> SetActive('instructions')}>Instructions</Button>
            <Button className={Active === 'ingredients'? 'active': ''} onClick={()=> SetActive('ingredients')}>Ingredients</Button>
            {Active === "instructions" && (
                   <div>  
                
                <h3  dangerouslySetInnerHTML={{ __html: recipe.summary}}></h3>
                <span>Instructions </span>
                <h3  dangerouslySetInnerHTML={{ __html: recipe.instructions}}></h3>
                </div>

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
margin-top: 4rem;
margin-bottom: 4rem;
justify-content: center;
background: #222222;

padding: 30px;
border-radius: 4px;
@media (max-width: 720px){
    img{
       
            width: 95%;
        
    }
}
img{
    border-radius: 5px;
    
   
}

.active{
    background: #cc0000;
    border-color: #cc0000;
    color: white;
}
h2{
    color: white;
    margin-bottom: 2rem;
    text-decoration: underline #ff5500;
    text-underline-offset: 10px;
}

li{
    font-size: 1.2rem;
    line-height: 2.5rem;
}
ul{
    margin-top: 2rem;
    margin-bottom: 50px;
    font-weight: bold;
}
h3{
    margin-top: 30px;
    margin-bottom: 30px;
    text-align: justify;
    font-size: 17px;
    a{
        color: black;
        pointer-events: none;
        cursor: default;
    }
}


span{
    color: white;
    color: #ff5500;
    font-size: 15px;
    font-family: Cursive;
    

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
border-radius: 3px;



`
const Info = styled.div`
margin-left: 15rem;
margin-top: 40px;
background-color: white;
border-radius :10px;

`
const ExtraInfo = styled.div`
margin: 15px;

span{
    color: white;
    font-family: Segoe UI;
    display: flex;
    padding-bottom: 20px;
    
    
    p{
        margin-left: 5px;
        color: #ff5500;
        
    }

    svg{
        height: 20px;
        
    }
}
`
export default Recipe