import { Route, HashRouter as Router, Routes } from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';
import './App.css';

function App() {

  /* 전역으로 적용할 CSS 작성 */
  const GlobalStyle = createGlobalStyle`
    html, body, #root {
    height: 100%;
    margin: 0;
    padding: 0;
    }
  
    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    }

    body {
    font-family: sans-serif;
    background-color: white;
    color: black;
    line-height: 1.6;
    display: block !important;
    place-items: unset !important;
    }
    `;

  const AppContainer = styled.div`
    /* width: 100%;
    min-height: 100vh; */
    `;

  return (
    <Router>
      <GlobalStyle />
      <AppContainer>
        <Routes>          
          <Route path="/pages" element={<MainPage />} />
        </Routes>
      </AppContainer>
    </Router>
  )
}

export default App
