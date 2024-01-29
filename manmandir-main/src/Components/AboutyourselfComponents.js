import React from "react";

export default class AboutYourSelf extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="about">
        <div className="container">
          <blockquote className="aboutcontainer">
            <h1 className="h1"> About Ourself :-</h1>
            <br />
            <p className="pabout">
              We are into the Business of Customer Statisfaction and
              Continuously providing a Quality product to our Customers. Our
              main motto is to provide a Superiorly made HomeTemples,Solely
              Designed for Home which brings a Flow of Positive Energy and
              Creating a Peaceful Environment in the Home. We also make the
              Temples based on your Given Requirement.
            </p>
          </blockquote>
        </div>
      </div>
    );
  }
}
