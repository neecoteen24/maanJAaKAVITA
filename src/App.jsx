import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import FirstPage from "./FirstPage";
import SecondPage from "./SecondPage";
import ThirdPage from "./ThirdPage";
import React from "react";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FirstPageWithNav />} />
        <Route path="/second" element={<SecondPage />} />
        <Route path="/third" element={<ThirdPage />} />
      </Routes>
    </BrowserRouter>
  );
}

function FirstPageWithNav() {
  const navigate = useNavigate();
  const handleGoToSecond = () => {
    // Create a fast scroll effect before navigating
    window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
    setTimeout(() => {
      navigate("/second");
    }, 350); // Fast scroll duration
  };
  return <FirstPage onYes={handleGoToSecond} />;
}

export default App;
