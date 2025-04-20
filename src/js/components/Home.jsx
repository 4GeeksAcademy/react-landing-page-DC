// Se importan todos los componenetes al cuerpo principal

import React from "react"; // Se importan todos los componenetes del react
import Navbar from "./Navbar.jsx"; // Se importan todos los componenetes del Navbar
import Jumbotron from "./Jumbotron.jsx"; // Se importan todos los componenetes del Jumbotron
import Card from "./Card.jsx"; // Se importan todos los componenetes de la card
import Footer from "./Footer.jsx"; // Se importan todos los componenetes del footer


// Creamos la funcion para juntar todos los componentes 

const Home = () => {
  return (
    <>
      <Navbar />
      <Jumbotron />
      <div id="Cards">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <Footer />
    </>
  );
};

export default Home;