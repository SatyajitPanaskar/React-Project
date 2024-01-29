import React from "react";
import Logo from "./../assets/Images/om.webp";
import cat from "./../assets/Images/cat3.jpg";
import cat1 from "./../assets/Images/shame.webp";
import cat2 from "./../assets/Images/swaroop.jpg";
class Categories extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="catdiv">
        <div className="imgdiv">
          <h1 className="categories">Categories:-</h1>
          <img src={cat2} className="swaroop"></img>
          <h6 className="burma">
            Burma Teakwood <br />
            Carving Temple
          </h6>
          <img src={Logo} className="om"></img>
          <h6 className="aluminium">
            Aluminium - Copper
            <br />
            Oxidize Carving
          </h6>
          <img src={cat1} className="sheem"></img>
          <h6 className="sheesham">
            Sheesham Wood
            <br /> Temple
          </h6>
          <img src={cat} className="fullimg"></img>
          <h6 className="full">
            Full Aluminium<br></br> Carving Temple
          </h6>
        </div>
      </div>
    );
  }
}
export default Categories;
