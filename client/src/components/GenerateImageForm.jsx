import React from "react";
import styled from "styled-components";

const Form = styled.div`
  flex: 1;
  padding: 16px 20px;
  display: flex;
  flex-direction: column;
  gap: 9%;
  justify-content: center;
`;
const Top = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;
const Title = styled.div``;
const Desc = styled.div``;
const Body = styled.div``;
const Actions = styled.div``;

const GenerateImageForm = () => {
  return (
    // this is our form
    <Form>
      {/* this is our top of the form  */}
      <Top>
        <Title>Generate Image with prompt</Title>
        <Desc>
          Write your prompt according to the image you want to Generate !
        </Desc>
      </Top>
      {/* here is our form ends */}

      {/* this is our body and actions of the form  */}

      <Body>Body</Body>

      <Actions>Actions</Actions>
      {/* here is our form body and actions code ends  */}
    </Form>
  );
};

export default GenerateImageForm;
