import React from "react";
import styled from "styled-components";
import { CircularProgress } from "@mui/material";
import { useState } from "react";

const Container = styled.div`
  flex: 1;
  min-height:300px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
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

const GenerateImageCard = (
  {
    post,
    setPost,
    // loading,
    createPostLoading,
    generateImageLoding,
    setGenerateImageLoading,
    setCreatePostLoading,
  }
) => {
    const [loading] = useState(false); // initially loading true
    const [src] = useState(""); // image src blank initially
  return (
    <Container>
      {loading ? (
        <>
          <CircularProgress
            style={{
              color: "inherit",
              width: "24px",
              height: "24px",
            }}
          />
          {/* Loading ...{" "} */}
          Generating Your Image ...
        </>
      ) : (
        <>{src ? <Image src={src}/> : <>Write a prompt to generate image </>}</>
      )}
      {/* <Image /> */}
    </Container>
  );
};

export default GenerateImageCard;
