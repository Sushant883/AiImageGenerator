//
import styled, { ThemeProvider } from "styled-components";
import { darkTheme } from "./utils/Theme";
import Home from "./pages/Home";
import CreatePost from "./pages/CreatePost";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";

// Container: Main wrapper with theme-based background and text color
const Container = styled.div`
  width: 100%;
  height: 100vh; // full viewport height for better layout control
  display: flex;
  background: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.text_primary};
  overflow-x: hidden;
  overflow-y: hidden;
  transition: all 0.2s ease;
`;

// Wrapper: Flex container for content, vertical layout
const Wrapper = styled.div`
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 3;
  color: ${({ theme }) =>
    theme.text_primary}; // Consistent text color from theme
`;

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <Container>
        <Wrapper>
          <BrowserRouter>
            <Navbar /> {/* this is Navbar component */}
            <Routes>
              <Route path="/" element={<Home />} exact /> {/* Home page */}
              <Route path="/post" element={<CreatePost />} exact />{" "}
              {/* Create post page */}
            </Routes>
          </BrowserRouter>
        </Wrapper>
      </Container>
    </ThemeProvider>
  );
}

export default App;
