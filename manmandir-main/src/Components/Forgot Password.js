import React from "react";
import { Link } from "react-router-dom";
// import "../styles/Forgotpassward.scss";
import Logo from "./../assets/Images/man.png";

export default class forgotpassward extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <section className="form my-3">
          <div className="container">
            <div className="row">
              <div className="col-lg-5">
                <Link to="/">
                  {" "}
                  <img src={Logo} class="mandirimages3" />
                </Link>
                <div className="login3">Forgot passward</div>
                <div className="line">
                  _____________________________________
                </div>
                <p className="p3">
                  If you have forgotten your <br /> password, we can send a
                  <br />
                  verification code on your <br />
                  mobile number to reset it.
                </p>
              </div>
              <div className="col-lg-7">
                <form>
                  <div className="form-row">
                    <div className="col-lg-6">
                      <input
                        type="text"
                        class="form-control my-4 p-2"
                        placeholder="MOBILE NUMBER"
                        required
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="col-lg-7 my-1 p-1" />
                    <button className="btnlogin2"> Continue</button>
                  </div>
                  <div>
                    <Link to="/signup" className="aforgot">
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
