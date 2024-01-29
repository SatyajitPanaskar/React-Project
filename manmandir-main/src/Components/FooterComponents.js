import React from "react";
import { Navbar } from "react-bootstrap";

export default class FooterComponents extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <nav
        className="navbar navbar-expand-sm  text-light bg-primary"
        style={{ marginTop: "1%" }}
      >
        <div className="footer" style={{ marginLeft: "33%" }}>
          © 2020 Copyright: All Rights are Reserved with Hemant Traders.
        </div>
      </nav>
    );
  }
}
