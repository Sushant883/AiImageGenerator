// Home.jsx

import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 100%;
  overflow-y: scroll;
  background : ${({ theme })=> theme.bg}
  padding: 30px 30px;
  padding-bottom: 50px;
  display:flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  @media(max-width: 768px) {
  padding: 6px 10px;
  }
`;


const Headline = styled.div`
font-size :34px;
font-weight:500;
color: ${({ theme})=> theme.text_primary};
display:flex;
align-itmes:center;
flex-direction: column;

@media(max-width: 600px){
font-size: 22px;
 }
`;

const Span = styled.div`
font-size:30px;
color: ${({theme})=> theme.secondary};
font-weight:800;
`;


const Home = () => {
  return <Container>
    <Headline>
      Explore Popular posts in the community!
      <Span>Generated with AI</Span>
    </Headline>

  </Container>;
};

export default Home;
