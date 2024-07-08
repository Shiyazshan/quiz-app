import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function Welcome() {
  return (
    <Container>
      <SubContainer>
        <Title>Welcome!</Title>
        <Button to="/question">Start Quiz</Button>
      </SubContainer>
    </Container>
  );
}

export default Welcome;

const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const SubContainer = styled.div``;
const Title = styled.h2`
  text-align: center;
`;
const Button = styled(Link)`
  width: 150px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  border: 1px solid #000;
  background-color: #000;
  color: #fff;
  border-radius: 8px;
`;
