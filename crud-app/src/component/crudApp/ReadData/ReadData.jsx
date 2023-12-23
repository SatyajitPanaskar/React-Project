import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ReadData = () => {
  const [apiData, setApiData] = useState([]);
  const getData = () => {
    axios
      .get("https://6578a84cf08799dc8045d268.mockapi.io/crud")
      .then((response) => {
        setApiData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleDelete = (id) => {
    axios
      .delete(`https://6578a84cf08799dc8045d268.mockapi.io/crud/${id}`)
      .then(() => {
        getData();
      });
  };

  // function handleDelete(id) {
  //   axios
  //     .delete(`https://6578a84cf08799dc8045d268.mockapi.io/crud/${id}`)
  //     .then(() => {
  //       getData();
  //     });
  // }

  const setDataToLocalStorage = (id, name, age, email) => {
    localStorage.setItem("id", id);
    localStorage.setItem("name", name);
    localStorage.setItem("age", age);
    localStorage.setItem("email", email);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className=" mt-5 mb-3">
              <Link to="/create">
                <button className="btn btn-primary">Create New Data</button>
              </Link>
            </div>
            <table className="table table-bordered table-striped  table-dark table-hover">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Age</th>
                  <th>Email</th>
                  <th>EDIT</th>
                  <th>DELETE</th>
                </tr>
              </thead>
              <tbody>
                {apiData.map((item) => {
                  return (
                    <>
                      <tr>
                        <td>{item.id}</td>
                        <td>{item.e_name}</td>
                        <td>{item.e_age}</td>
                        <td>{item.e_email}</td>
                        <td>
                          <Link to="/edit">
                            <button
                              className="btn btn-primary"
                              onClick={() =>
                                setDataToLocalStorage(
                                  item.id,
                                  item.e_name,
                                  item.e_age,
                                  item.e_email
                                )
                              }>
                              Edit
                            </button>
                          </Link>
                        </td>
                        <td>
                          <button
                            className="btn btn-danger"
                            onClick={() => {
                              if (
                                window.confirm("Are you sure to delete Data...")
                              ) {
                                handleDelete(item.id);
                              }
                            }}>
                            Delete
                          </button>
                        </td>
                      </tr>
                    </>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReadData;
