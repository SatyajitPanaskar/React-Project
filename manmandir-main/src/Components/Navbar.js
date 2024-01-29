import React from "react";
import { Link, NavLink } from "react-router-dom";
class Navbar extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        {
          <nav class="navbar navbar-expand-lg navbar-dark bg-secondary">
            <nav class="navbar-brand mx-5" exact to="/header">
              BURMA TEAKWOOD CARVING TEMPLE
            </nav>
            <nav className="navbar-brand" exact to="/login">
              SHEESHAM WOOD TEMPLE
            </nav>
          </nav>
        }
      </div>
    );
  }
}
export default Navbar;
