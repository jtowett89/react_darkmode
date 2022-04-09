import { useEffect, useState } from "react";
import "./App.css";
import Logo from "./images/logo.png";

function App() {
  const [darkMode, setDarkMode] = useState();
  const toggle = (event) => {
    event.preventDefault();
    if (darkMode === "false") {
      setDarkMode("true");
      localStorage.setItem("darkMode", "true");
    } else {
      setDarkMode("false");
      localStorage.setItem("darkMode", "false");
    }
    console.log(localStorage.getItem("darkMode"));
  };
  useEffect(() => {
    if (localStorage.getItem("darkMode")) {
      setDarkMode(localStorage.getItem("darkMode"));
      console.log(
        "The value of darkMode defined is: " + localStorage.getItem("darkMode")
      );
    } else {
      setDarkMode("false");
      localStorage.setItem("darkMode", "false");
      console.log(
        "The value of darkMode is: " + localStorage.getItem("darkMode")
      );
    }
  }, []);
  let darkModeClass =
    darkMode === "true" ? "fa fa-sun-o fa-2x" : "fa fa-moon-o fa-2x";
  return (
    <div className={darkMode === "true" ? "dark" : "light"}>
      <div className="nav">
        <img className="logo" alt="" src={Logo} />
        <ul>
          <li>
            <a href="/" onClick={toggle}>
              <i className={darkModeClass}></i>
            </a>
          </li>
        </ul>
      </div>
      <div className="banner">
        <h1 className="white">Dark Mode Toggle</h1>
        <p className="white">Cool Stuff</p>
      </div>
      <div className="container">
        <h1>About</h1>
        <p>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page editors now use Lorem Ipsum as their default model text, and a
          search for 'lorem ipsum' will uncover many web sites still in their
          infancy. Various versions have evolved over the years, sometimes by
          accident, sometimes on purpose (injected humour and the like).
        </p>
        <p>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page editors now use Lorem Ipsum as their default model text, and a
          search for 'lorem ipsum' will uncover many web sites still in their
          infancy. Various versions have evolved over the years, sometimes by
          accident, sometimes on purpose (injected humour and the like).
        </p>
        <p>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page editors now use Lorem Ipsum as their default model text, and a
          search for 'lorem ipsum' will uncover many web sites still in their
          infancy. Various versions have evolved over the years, sometimes by
          accident, sometimes on purpose (injected humour and the like).
        </p>
      </div>
      <div className="footer">
        <p className="copyright">&copy; 2022 Dark Mode. All Rights Reserved</p>
      </div>
    </div>
  );
}

export default App;
