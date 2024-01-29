import React from "react";
// import Home from './login';
import { Link } from "react-router-dom";
// import "../styles/signup.scss";
import Logo from "./../assets/Images/man.png";

export default class Signup extends React.Component {
  constructor() {
    super();
    this.state = {
      fields: {},
      errors: {},
    };
    this.handleChange = this.handleChange.bind(this);
    this.submituserRegistrationForm =
      this.submituserRegistrationForm.bind(this);
  }
  handleChange(e) {
    let fields = this.state.fields;
    fields[e.target.name] = e.target.value;
    this.setState({
      fields,
    });
  }

  submituserRegistrationForm(e) {
    e.preventDefault();
    if (this.validateForm()) {
      let fields = {};
      fields["username"] = "";
      fields["emailid"] = "";
      fields["mobileno"] = "";
      fields["password"] = "";
      this.setState({ fields: fields });
      alert("Form submitted");
    }
  }

  validateForm() {
    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;

    if (!fields["username"]) {
      formIsValid = false;
      errors["username"] = "*Please enter your username.";
    }

    if (typeof fields["username"] !== "undefined") {
      if (!fields["username"].match(/^[a-zA-Z ]*$/)) {
        formIsValid = false;
        errors["username"] = "*Please enter alphabet characters only.";
      }
    }

    if (!fields["emailid"]) {
      formIsValid = false;
      errors["emailid"] = "*Please enter your email-ID.";
    }

    if (typeof fields["emailid"] !== "undefined") {
      //regular expression for email validation
      var pattern = new RegExp(
        /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
      );
      if (!pattern.test(fields["emailid"])) {
        formIsValid = false;
        errors["emailid"] = "*Please enter valid email-ID.";
      }
    }

    if (!fields["mobileno"]) {
      formIsValid = false;
      errors["mobileno"] = "*Please enter your mobile no.";
    }

    if (typeof fields["mobileno"] !== "undefined") {
      if (!fields["mobileno"].match(/^[0-9]{10}$/)) {
        formIsValid = false;
        errors["mobileno"] = "*Please enter valid mobile no.";
      }
    }

    if (!fields["password"]) {
      formIsValid = false;
      errors["password"] = "*Please enter your password.";
    }

    if (typeof fields["password"] !== "undefined") {
      if (
        !fields["password"].match(
          /^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/
        )
      ) {
        formIsValid = false;
        errors["password"] = "*Please enter secure and strong password.";
      }
    }

    this.setState({
      errors: errors,
    });
    return formIsValid;
  }
  render() {
    return (
      <div>
        <section className="form my-3">
          <div className="container">
            <div className="row">
              <div className="col-lg-5">
               <Link to="/"><img src={Logo} class="container-fluid" /></Link>
                <div className="signupdiv">Sign Up</div>
                <hr className="solid" />
                <div className="psignup">
                  We do not share your <br /> personal details with <br />{" "}
                  anyone
                </div>
              </div>
              <div className="col-lg-7">
                <form
                  method="post"
                  name="userRegistrationForm"
                  onSubmit={this.submituserRegistrationForm}
                >
                  <div className="form-row">
                    <div className="col-lg-6">
                      <input
                        type="text"
                        name="username"
                        class="form-control my-4 p-2"
                        placeholder="User Name"
                        value={this.state.fields.username}
                        onChange={this.handleChange}
                      />
                      <div className="passerror">
                        {this.state.errors.username}
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <input
                        type="text"
                        name="mobileno"
                        maxLength="10"
                        class="form-control my-4 p-2"
                        placeholder="Mobile Number"
                        value={this.state.fields.mobileno}
                        onChange={this.handleChange}
                      />
                      <div className="passerror">
                        {this.state.errors.mobileno}
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <input
                        type="text"
                        name="emailid"
                        className="form-control my-4 p-2"
                        placeholder="Email"
                        value={this.state.fields.emailid}
                        onChange={this.handleChange}
                      />
                      <div className="passerror">
                        {this.state.errors.emailid}
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <input
                        type="password"
                        className="form-control my-4 p-2"
                        placeholder="Password"
                        name="password"
                        value={this.state.fields.password}
                        onChange={this.handleChange}
                      />
                      <div className="passerror">
                        {this.state.errors.password}
                      </div>
                    </div>
                    {/* <div className="col-lg-6">
                      <input
                        type="text"
                        class="form-control my-4 p-2"
                        placeholder="Confirm Password"
                        required
                      />
                    </div> */}
                  </div>

                  <div className="form-row">
                    <div className="col-lg-6 my-1 p-1" />
                    <button
                      className="btnsign"
                      onClick={() => this.onhandleclick()}
                    >
                      Continue
                    </button>
                  </div>

                  <Link to="/login" class="asign">
                    Existing User? Log In
                  </Link>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
