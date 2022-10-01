import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
    position: absolute;
    top: 20%;
    font-family: 'Prompt', sans-serif;
`
const Question = styled.div`
    background-color: #4F766F;
    border-radius: 15px;
    padding: 20px;
`

const QuestionText = styled.button`
        color: #FFF;
        background-color: transparent;
        border: none;
        font-size: 28px;
        cursor: pointer;

        &:active{
          transform: translateY(4px);
        }
        &:focus{
          outline: 0;
        }
`
const Answer = styled.div`
    background-color: #BCBEBF;
    border-radius: 15px;
    font-size: 26px;
    color: #4F766F;
`

const RemoveBorder = styled.div`
    border: transparent;
    margin: 30px;
`

const Collapse = () => (
  <div>
    <Div class="accordion" id="accordionExample">
      <RemoveBorder class="card">
        <Question class="card-header" id="headingOne">
          <h5 class="mb-0">
            <QuestionText class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne">
              เขียนโค้ดไม่เป็น ไม่มีพื้นฐาน ไม่เคยทำเว็บ สมัครเข้าร่วมโครงการได้ไหม?
        </QuestionText>
          </h5>
        </Question>

        <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
          <Answer className="card-body col-sm-10 offset-sm-2">
            <p>เพียงแค่สนใจและพร้อมเรียนรู้ก็สมัครได้</p>
          </Answer>
        </div>
      </RemoveBorder>

      
      <RemoveBorder class="card">
        <Question class="card-header" id="headingTwo">
          <h5 class="mb-0">
            <QuestionText class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              มีค่าใช้จ่ายในการสมัครและเข้าร่วมโครงการนี้ไหม?
        </QuestionText>
          </h5>
        </Question>
        <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
        <Answer className="card-body col-sm-10 offset-sm-2">
        ไม่มีค่าใช้จ่ายในการเข้าร่วมโครงการนี้
      </Answer>
        </div>
      </RemoveBorder>

      <RemoveBorder class="card">
        <Question class="card-header" id="headingThree">
          <h5 class="mb-0">
            <QuestionText class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
              ช่วงเวลาที่เข้าร่วมกิจกรรม เข้าตอนไหน เข้าทุกวันไหม?
        </QuestionText>
          </h5>
        </Question>
        <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
        <Answer className="card-body col-sm-10 offset-sm-2">
          เข้ากิจกรรมทุกวันอังคาร และวันพฤหัสตอนเย็น
      </Answer>
        </div>
      </RemoveBorder>
    </Div>
  </div>
)
export default Collapse