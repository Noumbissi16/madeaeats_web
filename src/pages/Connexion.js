import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Connexion() {
  const navigate = useNavigate();
  const handleForm = (e) => {
    e.preventDefault();
    navigate("/");
  };
  return (
    <div>
      <div className="container">
        <h1>MadeAEATS</h1>
        <h2>Application des Restaurants</h2>
      </div>
      <form className="form" onSubmit={handleForm}>
        <h3 className="title margin-bottom">
          Connectez-vous a votre compte Restaurateur{" "}
        </h3>
        <div className="form-row">
          <label htmlFor="nom" className="form-label">
            Nom Utilisateur
          </label>
          <input
            type="text"
            className="form-input"
            name="nom"
            id="nom"
            required
          />
        </div>
        <div className="form-row">
          <label htmlFor="nom-restaurant" className="form-label">
            Nom restaurant
          </label>
          <input
            type="text"
            className="form-input"
            name="nom-restaurant"
            id="nom-restaurant"
            required
          />
        </div>

        <div className="form-row">
          <label htmlFor="password" className="form-label">
            Mot de passe
          </label>
          <input
            type="password"
            className="form-input"
            name="password"
            id="password"
            required
          />
        </div>
        <button type="submit" className="btn btn-block ">
          Connexion
        </button>
        <div className="underline-flex">
          <Link className="Link" to="/restaurant-creation">
            Creer un compte pour votre restaurant{" "}
          </Link>
          <div className="underline" />
        </div>
      </form>
    </div>
  );
}

export default Connexion;
