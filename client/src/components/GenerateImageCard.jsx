import React from "react";
import styled from "styled-components";

const Container = styled.div`
  flex: 1;
  padding: 16px;
  border: 2px dashed yellow;
  color: white;
  border-radius: 20px;
`;

const Image = styled.img`
width: 100%;
height: 100%;
// border: 2px solid red;
object-fit: cover;
border-radius:24px;
background: yellow;
`;

const GenerateImageCard = () => {
  return (
    <Container>
      <Image src="https://images.unsplash.com/photo-1729277980958-092c5e9e2ea4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTZ8fHxlbnwwfHx8fHw%3D"/>
    </Container>
  );
};

export default GenerateImageCard;
