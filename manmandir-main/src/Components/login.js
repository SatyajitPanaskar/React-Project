import React from "react";
import { Link } from "react-router-dom";
// import "../styles/login.scss";
import Logo from "./../assets/Images/man.png";

export default class Login extends React.Component {
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

    if (!fields["mobileno"]) {
      formIsValid = false;
      errors["mobileno"] = "*Please enter your mobile no.";
    }
    if (typeof fields["mobileno"] !== "undefined") {
      if (
        !fields["mobileno"].match(
          /^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[789]\d{9}$/
        )
      ) {
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
        errors["password"] =
          "*Password must include minimum 8 characters, at least one uppercase letter, one lowercase letter and one special character .";
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
                <div className="loginin">Log In</div>
                <hr className="solid" />
                <div className="loginp">
                  Get access to your
                  <br />
                  Orders, Wishlist and <br />
                  Recommendations.
                </div>
              </div>
              <div className="col-lg-7">
                <h1>Login</h1>
                <h4>Sign In Your Account</h4>
                <form
                  method="post"
                  name="userRegistrationForm"
                  onSubmit={this.submituserRegistrationForm}
                >
                  <div className="form-row">
                    <div className="col-lg-6">
                      <input
                        type="text"
                        name="mobileno"
                        maxLength="10"
                        class="form-control my-4 p-2"
                        placeholder="MOBILE NUMBER"
                        value={this.state.fields.mobileno}
                        onChange={this.handleChange}
                      />
                      <div className="passerror">
                        {this.state.errors.mobileno}
                      </div>
                      {this.state.Mobilenumbererror}
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="col-lg-6">
                      <input
                        type="password"
                        name="password"
                        class="form-control my-4 p-2"
                        placeholder="PASSWORD"
                        value={this.state.fields.password}
                        onChange={this.handleChange}
                      />
                      <div className="passworderror">
                        {this.state.errors.password}
                      </div>
                    </div>
                  </div>
                  <p></p>
                  <Link to="/Forgot passward" className="forgotpass">
                    Forgot passward
                  </Link>
                  <div className="form-row">
                    <div className="col-lg-6 my-1 p-1" />
                    <button className="btnlogin" value="Register">
                      Login In
                    </button>
                  </div>

                  <div className="line1">
                    _______________________OR______________________
                  </div>
                  <div className="col-lg-6 my-4 p-2">
                    <button className="btn">Login With OTP</button>
                  </div>

                  <div>
                    <Link to="/signup" className="alogin">
                      Dont have an account? Sign Up
                    </Link>
                    <Link to="/login"></Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
