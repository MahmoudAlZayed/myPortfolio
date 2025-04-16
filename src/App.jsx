//Componetes
import All from "./compnents/All";
//Style
import "./App.css";
//Pages
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<All />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
