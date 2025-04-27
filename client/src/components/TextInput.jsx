import React, { useState } from 'react';
import styled from 'styled-components';

// Styled components for the advanced input field
const InputWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 400px;
`;

const InputField = styled.input`
  width: 100%;
  padding: 12px 16px;
  font-size: 16px;
  border: 2px solid ${({ theme, isError }) => (isError ? 'red' : theme.primary)};
  border-radius: 8px;
  outline: none;
  transition: all 0.3s ease;

  &:focus {
    border-color: ${({ theme }) => theme.secondary};
    box-shadow: 0 0 5px ${({ theme }) => theme.secondary};
  }

  &:not(:placeholder-shown) {
    padding-top: 20px;
  }
`;

const Placeholder = styled.label`
  position: absolute;
  top: 12px;
  left: 16px;
  font-size: 16px;
  color: ${({ isActive }) => (isActive ? '#0099FF' : '#888')};
  transition: all 0.2s ease;
  pointer-events: none;
`;

const ErrorText = styled.div`
  font-size: 12px;
  color: red;
  margin-top: 5px;
`;

const ClearButton = styled.button`
  position: absolute;
  top: 50%;
  right: 16px;
  transform: translateY(-50%);
  background: transparent;
  border: none;
  cursor: pointer;
  font-size: 16px;
  color: ${({ theme }) => theme.primary};

  &:hover {
    color: ${({ theme }) => theme.secondary};
  }
`;

const TextInput = ({ label, value, onChange, type = 'text', placeholder, validationPattern }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [inputValue, setInputValue] = useState(value);
  const [isError, setIsError] = useState(false);

  // Function to handle input value changes
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    if (validationPattern && !new RegExp(validationPattern).test(e.target.value)) {
      setIsError(true);
    } else {
      setIsError(false);
    }
    onChange(e.target.value);
  };

  // Handle focus and blur for placeholder animation
  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const clearInput = () => {
    setInputValue('');
    onChange('');
  };

  return (
    <InputWrapper>
      <InputField
        type={type}
        value={inputValue}
        onChange={handleInputChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        isError={isError}
        placeholder=" "
      />
      <Placeholder isActive={isFocused || inputValue}>
        {label}
      </Placeholder>
      {isError && <ErrorText>{`Invalid ${label}`}</ErrorText>}
      <ClearButton onClick={clearInput}>×</ClearButton>
    </InputWrapper>
  );
};

export default TextInput;
