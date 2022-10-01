import React from 'react' ;
import styled from 'styled-components' ;

import Faqs from '../FAQs/Faqs.js';

const Navdiv = styled.div`
    position: fixed;
    height: auto;
    top: 50%;
    transform: translate(0%, -50%);
`

const Icon = styled.img`
    margin: 13%;
    height: 70px;
    // width: 70%;
    display: inline;
    &:hover{
        transform: rotate(360deg);
        transition: .8s ease-in-out;
    }
`

const Navbar =()=>(
    <Navdiv className="col-1">
    <div >
    <a href="#What"><Icon src='./images/Landing/1What.svg' data-toggle="tooltip" title="What"/></a>
    <a href="#Who"><Icon src='./images/Landing/2Who.svg' data-toggle="tooltip" title="Who"/></a>
    <a href="#Where"><Icon src='./images/Landing/3Where.svg' data-toggle="tooltip" title="Where"/></a>
    <a href="#When"><Icon src='./images/Landing/4When.svg' data-toggle="tooltip" title="When"/></a>
    <a href="#FAQs"><Icon src='./images/Landing/5FAQs.svg' data-toggle="tooltip" title="FAQs"/></a>
    <a href="#Contact"><Icon src='./images/Landing/6Contact.svg' data-toggle="tooltip" title="Contact"/></a>
    </div>
    </Navdiv>
)

export default Navbar