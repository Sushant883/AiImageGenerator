// import React from "react";
// import { SearchOutlined } from "@mui/icons-material";
// import styled from "styled-components";

// const SearchBarContainer = styled.div`
// max-width:550px;
// display: flex;
// width: 90%;
// border: 1px solid ${({theme}) => theme.text_secondary + 90};
// color: ${({theme}) => theme.text_primary};
// border-radius:8px;
// padding:12px 16px;
// cursor: pointer;
// gap: 6px;
// align-item: center;
// `;

// const SearchBar = () => {
//   return (
//     <SearchBarContainer>
//       <SearchOutlined />
//       <input 
//       placeholder="Search with prompt or name . . ."
//       style={{
//         border: "none",
//         outline:"none",
//         width :"100%",
//         color: "inherit",
//         background: "transparent",
//         fontSize: "16px"
//       }}
//       />
//     </SearchBarContainer>
//   );
// };

// export default SearchBar;


import React from "react";
import { SearchOutlined } from "@mui/icons-material";
import styled from "styled-components";

const SearchBarContainer = styled.div`
  max-width: 550px;
  display: flex;
  width: 90%;
  border: 1px solid ${({ theme }) => theme.text_secondary + "90"};
  color: ${({ theme }) => theme.text_primary};
  border-radius: 8px;
  padding: 12px 16px;
  cursor: pointer;
  gap: 6px;
  align-items: center;  /* fixed typo: align-item => align-items */
`;

const SearchInput = styled.input`
  border: none;
  outline: none;
  width: 100%;
  color: inherit;
  background: transparent;
  font-size: 16px;
`;

const SearchBar = () => {
  return (
    <SearchBarContainer>
      <SearchOutlined />
      <SearchInput
        placeholder="Search with prompt or name . . ."
        aria-label="Search"
      />
    </SearchBarContainer>
  );
};

export default SearchBar;
