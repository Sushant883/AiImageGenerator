import React from 'react';
import styled from 'styled-components';
import { SearchOutlined } from '@mui/icons-material';


// this is container div 
const TextInputContainer = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
border: 2px solid #ccc;
  border-radius: 5px;
  padding: 5px 10px;
`;

// this is child div 
const Input = styled.input`
  padding: 10px;
  font-size: 18px;
  outline: none;
  border:none;
  width: 90%;
  color:white;
  background:transparent;
  box-sizing: border-box; /* Ensures padding doesn't overflow input box */
  
//   &:focus {
//     border-color: #4CAF50; /* Green border on focus */
//     box-shadow: 0 0 5px rgba(76, 175, 80, 0.5); /* Green glow on focus */
//   }

  &:hover {
    border-color: #aaac; /* Border turns grey when hovered */
  }
`;

const TextInput = ({ placeholder, value, onChange }) => {
  return (
    <TextInputContainer>
        <Input
      type="text"
      placeholder="Enter your prompt . . .!"
    />
    < SearchOutlined />
    </TextInputContainer>
    
     
  
  );
};

export default TextInput;
