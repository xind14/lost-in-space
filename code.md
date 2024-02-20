import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Import BrowserRouter as Router
import Script from "./Components/Script/Script.jsx";
import Header from "./Components/Header/Header.jsx";
import Home from "./Components/Home/Home.jsx";
import Description from "./Components/Description/Description.jsx";
import Costume from "./Components/Costume/Costume.jsx";
import PasswordModal from "./Components/PasswordModal/PasswordModal.jsx";
import charactersData from "./assets/data.json";
import "./App.css";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const [password, setPassword] = useState("");
  const [redirectToScripts, setRedirectToScripts] = useState(false);

  // Remove useNavigate here since it's not used anymore

  const handleCardClick = (character) => {
    setSelectedCharacter(character);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedCharacter(null);
  };

  const handlePasswordSubmit = () => {
    if (password === selectedCharacter.password) {
      setRedirectToScripts(true);
      setShowModal(false);
      // Redirect to /scripts upon successful password submission
      // Since you're using BrowserRouter, you can use history.push instead of navigate
      history.push("/scripts");
    } else {
      alert("Incorrect password. Please try again.");
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    handlePasswordSubmit();
  };

  const setPasswordHelper = (e) => {
    setPassword(e.target.value);
  };

  return (
    <Router> {/* Wrap your component with Router */}
      <Header />
      <Routes>
        <Route exact path="/" element={<Home characters={charactersData} handleCardClick={handleCardClick} />} />
        <Route exact path="/costumes" element={<Costume characters={charactersData} />} />
        <Route exact path="/scripts" element={<Script character={selectedCharacter} />} />
        <Route exact path="/descriptions" element={<Description characters={charactersData} />} />
      </Routes>
      <PasswordModal
        character={selectedCharacter}
        show={showModal}
        handleClose={handleCloseModal}
        password={password}
        setPasswordHelper={setPasswordHelper}
        handleFormSubmit={handleFormSubmit}
      />
    </Router>
  );
}

export default App;




import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Components/Home/Home.jsx";
import PasswordModal from "./Components/PasswordModal/PasswordModal.jsx";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Script from "./Components/Script/Script.jsx";
import Header from "./Components/Header/Header.jsx";
import Description from "./Components/Description/Description.jsx";
import charactersData from "./assets/data.json";
import Costume from "./Components/Costume/Costume.jsx";
import "./App.css";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [selectedCharacter, setSelectedCharacter] = useState(true);
  const [password, setPassword] = useState("");
  const [formVisible, setFormVisible] = useState(false);
  const [redirectToScripts, setRedirectToScripts] = useState(false);
  const [showFormModal, setShowFormModal] = useState(false);

  // useEffect(() => {
  //   if (redirectToScripts) {
  //     console.log('Redirect to script in useEffect', redirectToScripts);
  //     setShowModal(false);
  //   }
  // }, [redirectToScripts]);

  const handleCardClick = (character) => {
    console.log("Char is", character);
    setSelectedCharacter(character);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedCharacter(false);
  };

  const handlePasswordSubmit = () => {
    console.log("Selected char is", selectedCharacter);
    console.log(
      "pw === selectedCharacter.pw",
      password === selectedCharacter.password
    );
    if (password === selectedCharacter.password) {
      
      setRedirectToScripts(true);
      // console.log(
      //   "Redirect to script in handle password submit: ",
      //   redirectToScripts
      // );
      setShowModal(false);
    } else {
      alert("Incorrect password. Please try again.");
      console.log("Password incorrect");
    }
  };

  const handleFormModalClose = () => {
    setShowFormModal(false);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted...");
    console.log("Password is: ", password);
    handlePasswordSubmit(password);
    setShowFormModal(false);
  };

  const setPasswordHelper = (e) => {
    e.preventDefault();
    console.log("Setting password helper...");
    setPassword(e.target.value);
  };

  console.log("Rendering App Component...", redirectToScripts);

  return (
    <Router>
      <Header />
      <Routes>
        <Route
          exact
          path="/costumes"
          element={<Costume characters={charactersData} />}
        />
        <Route
          exact
          path="/"
          element={
            redirectToScripts ? (
              <>
                <Script character={selectedCharacter} />
                {/* {setRedirectToScripts(false)} */}
              </>
            ) : (
              <Home
                characters={charactersData}
                handleCardClick={handleCardClick}
              />
            )
          }
        />

        <Route
          exact
          path="/descriptions"
          element={<Description characters={charactersData} />}
        />
        {/* <Route exact path="/scripts" element={
          redirectToScripts ? (
            <Script character={selectedCharacter} />
          ) : (
            <Navigate to="/" />
          )
        } /> */}
      </Routes>

      <PasswordModal
        character={selectedCharacter}
        show={showModal}
        handleClose={handleCloseModal}
        password={password}
        setPasswordHelper={setPasswordHelper}
        formVisible={formVisible}
        setFormVisible={setFormVisible}
        redirectToScripts={redirectToScripts}
        setRedirectToScripts={setRedirectToScripts}
        handlePasswordSubmit={handlePasswordSubmit}
        showFormModal={showFormModal}
        setShowFormModal={setShowFormModal}
        handleFormModalClose={handleFormModalClose}
        handleFormSubmit={handleFormSubmit}
      />
    </Router>
  );
}

export default App;
