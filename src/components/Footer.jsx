import React from 'react'
import logo from '../images/logo.png'
import {Link} from 'react-router-dom'
import styled from 'styled-components'
import {BsTelephone, BsEnvelope} from 'react-icons/bs'
import {HiHome} from 'react-icons/hi'
import {GrTwitter,GrGithub,GrLinkedin,GrFacebookOption} from 'react-icons/gr'
function Footer() {
  return (
    <div>

<footer style={{background: '#18191a'}}  className=" mb-0 page-footer font-small  pt-lg-5 pt-3 mt-5 text-light" >
    <div  className="container-fluid text-center text-md-left">
        <div className="row">
            <div className=" col-md-4 mt-md-1 mt-3 mb-sm-4">
                <h5 style={{color: '#ff5500', 'font-size': '30px', 'font-weight': 'normal','font-family':'Haya'}}>Ready to cook?</h5>
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
                    <li className=' py-1'><p><HiHome/> Cairo, Egypt</p></li>
                    <li className='py-1'><p><BsEnvelope/> info@gmail.com</p></li>
                    <li className='py-1'><p><BsTelephone/> +1 23456789</p></li>
                    
                </ul>
            </div >

            <div className='col-md-4 col-sm-5' >
              <Link to={'/'}>  <img  src={logo} style={{width: '250px', height: '110px'}} /> </Link>
                <Grid  className='offset-1'>
                    <GrTwitter />
                    <GrGithub/>
                    <GrLinkedin/>
                    <GrFacebookOption/>
                </Grid>
            </div>
        </div>
    </div>

    <div className="footer-copyright text-center py-3">© 2022 Copyrights
       
    </div>

</footer>
    </div>
  )
}
const Grid = styled.div`
margin-top: 20px;
font-size: 25px;


*{
    margin-right: 30px;
    &:hover{
        color: #cc0000;
    }
}
`
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
const NavLinks = styled.p`
color: white;
font-weight: bold;
margin: 20px 0px 20px 0px;

&:hover{
    color:#cc0000;
}
`
export default Footer