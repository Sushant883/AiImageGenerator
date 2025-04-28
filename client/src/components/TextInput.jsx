// import React from 'react';
// import styled from 'styled-components';
// // import { SearchOutlined } from '@mui/icons-material';


// // this is container div 
// const TextInputContainer = styled.div`
// display: flex;
// align-items: center;
// justify-content: space-between;
// border: 2px solid #ccc;
//   border-radius: 5px;
//   padding: 5px 10px;
// `;

// // this is child div 
// const Input = styled.input`
//   padding: 10px;
//   font-size: 18px;
//   outline: none;
//   border:none;
//   width: 90%;
//   color:white;
//   background:transparent;
//   box-sizing: border-box; /* Ensures padding doesn't overflow input box */
  
// //   &:focus {
// //     border-color: #4CAF50; /* Green border on focus */
// //     box-shadow: 0 0 5px rgba(76, 175, 80, 0.5); /* Green glow on focus */
// //   }

//   &:hover {
//     border-color: #aaac; /* Border turns grey when hovered */
//   }
// `;

// const TextInput = () => {
//   return (
//     <TextInputContainer>
      
      
//       <Input 
//       text="text"
//       placeholder='Enter Your Name . . .!' />
    
      
//     {/* < SearchOutlined />  */}
//     </TextInputContainer>
    
     
  
//   );
// };

// export default TextInput;

import React from "react";
import styled from "styled-components";

// Container for the form
const Form = styled.div`
  // padding: 20px;
  display: flex;
  flex-direction: column;
  // border: 2px solid blue;
  gap: 20px;
  width: 100%;
  // max-width: 500px;
  margin: auto;
`;

// Container for input and textarea
const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  
`;

// Label styling
const Label = styled.label`
  font-size: 18px;
  font-weight: 600;
  color: #333;

  // &:focus{
  // color:white;
  // }
`;

// Input field styling
const Input = styled.input`
  padding: 10px;
  font-size: 16px;
  outline: none;
  border: 2px solid #ccc;
  background: transparent;
  border-radius: 5px;
  width: 100%;
  color: #333;
  // background-color: #fff;

  &:focus {
    // border-color: #4CAF50;
     border-color: #8A2BE2; 
    box-shadow: 0 0 5px rgba(76, 175, 80, 0.5);
  }
`;

// Textarea styling
const Textarea = styled.textarea`
  padding: 10px;
  font-size: 16px;
  outline: none;
  border: 2px solid #ccc;
  border-radius: 5px;
  width: 100%;
  color: #333;
  // background-color: #fff;
  background: transparent;
  resize: vertical;

  &:focus {
    // border-color: #4CAF50;
     border-color: #8A2BE2; 
    box-shadow: 0 0 5px rgba(76, 175, 80, 0.5);
  }
`;

const TextInput = () => {
  return (
    <Form>
      <InputContainer>
        <Label htmlFor="author">Author</Label>
        <Input
          // id="author"
          type="text"
          placeholder="Enter your name"
          name="author"
        />
      </InputContainer>

      <InputContainer>
        <Label htmlFor="imagePrompt">Image Prompt</Label>
        <Textarea
          // id="imagePrompt"
          placeholder="Write a detailed prompt here!"
          name="imagePrompt"
          rows="5"
        />
      </InputContainer>
    </Form>
  );
};

export default TextInput;
