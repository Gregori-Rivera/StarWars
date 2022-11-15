import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const CardPersonaje = (props) => {
  const { store, actions } = useContext(Context);
  return (

    <div className="characters cards d-flex container m-3">
      <div className="card" style={{ width: "220px",height: "480px", backgroundColor: "black" }}>
        <img src={props.character.image} className="card-img-top" />
        <div className="card-body text-white">
          <h5 className="card-title">{props.character.name}</h5>
          <p className="card-text">
            Gender: {props.character.gender}
            <br></br>
            Hair color: {props.character.hair_color}
            <br></br>
            Eye color: {props.character.eye_color}
          </p>

          <div className="container d-flex flex-row">
            <Link
              to={`/personajes/${props.character.uid}`}
              className="btn btn-outline-warning text-white"
              // style={{ backgroundColor: "#f9d71c" }}
            >
              Datos
            </Link>


            <a
              href="#"
              className="btn btn-outline-danger"
              onClick={(event) => actions.toggleFavorite(props.character)}
            >
              <i
                className={
                  actions.isFavorite(props.character.name) == undefined
                    ? "far fa-heart"
                    : "fas fa-heart"
                }
              ></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};