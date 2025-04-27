// Home.jsx

import React from "react";
import styled from "styled-components";
import SearchBar from "../components/SearchBar";
import ImageCard from "../components/ImageCard";

const Container = styled.div`
  height: 100%;
  width: 100%;
  overflow-y: scroll;
  background : ${({ theme }) => theme.bg}
  padding: 30px 30px;
  padding-bottom: 50px;
  display:flex;
  flex-direction: column;
  // border: 2px solid blue;
  align-items: center;
  gap: 20px;
  @media(max-width: 768px) {
  padding: 6px 10px;
  }
`;

const Headline = styled.div`
  font-size: 34px;
  font-weight: 500;
  color: ${({ theme }) => theme.text_primary};
  display: flex;
  // border: 2px solid red;

  align-itmes: center;
  flex-direction: column;

  @media (max-width: 600px) {
    font-size: 22px;
  }
`;

const Span = styled.div`
  font-size: 30px;
  text-align: center;
  color: skyblue;
  font-weight: 800;
  @media (max-width: 600px) {
    font-size: 20px;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  max-width: 1400px;
  padding: 32px 0px;
  display: flex;
  justify-content: center;
`;

const CardWrapper = styled.div`
  // border: 2px solid red;
  display: grid;
  gap: 20px;

  @media (min-width: 1200px) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media (min-width: 640px) and (max-width: 1199px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 639px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const Home = () => {
  return (
    <Container>
      <Headline>
        Explore Popular posts in the community!
        <Span>⊙ Generated with AI ⊙</Span>
      </Headline>
      <SearchBar /> {/*this is SearchBar component  */}
      <Wrapper>
        <CardWrapper>
          {/*this all are card component  */}
          <ImageCard />
          <ImageCard />
          <ImageCard />
          <ImageCard />
          <ImageCard />
          <ImageCard />
          <ImageCard />
          <ImageCard />
          <ImageCard />
        </CardWrapper>
      </Wrapper>
    </Container>
  );
};

export default Home;
