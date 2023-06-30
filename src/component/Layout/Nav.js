import React, { Component } from "react";
// import { FiShoppingBag } from "react-icons/fi";
// import img from "../../assets/icons/logo.png";
import "./Nav.css";

export default class Nav extends Component {
  constructor() {
    super();
    this.state = {
      show: true,
    };
  }
  render() {
    return (
      <div>
<nav class="navbar navbar-expand-lg">
  <a class="navbar-brand" href="#">Logo</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse justify-content-end" id="navbarText">
  
    <span class="navbar-text">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="#">About</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Pricing</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Review</a>
      </li>
    </ul>
    </span>
  </div>
</nav>
      </div>
    );
  }
}
