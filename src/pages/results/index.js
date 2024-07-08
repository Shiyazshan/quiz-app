import React, { useContext } from "react";
import { datas } from "../../components/questions";
import styled from "styled-components";
import { Context } from "../../context/Store";

function Results() {
  const {
    state: { user_data },
  } = useContext(Context);
  const answers = user_data.selectedAnswers;
  return (
    <>
      <h1 style={{ textAlign: "center" }}>Correct Answers</h1>
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
        {answers.map((item) => (
          <div>{item} </div>
        ))}
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
const Cover = styled.div``;
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
