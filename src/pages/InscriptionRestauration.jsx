import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { addRestaurantInfoAction } from "../redux/Restaurant/restaurant-slice";
import { withUnAuthRoutesBlock } from "../hoc/withUnAuthRoutesBlock";
function InscriptionRestauration() {
  const [name, setname] = useState();
  const [town, settown] = useState("Bafoussam");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleForm = (e) => {
    dispatch(addRestaurantInfoAction({ name, town }));
    e.preventDefault();

    navigate("/admin-creation");
  };
  return (
    <div>
      <div className="container">
        <h1>MadeAEATS</h1>
        <h2>Application des Restaurants</h2>
      </div>
      <form className="form" onSubmit={handleForm}>
        <h3 className="title margin-bottom">Inscrivez votre restaurant</h3>
        <div className="form-row">
          <label htmlFor="nom" className="form-label">
            Nom du restaurant
          </label>
          <input
            type="text"
            className="form-input"
            name="nom"
            id="nom"
            required
            value={name}
            onChange={(e) => setname(e.target.value)}
          />
        </div>
        <div className="form-row">
          <label htmlFor="localisation" className="form-label">
            Localisation du restaurant
          </label>
          <select
            id="localisation"
            required
            className="dropdown"
            value={town}
            onChange={(e) => settown(e.target.value)}
          >
            <option value="Bafoussam">Bafoussam</option>
            <option value="Douala">Douala</option>
            <option value="Yaounde">Yaounde</option>
            <option value="Sangmelima">Sangmelima</option>
          </select>
        </div>
        <button type="submit" className="btn btn-block">
          Ajouter
        </button>
        <div className="underline-flex">
          <Link className="Link" to="/connexion">
            Se connecter a votre compte
          </Link>
          <div className="underline" />
        </div>
      </form>
    </div>
  );
}

export default InscriptionRestauration;

export const UnProtectedInscription = withUnAuthRoutesBlock(
  InscriptionRestauration
);
