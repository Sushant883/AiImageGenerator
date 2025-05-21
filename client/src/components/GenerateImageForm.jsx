import React from "react";
import styled from "styled-components";
import axios from "axios";
import Button from "./Button";
import TextInput from "./TextInput";
import { AutoAwesome, CreateRounded } from "@mui/icons-material";

const Form = styled.div`
  flex: 1;
  padding: 16px 20px;
  display: flex;
  flex-direction: column;
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
  font-size: 12px;
  padding: 0;
  font-weight: 400;
  color: ${({ theme }) => theme.text_secondary};
`;
const Actions = styled.div`
  padding-bottom: 20px;
  flex: 1;
  display: flex;
  gap: 8px;
`;

const GenerateImageForm = ({
  post,
  setPost,
  createPostLoading,
  generateImageLoading,
  setGenerateImageLoading,
  setCreatePostLoading,
}) => {
  const generateImageFun = async () => {
    try {
      setGenerateImageLoading(true);
      // setGenerateImageLoading(true);
      // const response = await axios.post("/api/generate-image", {
      console.log("Sending prompt:", post.prompt);

      const response = await axios.post("http://localhost:8080/api/generate-image", {prompt: post.prompt});
      setPost({
        ...post,
        photo: `data:image/jpeg;base64,${response.data.photo}`,
      });
    } catch (error) {
      console.error("Error generating image:", error);
    } finally {
      setGenerateImageLoading(false);
    }
  };

  const createPostFun = async () => {
    try {
      setCreatePostLoading(true);
      await axios.post("/api/create-post", {
        name: post.name,
        prompt: post.prompt,
        photo: post.photo,
      });
      // Optionally reset form or show success message
    } catch (error) {
      console.error("Error creating post:", error);
    } finally {
      setCreatePostLoading(false);
    }
  };

  return (
    <Form>
      <Top>
        <Title>Generate Image with prompt</Title>
        <Desc>
          Write your prompt according to the image you want to generate!
        </Desc>
      </Top>

      <Body>
        <TextInput
           value={post.prompt}
          // value={post.photo}
          onChange={(e) => setPost({ ...post, prompt: e.target.value })}
          placeholder="Write a detailed prompt here!"
        />
      </Body>

      <Actions>
        <Button
          text="Generate Image"
          flex
          leftIcon={<AutoAwesome />}
          // isLoading={generateImageLoading}
          // isDisabled={!post.prompt}
          loading={generateImageLoading}
          disabled={!post.prompt}
          onClick={generateImageFun}
        />
        <Button
          text="Post Image"
          flex
          type="secondary"
          leftIcon={<CreateRounded />}
          loading={createPostLoading}
          disabled={!post.name || !post.prompt || !post.photo}
          onClick={createPostFun}
        />
      </Actions>
    </Form>
  );
};

export default GenerateImageForm;
