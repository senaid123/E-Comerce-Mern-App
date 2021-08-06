import React, { useState } from "react";
import Layout from "../core/Layout";
import { isAuthenticated } from "../Auth/index";
import { createCategory } from "./apiAdmin";
import {Link} from "react-router-dom"

const AddCategory = () => {
  const [name, setName] = useState("");
  const [error, setError] = useState(false);
  const [succes, setSuccess] = useState(false);

  //destructe user and token from localstorage

  const { user, token } = isAuthenticated();

  const handleChange = e => {
    setError("");
    setName(e.target.value);
};

const clickSubmit = e => {
    e.preventDefault();
    setError("");
    setSuccess(false);
    // make request to api to create category
    createCategory(user._id, token, { name }).then(data => {
        if (data.error) {
            setError(data.error);
        } else {
            setError("");
            setSuccess(true);
        }
    });
};

  const newCategoryFrom = () => {
    return (
      <form onSubmit={clickSubmit}>
        <div className="form-group">
          <label className="text-muted">Name</label>
          <input
            type="text"
            className="form-control"
            onChange={handleChange}
            value={name}
            autoFocus
            required
          />
          <button className="btn btn-outline-primary">create category</button>
        </div>
      </form>
    );
  };

  const showSucces = () => {
    if (succes) {
      return <h3 className="text-succes">{name} is created</h3>;
    }
  };
  const showError = () => {
    if (error) {
      return <h3 className="text-danger">Category is should be unique</h3>;
    }
  };
  const goBack = () =>{
    <div className="mt-5">
      <Link to="/admin/dashboard" className="text-warning">Back to dashboard</Link>

    </div>
  }

  return (
    <Layout
      title="Add a new category"
      description=" ready to add new kcategory "
    >
      <div className="row">
        <div className="col-md-8 offset-md-2">
          {showSucces()}
          {showError()}
          {newCategoryFrom()}
          {goBack()}
        </div>
      </div>
    </Layout>
  );
};

export default AddCategory;
