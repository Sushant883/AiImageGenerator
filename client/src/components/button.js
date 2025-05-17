// // src/components/Button.jsx
// import React from "react";
// import styled, { css } from "styled-components";
// import { CircularProgress } from "@mui/material";

// const StyledButton = styled.button`
//   display: inline-flex;
//   align-items: center;
//   justify-content: center;

//   gap: 8px;
//   padding: ${({ size }) => (size === "small" ? "8px 16px" : size === "large" ? "14px 28px" : "10px 20px")};
//   background-color: ${({ theme, variant }) =>
//     variant === "outlined" ? "transparent" : theme.primary};
//   color: ${({ theme, variant }) =>
//     variant === "outlined" ? theme.primary : "#fff"};
//   border: ${({ theme, variant }) =>
//     variant === "outlined" ? `2px solid ${theme.primary}` : "none"};
//   font-size: ${({ size }) => (size === "small" ? "14px" : size === "large" ? "18px" : "16px")};
//   border-radius: 8px;
//   cursor: pointer;
//   transition: all 0.3s ease;
//   font-weight: 600;
  
//   &:hover {
//     opacity: 0.8;
//     transform: translateY(-2px);
//   }

//   ${({ disabled }) =>
//     disabled &&
//     css`
//       background-color: gray;
//       color: white;
//       cursor: not-allowed;
//       opacity: 0.6;
//     `}
// `;

// const Button = ({ 
//   text,
//   leftIcon,
//   rightIcon,
//   onClick,
//   size = "medium", // small, medium, large
//   variant = "contained", // contained, outlined
//   loading = false,
//   disabled = false,
// }) => {
//   return (
//     <StyledButton
//       onClick={onClick}
//       size={size}
//       variant={variant}
//       disabled={disabled || loading}
//     >
//       {loading ? (
//         <CircularProgress size={22} color="inherit" />
//       ) : (
//         <>
//           {leftIcon}
//           {text}
//           {rightIcon}
//         </>
//       )}
//     </StyledButton>
//   );
// };

// export default Button;


import React from "react";
import styled, { css } from "styled-components";
import { CircularProgress } from "@mui/material";

const StyledButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: ${({ size }) => (size === "small" ? "8px 16px" : size === "large" ? "14px 28px" : "10px 20px")};
  background-color: ${({ theme, variant }) =>
    variant === "outlined" ? "transparent" : theme.primary};
  color: ${({ theme, variant }) =>
    variant === "outlined" ? theme.primary : "#fff"};
  border: ${({ theme, variant }) =>
    variant === "outlined" ? `2px solid ${theme.primary}` : "none"};
  font-size: ${({ size }) => (size === "small" ? "14px" : size === "large" ? "18px" : "16px")};
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: 600;
  
  &:hover {
    opacity: 0.8;
    transform: translateY(-2px);
  }

  ${({ disabled }) =>
    disabled &&
    css`
      background-color: gray;
      color: white;
      cursor: not-allowed;
      opacity: 0.6;
    `}
`;

const Button = ({
  text,
  leftIcon,
  rightIcon,
  onClick,
  size = "medium", // small, medium, large
  variant = "contained", // contained, outlined
  loading = false,
  disabled = false,
  type = "button", // added type prop
}) => {
  return (
    <StyledButton
      onClick={disabled || loading ? undefined : onClick}
      size={size}
      variant={variant}
      disabled={disabled || loading}
      aria-busy={loading}  // accessibility
      type={type}
    >
      {loading ? (
        <CircularProgress size={22} color="inherit" />
      ) : (
        <>
          {leftIcon}
          {text}
          {rightIcon}
        </>
      )}
    </StyledButton>
  );
};

export default Button;
