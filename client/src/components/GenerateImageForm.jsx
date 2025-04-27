import React from "react";
import styled from "styled-components";
import Button from "./Button";
import TextInput from "./TextInput";
import { AutoAwesome } from "@mui/icons-material";

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
const Title = styled.div`
  font-size: 28px;
  font-weight: 500;
  color: ${({ theme }) => theme.text_primary};
`;
const Desc = styled.div`
  font-size: 17px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_secondary};
`;
const Body = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
  font-size: 12px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_primary};
`;
const Actions = styled.div`
//   flex: 1;
  display: flex;
  gap: 8px;
`;

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

      <Body>
        <TextInput /> {/*  this is Text input component */}
      </Body>

      <Actions>
        <Button
          text="Generate Image"
          flex
          leftIcon={<AutoAwesome />}
        />
        {/*  this is button component */}
      </Actions>
      {/* here is our form body and actions code ends  */}
    </Form>
  );
};

export default GenerateImageForm;
