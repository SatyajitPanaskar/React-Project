import React, { useState } from "react";
import Container from "react-bootstrap/esm/Container";
import "./CreateData.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function CreateData() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://6578a84cf08799dc8045d268.mockapi.io/crud", {
        e_name: name,
        e_age: age,
        e_email: email,
      })
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      <div className="container mt-5">
        <div className="row ">
          <div class="col-md-4 offset-md-3 bg-dark column">
            .col-md-3 .offset-md-3
            <div className="create-btn">
              <h1>Create Data</h1>
            </div>
            <form className="form-file" onSubmit={handleSubmit}>
              <div className="form-group">
                <label className="label text-white mt-2 mb-1">
                  Enter Name:
                </label>
                <input
                  type="text"
                  placeholder="Full Name"
                  className="form-control"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label className="label text-white mt-2 mb-1">Enter Age:</label>
                <input
                  type="number"
                  placeholder="Age"
                  className="form-control"
                  onChange={(e) => setAge(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label className="label text-white mt-2 mb-1">
                  Enter Email:
                </label>
                <input
                  type="text"
                  placeholder="Email"
                  className="form-control"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="d-grid">
                <input
                  type="submit"
                  value="Submit"
                  className="btn btn-primary mt-3 mb-3"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default CreateData;
