import React from "react";
import { Link, NavLink } from "react-router-dom";
import { FaPhoneAlt, FaUser, FaEnvelope, FaCartPlus } from "react-icons/fa";

const  HeaderComponent= (props) =>{
   return (
     <nav className="navbar">
                          <FaPhoneAlt className="phone"></FaPhoneAlt>
                        <div className="navbar-brand">{Number.number}</div>
                       
                <ul className="nav-links">
    
                    <Link className="home" to="/login">
                      <li>Login</li>
                    </Link>
                   <Link className="about" to="/Signup">
                   <li>SignUp</li> 
                    </Link>
                    <Link className="" to="/Cart">
                    <li><FaCartPlus className="cart"></FaCartPlus></li>
                    </Link>
                    <span className="addspan">1</span>
                  </ul>
          </nav>
   )
}

export default HeaderComponent;
// import React from "react";
// import { Link, NavLink } from "react-router-dom";
// import Number from "./Number";

// import { FaPhoneAlt, FaUser, FaEnvelope, FaCartPlus } from "react-icons/fa";

// class HeaderComponent extends React.Component {
//   constructor() {
//     super();
//   }
//   render() {
//     return (
//       <div>
//         {
//           <nav
//             className="navbar navbar-expand-sm  text-light bg-primary"
//             style={{ padding: "1px 1px", height: "50px" }}
//           >
//             <div className="container-fluid">
//               <FaPhoneAlt className="phone"></FaPhoneAlt>
//               <div className="navbar-brand">{Number.number}</div>
//               <div className="collapse navbar-collapse" id="navbarNav">
//                 <FaEnvelope className="envelope"></FaEnvelope>&nbsp;&nbsp;
//                 <div className="navbar-brand">{Number.email}</div>
//                 <ul class="navbar-nav mr-auto">
//                   <li className="nav-item">
//                     {/* <Link className="homelink" to="/">
//                       Home
//                     </Link> */}
//                   </li>
//                   <li className="nav-item">
//                     <Link className="loginlink" to="/login">
//                       Login
//                     </Link>
//                   </li>
//                   <span className="seperator"> | </span>&nbsp;&nbsp;
//                   <li className="nav-item">
//                     <Link className="signup" to="/Signup">
//                       SignUp
//                     </Link>
//                   </li>
//                   &nbsp;&nbsp;&nbsp;&nbsp;
//                 </ul>
//                 <FaCartPlus className="cart"></FaCartPlus>
//                 <span className="addspan">1</span>
//               </div>
//             </div>
//           </nav>
//         }
//       </div>
//     );
//   }
// }
// export default HeaderComponent;

