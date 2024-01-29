import React from 'react';
import { Link ,NavLink} from 'react-router-dom';
// import '../styles/signup.scss';
import Logo from "./../assets/Images/man.png"

class ForgotPassword extends React.Component {
    constructor() {
        super()
    }
    render() {
        return (
            <div>
            <section className="form my-3">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5">
                            <img src={Logo} className="container-fluid" />
                            <div className="signupdiv">Forgot Password</div>
                            <hr className="solid" />
                            <div className="psignup">If you have forgotten your <br/> password, we can send a <br/>verification code on your<br/> mobile number to reset it.</div>
                        </div>
                        <div className="col-lg-7">
                        
                            <form>
                                <div className="form-row">
                                    <div className="col-lg-7">
                                        <input type="text" class="form-control my-4 p-2" placeholder="Mobile Number" required />
                                    </div>
                                </div>
                                
                                
                                <div className="form-row">
                                    <div className="col-lg-7 my-1 p-2" />
                                    <button className="btncontinue">Continue</button>
                                </div><br/>
                               
                     <NavLink to="/signup" className="dontaccount">  Dont have an account? Sign Up</NavLink>

                            </form>
                        </div>
                    </div>
                </div>
            </section>

        </div>
        )
    }
}
export default ForgotPassword;