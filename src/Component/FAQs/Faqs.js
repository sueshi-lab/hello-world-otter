import React from 'react' ;
import styled from 'styled-components' ;

import Collapse from './Collapse.js'

const FaqsDiv = styled.div`
    position: absolute;
    width: 100%
    height: 100%;
    top: 500%;
`
const FaqsBar = styled.div`
    position: absolute;
    width: 100%;
    height: 8%
    top: 496%;
    background: #6D7172;
`
const ToContactBar = styled.div`
    position: absolute;
    width: 100%;
    height: 4%
    top: 596%;
    background: #F4E8D0;
`

const Title = styled.div`
    font-family: 'Dosis', sans-serif;
    font-size: 64px;
    font-weight: 900;
    color: #6D7172;
    right: 5%;
    top: 8%;
    position: absolute;
`

const Faqs =()=>(
    <div>
        <FaqsBar/>

        <a name="FAQs">
        <FaqsDiv className="col-sm-6 offset-sm-5">
            <Title>
                FAQs
            </Title>
            <div>
            <Collapse/>
            </div>
        </FaqsDiv>
        <ToContactBar/>
        </a>
    </div>
)

export default Faqs