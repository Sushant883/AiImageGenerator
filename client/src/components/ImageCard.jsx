import React from "react";
import styled from "styled-components";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Card = styled.div`
  position: relative;
  display: flex;
  border-radius: 20px;
  box-shadow: 1px 2px 40px 8px ${({ theme }) => theme.black};
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    box-shadow: 1px 2px 20px 0.25px ${({ theme }) => theme.creamy};
    scale: 1.05;
  }
    &:nth-child(7n + 1) {
    grid-column: auto/span 2;
    grid-row: auto/span 2;
  }
`;
const HoverOverlay = styled.div``;
const Prompt = styled.div``;
const Author = styled.div``;

const ImageCard = () => {
  return (
    <Card>
      <LazyLoadImage
        width="100%"
        src="https://sp.yimg.com/ib/th?id=OIP.uoa-pARZtksq6F7eMJn4MAHaHa&pid=Api&w=148&h=148&c=7&dpr=2&rs=1"
      />

      <HoverOverlay>
        <Prompt>Prompt</Prompt>
        <Author>Author</Author>
      </HoverOverlay>
    </Card>
  );
};

export default ImageCard;
