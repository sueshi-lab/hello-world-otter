import React from 'react';
import styled from 'styled-components';

const WhatDiv = styled.div`
    position: absolute;
    width: 100%
    height: 100%;
    top: 99%;
    background-color: #cdd8d7;
`
const ImgTitle = styled.img`
    position: absolute;
    right: 0%;
    margin-top: 15px;
`
const Img = styled.img`
    margin-top: 20px;
`
const BigDiv = styled.div`
    position: absolute;
    margin: 6%;
`

const H5 = styled.h5`
    margin-top: 45px;
    font-family: 'Prompt', sans-serif;
    color: #000;
    font-size: 22px;
`
const Text = styled.p`
    font-family: 'Prompt', sans-serif;
    color: #000;
    font-size: 18px;
    padding: 15px;
`
const Div = styled.div`
    border-radius: 20px;
    background-color: #F4CABB;
    border: none;
`
const Div2 = styled.div`
    border-radius: 20px;
    background-color: #E2928D;
    border: none;
    margin-top: 30px;
`
const Div3 = styled.div`
    background-color: transparent;
    border: none;
`


const What = () => (
    <div>
        <a name="What">
            <WhatDiv>
                <div className="col-sm-11 offset-sm-1">
                <ImgTitle src="./images/what/Group.svg" />
                <BigDiv className="col-sm-11 offset-sm-1">
                    <div className="row">
                        <div className="col-sm-4 offset-sm-1">
                            <br></br>
                            <Div3 className="card">
                                <Div3 className="card-body">
                                    <Div className="row">
                                        <Img className="col-6" margin-top="20px" src="./images/what/frontend.svg" width="70px" height="70px" />
                                        <H5 className="col-6">Front-end</H5>
                                        <Div2><Text class="card-text">ฝึกฝนพัฒนาการในด้านศาสตร์และศิลป์ในการตกแต่งเว็บด้วย styled-components Bootstrap</Text>
                                        </Div2>
                                    </Div>
                                </Div3>
                            </Div3>
                        </div>

                        <div className="col-sm-4 offset-sm-1">
                            <br></br>
                            <Div3 className="card">

                                <Div3 className="card-body">
                                    <Div className="row">
                                        <Img className="col-6" margin-top="20px" src="./images/what/design.svg" width="70px" height="70px" />
                                        <H5 className="col-6">Design</H5>
                                        <Div2><Text class="card-text">สรรค์สร้างเว็บไซต์สุดล้ำ นำเทรนด์ และตอบสนองต่อความต้องการของผู้ใช้งาน สร้างเอกลักษณ์ของเว็บไซต์</Text>
                                        </Div2>
                                    </Div>
                                </Div3>
                            </Div3>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-sm-4 offset-sm-1">
                            <br></br>
                            <Div3 className="card">

                                <Div3 className="card-body">
                                    <Div className="row">
                                        <Img className="col-6" margin-top="20px" src="./images/what/infrastructor.svg" width="70px" height="70px" />
                                        <H5 className="col-6">Infrastructure</H5>
                                        <Div2><Text class="card-text">เรียนรู้เกี่ยวกับการใช้ Linux และชุดคำสั่ง เรียนรู้การ config และใช้งาน Nginx เบื้องต้น</Text>
                                        </Div2>
                                    </Div>
                                </Div3>
                            </Div3>
                        </div>

                        <div className="col-sm-4 offset-sm-1">
                            <br></br>
                            <Div3 className="card">

                                <Div3 className="card-body">
                                    <Div className="row">
                                        <Img className="col-6" margin-top="20px" src="./images/what/design.svg" width="70px" height="70px" />
                                        <H5 className="col-6">Game</H5>
                                        <Div2><Text class="card-text">เราแบ่งความรู้ออกเป็น 3 แขนง ได้แก่ Game Design ,Graphic Design Game ,Sound</Text>
                                        </Div2>
                                    </Div>
                                </Div3>
                            </Div3>
                        </div>
                    </div>
                </BigDiv>
            </div>
            </WhatDiv>
        </a>

    </div>
)

export default What