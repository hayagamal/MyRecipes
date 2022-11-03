import { FaPizzaSlice, FaHamburger} from 'react-icons/fa'
import {GiNoodles, GiChopsticks} from 'react-icons/gi'
import styled from "styled-components"
import {NavLink} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Category() {
  return (
      
    <List>
        <Slink to={'/cuisine/Italian'}><FaPizzaSlice/>
        <h4>Italian</h4>
        </Slink>
        <Slink to={'/cuisine/American'} ><FaHamburger/>
        <h4>American</h4>
        </Slink>
        <Slink to={'/cuisine/Thai'} ><GiNoodles/>
        <h4>Thai</h4>
        </Slink>
        <Slink to={'/cuisine/Japanese'} ><GiChopsticks/>
        <h4>Japanese</h4>
        </Slink>
    </List>
    

  )
}
const List= styled.div`
display: flex;
justify-content: center;
margin: 2rem 0rem;
}

`
const Slink = styled(NavLink)`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin-right: 2rem;
border-radius: 50%;
text-decoration: none;
background-color: #18191a;
width: 6rem;
height: 6rem;
cursor: pointer;
transform: scale(0.8);
&:hover{
  box-shadow: 0 10px 10px rgba(0,0,0,0.2);
  background-color: #cc0000;
}
h4{
  color: white;
  font-size: 0.9rem;
  margin-top: 10px;
}


svg{
  color: white;
  font-size: 20px;
}

&.active{
  background: #ff5500;
  svg{
    color: white;
  }

  h4{
    color: white;
  }

  
}

`