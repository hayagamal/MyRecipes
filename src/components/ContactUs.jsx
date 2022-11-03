import React, { useEffect } from 'react'
import styled from 'styled-components'
import Aos from 'aos';
import "aos/dist/aos.css"
import pop from '../images/pop.JPG'
function ContactUs(props) {
  
    useEffect(()=>{
        Aos.init({duration: 1500})
      
    },[])
  return (props.trigger===true ?(
    <Pop>   
    <Popup data-aos="fade-down">
        <img  src={pop}/>
        <button onClick={()=>props.setTrigger(false)}className='btn-close'></button>
        <div>
        <h3>Free Email Course on Subscription</h3>
        <h1> HOW TO START, MAINTAIN & OPTIMIZE A FOOD BLOG</h1>
        <h2> Learn how to start a food blog from scratch!</h2>
        
        <input type="text" placeholder='Enter email address'/>
        <Button>Subscribe</Button>
        </div>
    </Popup>
    </Pop>
 
  ): '')
  
}
const Button = styled.button`
    border: none;
    color: white;
    position: fixed;
    font-weight: bold;
    background-color: #cc0000;
    left: 70%;
    padding: 5px 20px 5px 20px;
    bottom:20%;
    border-radius: 10px;
    @media (max-width: 1200px){
        bottom: 10%;
    }
`
const Pop= styled.div`
width: 100%;
left: 0;
z-index: 3;
height: 100%;
position: fixed;
top: 0;
background-color: rgba(0,0,0,0.4);
`
const Popup = styled.div`
width: 50%;
height: 80vh;
background-color: #ffffff;
position: relative;
left: 25%;
align-items: center;
border-radius: 10px;
top: 90px;
color: black;
@media (max-width: 1200px){
    height: 50vh;
    width: 90%;
    left: 5%;
}
img{
    width: 55%; 
    height: 100%; 
    border-radius: 10px 0px 0px 10px;
    position: absolute;
}
.btn-close{
    z-index: 2;
    padding: 10px;
    right: 0%;
    position: absolute;
}
h3{
    color: black;
    position: absolute;
    bottom: 80%;
    left: 60%;
    @media (max-width: 1200px){
        font-size: 15px;   
        bottom: 70%;
    }
}
h1{
    color: black;
    position: absolute;
    left: 60%;
    color: #ff5500;
    top: 22%;
    @media (max-width: 1200px){
        font-size: 20px;   
        bottom: 80%;
    }
  
}

h2{
    color: black;
    position: absolute;
    left: 60%;
    color: navy blue;
    top: 50%;
    font-size: 13.5px;
   
}

input{
    position: absolute;
    left: 60%;
    top: 68%;
    width: 35%;
    border: none;
    background-color: #eeeee4;
    height: 25px;
    border-radius: 10px;
    color: black;

}

`
export default ContactUs