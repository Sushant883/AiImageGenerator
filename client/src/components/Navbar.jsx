import React from "react";
import styled from "styled-components";
import Button from "./Button";
import { AddRounded } from "@mui/icons-material";

const Container = styled.div`
  flex: 1;
  background: ${({ theme }) => theme.navbar};
  color: ${({ theme }) => theme.text_primary};
  font-weight: bold;
  font-size: 22px;
  padding: 14px 50px;
  display: flex;
  justify-content: space-between;
  align-item: center;
  box-shadow: 0,0,10px,rgba (0,0,0,0.15);
`;

function Navbar() {
  return (
    <Container>
      GenAI
      <Button
        text="Create new post"
        leftIcon={
          <AddRounded
            style={{
              fontSize: "18px",
            }}
          />
        }
      />
    </Container>
  );
}

export default Navbar;
