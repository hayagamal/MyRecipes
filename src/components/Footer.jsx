import React from 'react'
import logo from '../images/logo.png'
import {NavLink} from 'react-router-dom'
import styled from 'styled-components'
import {BsTelephone, BsEnvelope} from 'react-icons/bs'
import {HiHome} from 'react-icons/hi'
function Footer() {
  return (
    <div>

<footer  className="bg-dark mb-0 page-footer font-small  pt-lg-5 pt-3 mt-5 text-light" >
    <div  className="container-fluid text-center text-md-left">
        <div className="row">
            <div className=" col-md-4 mt-md-1 mt-3 mb-sm-4">
                <h5 style={{color: '#ff5500', 'font-size': '20px'}}>Ready to cook?</h5>
                <p>Subscribe to Our Newsletter</p>
                <Input type="text" placeholder="Enter your email address"/>
                <Button>Subscribe</Button>          </div>

            <hr className="clearfix w-100 d-md-none pb-0"/>

            <div className=" col-md-2 col-sm-4 mb-md-0 mb-3">
                <h5 style={{color: '#cc0000'}}className="text-uppercase">Overview</h5>
                <ul className="list-unstyled">
                    <li className='py-1'><NavLinks href="/cuisine/Italian">Recipes</NavLinks></li>
                    <li className='py-1'><NavLinks href="#!">About Us</NavLinks></li>
                    <li className='py-1'><NavLinks href="#!">Contact Us</NavLinks></li>
                    
                </ul>
            </div>
            <div className="col-md-2 col-sm-3 mb-md-0 mb-3">
            <h5 style={{color: '#ff5500'}} className="text-uppercase">Contact Us</h5>
                <ul className=" list-unstyled">
                    <li className=' py-1'><NavLinks href="#!"><HiHome/> Cairo, Egypt</NavLinks></li>
                    <li className='py-1'><NavLinks href="#!"><BsEnvelope/> info@gmail.com</NavLinks></li>
                    <li className='py-1'><NavLinks href="#!"><BsTelephone/> +1 23456789</NavLinks></li>
                    
                </ul>
            </div >

            <div className='col-md-4 col-sm-5' >
                <img src={logo} style={{width: '250px', height: '110px'}} />
            </div>
        </div>
    </div>

    <div className="footer-copyright text-center py-3">© 2022 Copyrights
       
    </div>

</footer>
    </div>
  )
}
const Button = styled.button`
background-color: #cc0000;
border: none;
height: 30px;
width: 100px;
color: white;
margin-top: 10px;

`
const Input = styled.input`
height: 30px;
border: none;
width: 250px;
margin-bottom: 10px;
`
const NavLinks = styled.a`
color: white;
font-weight: bold;
margin: 20px 0px 20px 0px;

&:hover{
    color:#cc0000;
}
`
export default Footer