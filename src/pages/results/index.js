import React, { useContext } from "react";
import styled from "styled-components";

import { datas } from "../../components/questions";
import { Context } from "../../context/Store";
import { useNavigate } from "react-router-dom";

function Results() {
  //fetching data from Store
  const {
    state: { user_data },
  } = useContext(Context);
  const answers = user_data.selectedAnswers;

  // navigate for redirecting to home page
  const navigate = useNavigate();

  // when clicking play again clear localstorage and navigate to home
  const clearData = () => {
    window.localStorage.clear();
    navigate("/");
  };
  return (
    <>
      <CoverTop>
        <h1 style={{ textAlign: "center" }}>Correct Answers</h1>
        <Button onClick={() => clearData()}>Play again</Button>
      </CoverTop>
      <Container>
        <SubContainer>
          {datas.map((item, index) => (
            <Cover>
              <CoverQ>
                <h2>{index + 1}. </h2>
                <Title>{item.question} </Title>
              </CoverQ>
              <CoverA>
                <h4>Answer : </h4>
                <Answers>{item.correct_answer}, </Answers>
                <Answers className="red">
                  {item.incorrect_answers.map((item) => (
                    <span>{item},</span>
                  ))}
                </Answers>
              </CoverA>
            </Cover>
          ))}
        </SubContainer>
      </Container>
      <Your>
        <h1 style={{ textAlign: "center" }}>Your Answers</h1>
        <Cover className="your">
          {answers.map((item) => (
            <h3>{item} </h3>
          ))}
        </Cover>
      </Your>
    </>
  );
}

export default Results;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const SubContainer = styled.div``;
const CoverTop = styled.div`
  position: relative;
`;
const Button = styled.div`
  background-color: grey;
  display: inline-block;
  color: #fff;
  padding: 10px 20px;
  border-radius: 8px;
  right: 30px;
  cursor: pointer;
  position: absolute;
`;
const Cover = styled.div`
  &.your {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
const Your = styled.div``;
const CoverQ = styled.div`
  display: flex;
  gap: 10px;
`;
const CoverA = styled.div`
  display: flex;
  gap: 10px;
`;
const Title = styled.h2``;
const Answers = styled.h4`
  display: flex;
  gap: 10px;
  color: green;
  &.red {
    color: red;
  }
`;
