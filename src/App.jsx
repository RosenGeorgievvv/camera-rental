import { useState } from "react";

import './App.css';
import NavBar from "./components/Navbar/NavBar";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";

function App() {
  const [theme, setTheme] = useState("light");


  return (
    <>
    <div className={`container ${theme}`}>
      <NavBar theme={theme} setTheme={setTheme} />
      <Home />
    </div>     
    <Footer theme={theme} />
    </>
    
  );
}

export default App;
