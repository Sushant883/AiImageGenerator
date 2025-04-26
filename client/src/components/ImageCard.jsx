import React from "react";
import styled from "styled-components";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Card = styled.div`
position:relative;
display:flex;
border-radius: 20px;
box-shadow: 1px 2px 40px 8px ${({ theme })=> theme.black + 60};
cursor:pointer;
transition: all 0.3 ease;
&hover {
box-shadow: 1px 2px 40px 8px ${({ theme })=> theme.black + 80};
scale: 1.05;
}
`;
const HoverOverlay = styled.div``;
const Prompt = styled.div``;
const Author = styled.div``;



const ImageCard = () => {
  return (
    <Card>
      <LazyLoadImage src="https://sp.yimg.com/ib/th?id=OIP.uoa-pARZtksq6F7eMJn4MAHaHa&pid=Api&w=148&h=148&c=7&dpr=2&rs=1" />

      <HoverOverlay>
        <Prompt>Prompt</Prompt>
        <Author>Author</Author>
      </HoverOverlay>
    </Card>
  );
};

export default ImageCard;
