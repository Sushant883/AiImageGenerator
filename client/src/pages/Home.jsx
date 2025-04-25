// Home.jsx

import React from "react";
import styled from "styled-components";

const Container = styled.div`
  padding: 2rem;
  background-color: #f5f5f5;
  min-height: 100vh;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 3rem;
  color: #333;
`;

const SubTitle = styled.p`
  font-size: 1.2rem;
  color: #666;
  margin-top: 1rem;
`;

const Button = styled.button`
  margin-top: 2rem;
  padding: 0.75rem 1.5rem;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const Home = () => {
  return (
    <Container>
      <Title>Welcome to My Website</Title>
      <SubTitle>Explore our features, products, and services.</SubTitle>
      <Button>Get Started</Button>
    </Container>
  );
};

export default Home;
