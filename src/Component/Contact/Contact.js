import React from 'react' ;
import styled from 'styled-components' ;

const ContactDiv = styled.div`
    position: absolute;
    background-color: #CDD8D7;
    width: 100%
    height: 100%;
    top: 600%;
`
const StopContactBar = styled.div`
    position: absolute;
    width: 100%;
    height: 4%
    top: 696%;
    background: #F4CABC;
`
const TitleDiv = styled.div`
    top: 5%;
    position: absolute;
    width: 100%;
`

const Title = styled.p`
    font-family: 'Dosis', sans-serif;
    font-size: 64px;
    font-weight: 900;
    color: #4F766F;
    text-align: center;   
`
const Content = styled.div`
    position: absolute;
    top: 22%;
    font-family: 'Dosis', sans-serif;
    font-size: 50px;
    color: #4F766F;
    font-weight: 600;
`
const Address = styled.div`
    background-color: #4F766F;
    border-radius: 15px;
    padding: 10px;
    width: auto;
    height: auto;
    top: 80%;
    position: absolute;
    transform: translate(-50%, -50%);
    left: 50%
`
const Span = styled.span`
    font-family: 'Dosis', sans-serif;
    font-size: 46px;
    color: #FFF;
    font-weight: 600;
`
const SpanContent = styled.div`
    font-family: 'Dosis', sans-serif;
    font-size: 28px;
    text-align: center;
    color: #FFF;
    font-weight: 600;
`

const Img = styled.img`
    width: 85%;
    float: right;
    padding-top: 35px;
`
const Div = styled.div`
    margin-bottom: 10px;
`

const Contact =()=>(
    <div>
        <a name="Contact">
        <ContactDiv>
            <TitleDiv><Title>Contact</Title></TitleDiv>
            <Content className="col-sm-4 offset-sm-4">
            <Div className="row">
            <img className="col-2 offset-sm-1" src="./images/Contact/facebook.svg"/>
            <span className="col-sm-8 offset-sm-1">
                HelloOtter 2019
            </span>
            </Div>
            <Div className="row">
            <img className="col-2 offset-sm-1" src="./images/Contact/twitter.svg"/>
            <span className="col-sm-8 offset-sm-1">
                HelloOtter_2019
            </span>
            </Div>
            <Div className="row">
            <img className="col-2 offset-sm-1" src="./images/Contact/instagram.svg"/>
            <span className="col-sm-8 offset-sm-1">
                HelloOtter 2019
            </span>
            </Div>
            </Content>


            <Address className="col-sm-6">
                <Span className="col-sm-4">KMUTT</Span>
                <Img src='./images/Contact/White.svg' className="col-sm-8"/>
                <br/>
                <SpanContent>
                    126 Pracha Uthid Rd, Khwaeng Bang Mod, <br/>Khet Thung Kru, Bangkok 10140
                </SpanContent>
            </Address>
        </ContactDiv>
        <StopContactBar/>
        </a>
    </div>

)

export default Contact