import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const EditData = () => {
  const [id, setId] = useState(0);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    setId(localStorage.getItem("id"));
    setName(localStorage.getItem("name"));
    setAge(localStorage.getItem("age"));
    setEmail(localStorage.getItem("email"));
  }, []);

  const handleUpdate = (e) => {
    e.preventDefault();
    axios
      .put(`https://6578a84cf08799dc8045d268.mockapi.io/crud/${id}`, {
        e_name: name,
        e_age: age,
        e_email: email,
      })
      .then(() => {
        navigate("/");
      });
  };
  return (
    <>
      <div className="container mt-5">
        <div className="row ">
          <div class="col-md-4 offset-md-3 bg-dark column">
            .col-md-3 .offset-md-3
            <div className="create-btn">
              <h1>Update Data</h1>
            </div>
            <form className="form-file" onSubmit={handleUpdate}>
              <div className="form-group">
                <label className="label text-white mt-2 mb-1">
                  Enter Name:
                </label>
                <input
                  type="text"
                  placeholder="Full Name"
                  className="form-control"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label className="label text-white mt-2 mb-1">Enter Age:</label>
                <input
                  type="number"
                  placeholder="Age"
                  className="form-control"
                  value={age}
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
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="d-grid">
                <input
                  type="submit"
                  value="Update"
                  className="btn btn-primary mt-3 mb-3"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditData;
