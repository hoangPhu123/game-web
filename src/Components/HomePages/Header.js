import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/img/logo1.png";
import "../../assets/css/header.css";
import UserNav from "../../HOC/UserNav";
import { useSelector } from "react-redux";

export default function Header() {
  const user = useSelector((state) => {
    return state.userReducer.user;
  });

  return (
    <header>
      <div className="container">
        <div className="header__content">
          <div className="header__logo">
            <a href="/">
              <img src={Logo} alt="logo" />
              <h3>Gaming</h3>
            </a>
          </div>

          <div className="header__menu">
            <nav>
              <ul className="d-flex">
                <li>
                  <NavLink to={`/`}>
                    <a href="#" className="mainPages">
                      Home
                    </a>
                  </NavLink>
                </li>

                <li>
                  <a href="#" className="mainPages">
                    Pages
                  </a>
                  <ul class="sub_menu">
                    <li className="sub__pages">
                      <NavLink to="/aboutUS">
                        <a href="#">About Us</a>
                      </NavLink>
                    </li>

                    {user ? (
                      <li className="sub__pages">
                        <NavLink to="/allGames">
                          <a href="#">All Games</a>
                        </NavLink>
                      </li>
                    ) : null}

                    <li className="sub__pages">
                      <NavLink to="/players">
                        <a href="#">Players</a>
                      </NavLink>
                    </li>

                    {/* <li className="sub__pages">
                      <NavLink to="/playerDetail">
                        <a href="#">Player Details</a>
                      </NavLink>
                    </li> */}
                    {user ? (
                      <li className="sub__pages">
                        <NavLink to="/playerInfo">
                          <a href="#">Player Info</a>
                        </NavLink>
                      </li>
                    ) : null}

                    <li className="sub__pages">
                      <NavLink to="/signup">
                        <a href="#">Sign Up</a>
                      </NavLink>
                    </li>

                    <li className="sub__pages">
                      <NavLink to="/signin">
                        <a href="#">Login</a>
                      </NavLink>
                    </li>

                    {/* <li className="sub__pages">
                      <NavLink to="*">
                        <a href="#">404 Page</a>
                      </NavLink>
                    </li> */}
                  </ul>
                </li>

                <li>
                  <NavLink to="/contactForm">
                    <a href="#" className="mainPages">
                      Contact
                    </a>
                  </NavLink>
                </li>
              </ul>
            </nav>
          </div>

          {/* UserNAv  */}
          <UserNav />
        </div>
      </div>
    </header>
  );
}
