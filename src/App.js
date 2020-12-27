import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Shop from "./components/Shop";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { darkTheme, lightTheme } from "./theme/themes";

function App() {
  const [themeObj, setThemeObj] = React.useState(lightTheme);

  function themeToggler() {
    setThemeObj(themeObj.theme === "light" ? darkTheme : lightTheme);
  }

  return (
    <Router>
      <div className={`${themeObj.bgColor} ${themeObj.textColor}`}>
        <Nav themeObj={themeObj} />
        <Switch>
          <Route path="/" exact>
            <Home themeObj={themeObj} />
          </Route>
          <Route path="/shop">
            <Shop themeObj={themeObj} />
          </Route>
          <Route path="/about">
            <About themeObj={themeObj} />
          </Route>
          <Route path="/contact">
            <Contact themeObj={themeObj} />
          </Route>
        </Switch>
        <Footer themeObj={themeObj} themeToggler={themeToggler} />
      </div>
    </Router>
  );
}

export default App;
