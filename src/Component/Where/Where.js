import React from 'react' ;
import styled from 'styled-components' ;

const WhereDiv = styled.div`
    position: absolute;
    width: 100%
    height: 100%;
    top: 300%;
`

const Text = styled.div`
    text-align: center;
    color:#a6a6a6;
    font-family: 'Prompt', sans-serif;
    font-size: 24px;
    margin: 30px;
    width: auto;
`

const Map = styled.div`
        transform: translate(-50%, -50%);
        left: 50%;
        top: 54%;
        position: absolute;
        margin-top: 2%;
`
const Img = styled.img`
        margin-top: 2%;
`

const WhereBar = styled.div`
    position: absolute;
    width: 100%;
    height: 8%
    top: 396%;
    background: #E2928D;
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

const Where =()=>(
    <div>

        <a name="Where">

        <WhereDiv>
            <Map>
                <Img src='./images/where/3.svg' height="450px"/>
                <Text>ชั้น 3 อาคารเรียนรวม 2 (CB2)<br/> และตึกคณะเทคโนโลยีสารสนเทศ (SIT)</Text>
            </Map>
            <Title>Where</Title>
        </WhereDiv>
        <WhereBar/>
        </a>
    </div>

)

export default Where
