import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const CardVehiculo = (props) => {
  const { store, actions } = useContext(Context);
  return (
    // carta pequena
    <div className="vehicles cards d-flex container m-3">
       <div className="card" style={{ width: "220px",height: "480px", backgroundColor: "black" }}>
        <img src={props.vehicles.image} className="card-img-top" />
        <div className="card-body text-white">
          <h5 className="card-title">{props.vehicles.name}</h5>
          <p className="card-text">
            name: {props.vehicles.name}
            <br></br>
            model: {props.vehicles.model}
            <br></br>
            vehicle class: {props.vehicles.vehicle_class}
          </p>

          {/* boton que abre la carta y modifica el url */}
          <div className="container buttonCards">
            <Link
              to={`/vehiculos/${props.vehicles.uid}`}
              className="btn btn-outline-warning text-white"
            >
              Info Vehículo
            </Link>

            {/* boton favoritos */}
            <a
              href="#"
              className="btn btn-outline-danger"
              onClick={(event) => actions.toggleFavorite(props.vehicles)}
            >
              <i
                className={
                  actions.isFavorite(props.vehicles.name) == undefined
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