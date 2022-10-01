import React from 'react' ;
import styled from 'styled-components' ;

const WhoDiv = styled.div`
    position: absolute;
    width: 100%
    height: 100%;
    top: 200%;
`

const Img = styled.img`
    position: absolute;
    top: 20%;
    left: 50%;
    transform: translate(-50%, 0%);
`

const ToWhereBar = styled.div`
    position: absolute;
    width: 100%;
    height: 8%
    top: 296%;
    background: #E6C570;
`
const WhoBar = styled.div`
    position: absolute;
    width: 100%;
    height: 8%
    top: 196%;
    background: #F4CABC;
`
const Title = styled.div`
    font-family: 'Dosis', sans-serif;
    font-size: 64px;
    font-weight: 900;
    color: #4F766F;
    left: 50%;
    top: 7%;
    transform: translate(-50%, 0%);
    position: absolute;
`

const ContentText1 = styled.div`
    position: absolute;
    padding: 25px;
    background-color: #BCBEBF;
    width: auto;
    font-family: 'Prompt', sans-serif;
    color: #4F766F;
    font-size: 30px;
    border-radius: 15px;
    top: 42%;
    // left: 5%;
    text-align: center;
`

const ContentText2 = styled.div`
    position: absolute;
    padding: 25px;
    background-color: #BCBEBF;
    width: auto;
    font-family: 'Prompt', sans-serif;
    color: #4F766F;
    font-size: 30px;
    border-radius: 15px;
    top: 40%;
    left: 7%;
    text-align: center;
`
const ContentText3 = styled.div`
    position: absolute;
    padding: 25px;
    background-color: #BCBEBF;
    width: auto;
    font-family: 'Prompt', sans-serif;
    color: #4F766F;
    font-size: 30px;
    border-radius: 15px;
    top: 67%;
    left: 2%;
    text-align: center;
`
const ContentText4 = styled.div`
    position: absolute;
    padding: 25px;
    background-color: #BCBEBF;
    width: auto;
    font-family: 'Prompt', sans-serif;
    color: #4F766F;
    font-size: 30px;
    border-radius: 15px;
    top: 71%;
    left: 10%;
    text-align: center;
`


const Who =()=>(
    <div>
        <WhoBar/>
        <a name="Who">
        <WhoDiv>
            <Title>Who</Title>
            <Img src="./images/Who/person.svg"/>
            <div className="row">
            <ContentText1 className="col-sm-3 offset-sm-3">
                นักศึกษาปริญญาตรี
            </ContentText1>
            <ContentText2 className="col-sm-3 offset-sm-6">
                นักศึกษาคณะ<br/>เทคโนโลยีสารสนเทศ
            </ContentText2>
            </div>
            <div className="row">
            <ContentText3 className="col-sm-3 offset-sm-2">
                ผู้ที่ต้องการความรู้<br/>เกี่ยวกับการเขียน<br/>เว็บไซต์หรือพัฒนาเกม
            </ContentText3>
            <ContentText4 className="col-sm-4 offset-sm-6">
                นักศึกษามหาวิทยาลัย<br/>เทคโนโลยีพระจอมเกล้าธนบุรี
            </ContentText4>
            </div>
        </WhoDiv>
        <ToWhereBar/>
        </a>
    </div>

)

export default Who