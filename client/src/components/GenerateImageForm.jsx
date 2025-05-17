import React from "react";
import styled from "styled-components";
import Button from "./Button";
import TextInput from "./TextInput";
import { AutoAwesome, CreateRounded } from "@mui/icons-material";

const Form = styled.div`
  flex: 1;
  // border: 2px solid blue;
  padding: 16px 20px;
  display: flex;
  flex-direction: column;
  // gap: 9%;
  justify-content: center;
`;
const Top = styled.div`
  // marign-top: 100px;
  display: flex;
  flex-direction: column;
  // border: 2px solid red;
  gap: 6px;
`;
const Title = styled.div`
  // margin-top: 100px;
  // border: 2px solid white;
  font-size: 28px;
  font-weight: 500;
  color: ${({ theme }) => theme.text_primary};
`;
const Desc = styled.div`
  // border: 2px solid red;
  font-size: 17px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_secondary};
`;
const Body = styled.div`
  display: flex;
  flex-direction: column;
  // gap: 18px;
  // border: 2px solid red;
  font-size: 12px;
  padding: 0px 0px;
  font-weight: 400;
  // margin-botton: 0px;
  color: ${({ theme }) => theme.text_secondary};
`;
const Actions = styled.div`
  // border: 2px solid red;
  // marign-bottom: 20px;
  padding-bottom: 20px;
  flex: 1;
  display: flex;
  // flex: start;
  // height:150px;

  gap: 8px;
`;

const GenerateImageForm = ({
  post,
  setPost,
  createPostLoading,
  generateImageLoding,
  setGenerateImageLoading,
  setCreatePostLoading,
}) => {
  const generateImageFun = async () => {
    setGenerateImageLoading(true);
    await generateImageFun({ prompt: post.prompt })
      .then((res) => {
        setPost({
          ...post,
          photo: `data:image/jpeg; base64${res?.data?.photo}`,
        });
        setGenerateImageLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const createPostFun = () => {
    createPostLoading(true);
  };
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
        {/* <label
          htmlFor=""
          style={{
            // marginBottom: '-15px',
            // border: "2px solid red",
            fontSize: "25px",
            fontWeight: "600",
            // fontFamily: "popins",
          }}
        >
        </label> */}
        <TextInput /> {/*  this is Text input component */}
        {/* <Textarea>

        </Textarea>
        {/* <TextInput 
        label="Image Prompt"
        placeholder="Write a detailed prompt here !"
        name="name" 
        row="8"
        textarea />  this is Text input component */}
      </Body>
      ** You can create an AI image to the community**
      <Actions>
        <Button
          text="Generate Image"
          flex
          leftIcon={<AutoAwesome />}
          isLoading={generateImageLoding}
          isDisabled={post.prompt === ""}
          onClick={() => generateImageFun()}
        />
        <Button
          text="Post Image"
          flex
          type="secondary"
          leftIcon={<CreateRounded />}
          isLoading={createPostLoading}
          isDisabled={
            post.name === "" || post.prompt === "" || post.photo === ""
          }
          onClick={() => createPostFun()}
        />
        {/*  this is button component */}
      </Actions>
      {/* here is our form body and actions code ends  */}
    </Form>
  );
};

export default GenerateImageForm;
