import React from 'react';
import styled from 'styled-components';

const WhenDiv = styled.div`
    position: absolute;
    width: 100%
    height: 100%;
    top: 400%;
`
const Title = styled.div`
    font-family: 'Dosis', sans-serif;
    font-size: 64px;
    font-weight: 900;
    color: #E2928D;
    left: 50%;
    top: 7%;
    transform: translate(-50%, 0%);
    position: absolute;
`

const Div = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 70%;
`

const Img = styled.img`
    width: 13%;
`
const Text = styled.div`
    font-family: 'Prompt', sans-serif;
    color: #E2928D;
    font-size: 28px;
    font-weight: 600;
    text-align: center;
`
const Text2 = styled.div`
    font-family: 'Prompt', sans-serif;
    color: #4F766F;
    font-size: 20px;
    font-weight: 600;
    text-align: center;
`

const When = () => (
    <div>
        <a name="When">
            <WhenDiv>
                <Div>
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="col-sm-11 offset-sm-1">
                                <Img src='./images/when/T1.1.svg' className="col-sm-2" />
                                <Img src='./images/when/line1.svg' className="col-sm-2"/>
                                <Img src='./images/when/T2.1.svg' className="col-sm-2" />
                                <Img src='./images/when/line1.svg' className="col-sm-2" />
                                <Img src='./images/when/T3.1.svg' className="col-sm-2" />
                                <Img src='./images/when/line1.svg' className="col-sm-2" />
                                <Img src='./images/when/T4.1.svg' className="col-sm-2" />
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-sm-12">
                            <Text className="col-sm-12">
                                <span className="col-sm-2">เปิดรับสมัคร</span>
                                <span className="col-sm-2 offset-sm-1">ปิดรับสมัคร</span>
                                <span className="col-sm-2 offset-sm-1">ประกาศผล</span>
                                <span className="col-sm-2 offset-sm-1">วันกิจกรรม</span>
                        </Text>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-sm-12">
                            <Text2 className="col-sm-12">
                                <span className="col-sm-2">20 กันยายน 2562</span>
                                <span className="col-sm-2 offset-sm-1">1 ตุลาคม 2562</span>
                                <span className="col-sm-2 offset-sm-1">8 ตุลาคม 2562</span>
                                <span className="col-sm-2 offset-sm-1">15 ตุลาคม 2562</span>
                        </Text2>
                        </div>
                    </div>
                </Div>
                <Title>Timeline</Title>
            </WhenDiv>

        </a>
    </div>

)

export default When
