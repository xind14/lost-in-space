import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Components/Home/Home.jsx";
import PasswordModal from "./Components/PasswordModal/PasswordModal.jsx";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
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


  const navigate = useNavigate(); // Use useNavigate hook to get navigation function

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
      navigate("/scripts"); // Use navigate function to redirect
    } else {
      alert("Incorrect password. Please try again.");
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
    <>
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
      </>
  );
}

export default App;
