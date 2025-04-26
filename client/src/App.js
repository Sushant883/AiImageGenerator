import styled, { ThemeProvider } from "styled-components";
import { darkTheme } from "./utils/Theme";
import Home from "./pages/Home";
import CreatePost from "./pages/CreatePost";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";


//  {/*this is (nameof) component  */}

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  background: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.text_primary}
  overflow-x: hidden;
  overflow-y: hidden;
  transition : all 0.2s ease;
 
`;

const Wrapper = styled.div`
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 3;
  color:white;
  
`;

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <Container>
        <Wrapper>
          <BrowserRouter>
          <Navbar /> {/*this is Navbar component  */}
            <Routes>
              <Route path="/" element={<Home />} exact /> 
              <Route path="/post" element={<CreatePost />} exact />
            </Routes>
          </BrowserRouter>
          {/* <Home /> // this is components  */}
          {/* <CreatePost />  */}
        </Wrapper>
      </Container>
    </ThemeProvider>
  );
}

export default App;
