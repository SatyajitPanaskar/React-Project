import React from "react";

import {
  FaPhoneAlt,
  FaUser,
  FaEnvelope,
  FaRegTimesCircle,
} from "react-icons/fa";

class ContactUs extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="demo3">
        <div className="container">
          <blockquote className="contactcontainer">
            <h1 className="heading2">
              Contact Us :- Pavitra Mandir - Hemant Traders
            </h1>
            <p className="para2">
              We love hearing from you ! Here are some of the ways to get in
              touch with us....
            </p>
          </blockquote>
        </div>
      </div>
    );
  }
}

export default ContactUs;
