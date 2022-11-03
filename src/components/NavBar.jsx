import React from 'react'
import '../index.css'
import logo from '../images/logo.png'
import 'bootstrap/dist/css/bootstrap.css'
import {Nav, Navbar} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import styled from 'styled-components'



function NavBar(props) {
   
  return (
    <Navbar style={{'background':'#18191ae1'}} variant="light" sticky="top" expand="md"> 
    <Navbar.Brand>
   <Link className={'offset-1'} to={'/'}> <img  style={{width: '100px'}}src={logo} alt="img"/> </Link>
    
    </Navbar.Brand>
    <Navbar.Toggle style={{'background-color': 'white', opacity: '0.2'}} className={'col-sm-1'}/>
    <Navbar.Collapse>
   <Nav>
    
    <NaviNav  className="m-1" href="/cuisine/Italian">Recipes</NaviNav>
    <NaviNav   className="m-1" href="Recipes">About Us</NaviNav>
    <NaviNav  className="m-1">Contact Us</NaviNav>

   </Nav>
   
   </Navbar.Collapse>
 
   

    </Navbar>
  )
}
const NaviNav = styled(Nav.Link)`
color: white;
font-weight: bold;
&:hover{
    color: #ff5500;
}


`
export default NavBar