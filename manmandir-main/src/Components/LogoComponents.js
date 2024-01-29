import React from "react";
import Logo from "./../assets/Images/man.png";

class LogoComponent extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <img src={Logo} className="img" style={{marginTop:'2%'}}></img>
      </div>
    );
  }
}
export default LogoComponent;
