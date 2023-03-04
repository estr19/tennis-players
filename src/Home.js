import React from "react";
import { Link } from "react-router-dom";

function Home({setDisplayNavbar}) {
  const showNavbar = () => {
    setDisplayNavbar("flex");
  };

  return (
    <div className="home">
      <p className="display-3 fw-bold m-5">Choose a player:</p>
      <div className="d-flex flex-row flex-wrap justify-content-center">
        <Link to="/novak" className="playerCard" onClick={() => showNavbar()}>
          <p className="display-6 fw-bold">Novak</p>
          <img src="/novak.jpg" alt="Novak Djokovic with 2015 US Open Trophy"/>
        </Link>
        <Link to="/dylan" className="playerCard" onClick={() => showNavbar()}>
          <p className="display-6 fw-bold">Dylan</p>
          <img src="/dylan.jpg" alt="Dylan Alcott with 2021 US Open Trophy"/>
        </Link>
        <Link to="/niels" className="playerCard" onClick={() => showNavbar()}>
          <p className="display-6 fw-bold">Niels</p>
          <img src="/niels.jpg" alt="Niels Vink with 2022 US Open Trophy"/>
        </Link>
      </div>
    </div>
  );
}

export default Home;