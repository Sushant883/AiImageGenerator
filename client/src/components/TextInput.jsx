// 
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
`;

const Label = styled.label`
  font-size: 16px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
`;

const InputField = styled.input`
  padding: 10px;
  font-size: 14px;
  outline: none;
  border: 2px solid #ccc;
  border-radius: 5px;
  width: 100%;
  background: transparent;
  color: ${({ theme }) => theme.text_primary};

  &:focus {
    border-color: #8a2be2;
    box-shadow: 0 0 5px rgba(138, 43, 226, 0.5);
  }
`;

const TextareaField = styled.textarea`
  padding: 10px;
  font-size: 14px;
  outline: none;
  border: 2px solid #ccc;
  border-radius: 5px;
  width: 100%;
  background: transparent;
  color: ${({ theme }) => theme.text_primary};
  resize: vertical;

  &:focus {
    border-color: #8a2be2;
    box-shadow: 0 0 5px rgba(138, 43, 226, 0.5);
  }
`;

/**
 * Props:
 * - label: string (optional)
 * - value: string
 * - onChange: function
 * - placeholder: string
 * - textarea: boolean
 * - rows: number (for textarea)
 */
const TextInput = ({
  label,
  value,
  onChange,
  placeholder = "",
  textarea = false,
  rows = 4,
}) => (
  <Container>
    {label && <Label>{label}</Label>}
    {textarea ? (
      <TextareaField
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        rows={rows}
      />
    ) : (
      <InputField
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    )}
  </Container>
);

export default TextInput;
