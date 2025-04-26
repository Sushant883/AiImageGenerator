import React from 'react'
import styled from 'styled-components'


const Container = styled.div`
  background: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.text_primary};
  height: 100%;
`;

function CreatePost() {
  return (
    <Container>CreatePost</Container>
  )
}

export default CreatePost
