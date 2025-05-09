import React, { useState } from "react";
import styled from "styled-components";
import GenerateImageForm from "../components/GenerateImageForm";
import GenerateImageCard from "../components/GenerateImageCard";

const Container = styled.div`
  height: 100%;
  width: 100%;
  overflow-y: scroll;
  background : ${({ theme }) => theme.bg}
  padding: 30px 30px;
  // padding-bottom: 50px;
  display:flex;
  flex-direction: column;
  // border: 2px solid blue;
  align-items: center;
  justify-content:center;
  gap: 20px;
  @media(max-width: 768px) {
  padding: 6px 10px;
  // marign-top:100px;
  overflow-y: scroll;
  }
`;

const Wrapper = styled.div`
  // flex: 1;
  width: 100%;
  height: fit-content;
  max-width: 1200px;
  gap: 8%;
  display: flex;
  justify-content: center;
  @media (max-width: 768px) {
    flex-direction: column;
    margin-top: 100px;
  }
  @media (max-width: 425px) {
    flex-direction: column;
    margin-top: 500px;
  }
  // @media (max-width: 375px) {
  //   flex-direction: column;
  //   margin-top: 600px;
  // }
  // @media (max-width: 320px) {
  //   flex-direction: column;
  //   // margin-top: 550px;
  // }
`;

function CreatePost() {
  const [generateImageLoding, setGenerateImageLoading] = useState(false);
  const [createPostLoading, setCreatePostLoading] = useState();
  const [post, setPost] = useState({
    name: "",
    prompt: "",
    photo: "",
  });
  return (
    <Container>
      <Wrapper>
        <GenerateImageForm
          post={post}
          setPost={setPost}
          createPostLoading={createPostLoading}
          generateImageLoding={generateImageLoding}
          setGenerateImageLoading={setGenerateImageLoading}
          setCreatePostLoading={setCreatePostLoading}
        />
        {/* this is Generateimage form components */}
        <GenerateImageCard src={post?.photo} loading={generateImageLoding} />
        {/* this is Generateimage card components */}
      </Wrapper>
    </Container>
  );
}

export default CreatePost;
