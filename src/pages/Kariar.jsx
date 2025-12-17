// src/pages/Kariar.jsx
import React from "react";

const Kariar = () => {
  return (
    <div className="container mt-5">
      <h1 className="mb-4">Kariar Test Page</h1>

      <p>
        Welcome to the Kariar page! This is a simple test page to check routing
        and layout in your React project.
      </p>

      <div className="card mt-4">
        <div className="card-body">
          <h5 className="card-title">Job Application</h5>
          <p className="card-text">
            You can add a form here for users to submit their applications.
          </p>
          <button className="btn btn-primary">Apply Now</button>
        </div>
      </div>
    </div>
  );
};

export default Kariar;
