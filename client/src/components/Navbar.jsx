import React from "react";
import styled from "styled-components";
import Button from "./Button";
import { AddRounded, ExploreRounded } from "@mui/icons-material";
import { useNavigate, useLocation } from "react-router-dom";
// import { darkTheme } from "./utils/Theme";

const Container = styled.div`
  flex: 1;
  background: ${({ theme }) => theme.bgLight};
  color: ${({ theme }) => theme.text_primary};
  font-weight: bold;
  font-size: 22px;
  padding: 14px 50px;
  display: flex;
  justify-content: space-between;
  align-item: center;
  box-shadow: 0, 0, 10px, rgba (0, 0, 0, 0.15);
  @media only screen and (max-width: 600px) {
    padding: 10px 12px;
  }
`;

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const path = location.pathname.split("/");
  return (
    <Container>
      GenAI

      {/* in this our if condition starts  */}
      { path[1] === "post" ? (
        <Button
        onClick={() => navigate("/")}
        text="Explore Posts"
        leftIcon={
          <ExploreRounded
            style={{
              fontSize: "18px",
            }}
          />
        }
        type="secondary"
      />
      ) : (
        <Button
          onClick={() => navigate("/post")}
          text="Create new post"
          leftIcon={
            <AddRounded
              style={{
                fontSize: "18px",
              }}
            />
          }
        />
      )}

      {/* here our if condition ends  */}

    </Container>
  );
}

export default Navbar;
