import React from "react";
import styled from "styled-components";

const Container = styled.div`
  flex: 1;
  display:flex;
  align-items:center;
  justify-content:center;
  gap:16px;
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
  border-radius: 24px;
  background: black;
`;

const GenerateImageCard = ({ src, loading }) => {
  return (
    <Container>
      {loading ? (
        <>Loading ...</>
      ) : (
       <>{src ? <Image /> : <>Write a prompt ot generate image </>}</>
      )}
      {/* <Image /> */}
    </Container>
  );
};

export default GenerateImageCard;
