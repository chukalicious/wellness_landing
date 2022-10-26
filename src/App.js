import "./App.css";
import NavbarContainer from "./components/NavbarComponent";
import HomeContainer from "./components/HomeComponent";
import CardsContainer from "./components/CardsComponent";
import ContactFormContainer from "./components/ContactForm";
import FooterContainer from "./components/Footer";
import { useEffect } from "react";
import { themeChange } from "theme-change";

function App() {
  useEffect(() => {
    themeChange(false);
    // 👆 false parameter is required for react project
  }, []);

  return (
    <div>
      <NavbarContainer /> <HomeContainer /> <CardsContainer />{" "}
      <ContactFormContainer />
      <FooterContainer />
    </div>
  );
}

export default App;
