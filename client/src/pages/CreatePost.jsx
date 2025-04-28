import React from "react";
import styled from "styled-components";
import GenerateImageForm from "../components/GenerateImageForm";
import GenerateImageCard from "../components/GenerateImageCard";

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

const Wrapper = styled.div`
  flex: 1;
  width:100%
  height: fit-content;
  max-width: 1200px;
  gap: 8%;
  display: flex;
  justify-content: center;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

function CreatePost() {
  return (
    <Container>
      <Wrapper>
        
         <GenerateImageForm /> {/* this is Generateimage form components */}

         

         <GenerateImageCard /> {/* this is Generateimage card components */}
        
        </Wrapper>
    </Container>
  );
}

export default CreatePost;
