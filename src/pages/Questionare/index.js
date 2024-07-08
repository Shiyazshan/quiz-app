import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { QuestionConfig } from "../../axiosConfig";
import { datas } from "../../components/questions";
import { useNavigate } from "react-router-dom";
import { Context } from "../../context/Store";

function Quesionare() {
  const [currentQstn, setCurrentQuestion] = useState(0);
  const [isClick, setClick] = useState(true);
  const [isWrong, setWrong] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState([]);
  const navigate = useNavigate();
  const {
    dispatch,
    state: { user_data },
  } = useContext(Context);
  const preventClick = () => {
    setClick(false);
    dispatch({
      type: "UPDATE_USER_DATA",
      user_data: {
        selectedAnswers: selectedAnswer,
      },
    });
  };

  const nextQuestion = () => {
    setClick(true);
    setWrong(false);
    if (currentQstn < datas.length - 1) {
      setCurrentQuestion(currentQstn + 1);
    } else if (currentQstn + 1 == datas.length) {
      navigate("/results");
    }
  };

  const prevQuestion = () => {
    if (currentQstn > 0) {
      setCurrentQuestion(currentQstn - 1);
    }
  };
  const { question, correct_answer, incorrect_answers } = datas[currentQstn];
  console.log(selectedAnswer);
  return (
    <Container>
      <FormContainer>
        <QuestionNumber>Q. {currentQstn + 1}</QuestionNumber>
        <Question>{question} </Question>
        <Cover>
          {incorrect_answers.map((item) => (
            <Answers
              onClick={() => {
                setSelectedAnswer([...selectedAnswer, item]);
                setWrong(true);
                preventClick();
              }}
              className={isWrong ? "active" : ""}
              type={isClick}
            >
              {item}
            </Answers>
          ))}

          <Answers
            onClick={() => {
              setSelectedAnswer([...selectedAnswer, correct_answer]);
              preventClick();
            }}
            className={selectedAnswer == correct_answer && "correct"}
            type={isClick}
          >
            {correct_answer}
          </Answers>
        </Cover>
        <NextButton onClick={() => nextQuestion()}>Next</NextButton>
      </FormContainer>
    </Container>
  );
}

export default Quesionare;

const Container = styled.div`
  height: 100vh;
  background-color: aliceblue;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const FormContainer = styled.div`
  border: 1px solid #000;
  border-radius: 4px;
  width: 70%;
  padding: 30px 0;
  margin: 0 auto;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Question = styled.h2``;
const Answers = styled.h4`
  border: 1px solid #000;
  width: max-content;
  padding: 0 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30px;
  pointer-events: ${({ type }) => (!type ? "none" : "")};
  cursor: pointer;
  &.active {
    background-color: red;
    color: #ffff;
  }
  &.correct {
    background-color: green;
    color: #ffff;
  }
`;
const QuestionNumber = styled.h3``;
const NextButton = styled.div`
  margin-top: 50px;
  text-decoration: underline;
  cursor: pointer;
`;
const Cover = styled.div`
  display: flex;
  gap: 20px;
`;
