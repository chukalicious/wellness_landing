import "./App.css";
import NavbarContainer from "./components/NavbarComponent";
import { useEffect } from "react";
import { themeChange } from "theme-change";

function App() {
  useEffect(() => {
    themeChange(false);
    // 👆 false parameter is required for react project
  }, []);

  return (
    <div>
      <NavbarContainer />{" "}
    </div>
  );
}

export default App;
