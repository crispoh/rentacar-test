//import "./App.css";
import {BrowserRouter , Route, Routes} from "react-router-dom";  
import Header from "./components/Header";
import CarList from "./components/CarList";
import CarForm from "./components/CarForm";
import { createGlobalStyle } from 'styled-components';
import "@fontsource/barlow";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Barlow', sans-serif;
    line-height: 1.6;
  }
`;

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <GlobalStyle />
        <Header />
        <Routes>
          <Route path="/" element={<CarList />} />
          <Route path="/agregar" element={<CarForm />} />
          <Route path="*" element={<h1>404 Not Found</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
