import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import NavLogo from "../../img/sw_logo.png"; 

export const Navbar = () => {

	const { store, actions } = useContext(Context);

	return (
		<nav className="navbar navbar-dark bg-dark mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">
				<img className="navlogo" src={NavLogo} />
				</span>
			</Link>
			<div className="fav ml-auto nav-item dropdown btn-group">
        <button
          className="btn btn-success dropdown-toggle me-5"
          id="navbarScrollingDropdown"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <strong>
            Favorites ({store.favorites.length > 0 ? store.favorites.length : 0}
            )
          </strong>
        </button>

        {/* map boton favoritos al boton del nav */}
        <ul
          className="dropdown-menu"
          aria-labelledby="navbarScrollingDropdown"
        >
          {store.favorites.map((fav) => {
            return (
              <li key={fav.name}>
                <a href="#" className="dropdown-item">
                  {fav.name}{" "}
                  <button
                    type="button"
                    class="btn btn-danger mx-1"
                    onClick={(event) => actions.toggleFavorite(fav)}
                  >
                    X
                  </button>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
		</nav>
	);
};
