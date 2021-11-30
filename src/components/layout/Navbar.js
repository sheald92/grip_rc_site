import React, { Component } from "react";
import M from "materialize-css/dist/js/materialize.min.js";
import { Link } from "react-router-dom";
import logo from "../../images/grip-rc-logo.png";
import menuImage from "../../images/menu-background.png";
import menuLogo from "../../images/menu-logo.png";
import DarkMode from "../DarkMode";
import "../../App.css";

export class Navbar extends Component {
  componentDidMount() {
    document.addEventListener("DOMContentLoaded", function () {
      var elems = document.querySelectorAll(".sidenav");
      var instances = M.Sidenav.init(elems, {});
    });
  }

  render() {
    // const wishesCtx = useContext(wishesCtx);

    return (
      <div>
        <nav>
          <div class="nav-wrapper green">
            <a
              href="#"
              data-target="slide-out"
              class="sidenav-trigger show-on-large"
            >
              <i class="material-icons">menu</i>
            </a>
            <div className="container">
              <Link to="/">
                <img src={logo} height="70px" width="200px" alt="Logo"/>
              </Link>
              {/* <a href="#" class="brand-logo">
                Logo
              </a> */}
              <ul id="nav-mobile" class="right hide-on-med-and-down">
                <li>
                  <Link to="/new-car">Add Car</Link>
                </li>
                <li>
                  <Link to="/wishlist">Wish List</Link>
                </li>
                <li>
                  <DarkMode />
                </li>
                
              </ul>
            </div>
          </div>
        </nav>

        <ul id="slide-out" class="sidenav green">
          <li>
            <div class="user-view center-align">
              <div class="background">
                <img src={menuImage} alt="Logo"/>
              </div>
              <a href="#user">
                {/* <img class="circle" src="images/yuna.jpg" /> */}
              </a>
              <a href="#name">
                <span class="white-text name">Contact Us</span>
              </a>
              <a href="#email">
                <span class="white-text email">grip_rc@gmail.com</span>
              </a>
            </div>
          </li>

          <li class="center-align">
            <Link to="/">
              <img src={menuLogo} height="50px" width="200px" alt="Logo" />
            </Link>
          </li>
          <br/>
          <div class="divider"></div>
          <li>
            <Link to="/">
              <i class="material-icons">home</i>
              Home
            </Link>
          </li>
          <div class="divider"></div>
          <li>
            <Link to="/new-car">
              <i class="material-icons">add</i>
              Add Car
            </Link>
          </li>
          <li>
            <div class="divider"></div>
          </li>
          <li>
            <Link to="/wishlist">
              <i class="material-icons">favorite</i>
              Wishlist
            </Link>
          </li>
          <div class="divider"></div>
          <br/>
          <li class="center-align">
            <DarkMode />
          </li>
        </ul>
      </div>
    );
  }
}

export default Navbar;
