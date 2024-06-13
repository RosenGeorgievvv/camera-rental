import { useState } from "react";
import NavBar from "./components/Navbar/NavBar";

function App() {
  const [theme, setTheme] = useState("light");


  return (
    <div className="container">
      <NavBar theme={theme} setTheme={setTheme} />
    </div>
  );
}

export default App;
