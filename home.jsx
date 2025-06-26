import React from "react";

function Home() {
  return (
    <>
      <Navbar />
      <div className="container mt-4">
        <Jumbotron />
        <CardRow />
      </div>
    </>
  );
}

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Brand</a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item"><a className="nav-link active" href="#">Home</a></li>
            <li className="nav-item"><a className="nav-link" href="#">About</a></li>
            <li className="nav-item"><a className="nav-link" href="#">Services</a></li>
            <li className="nav-item"><a className="nav-link" href="#">Contact</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

function Jumbotron() {
  return (
    <div className="jumbotron text-center">
      <h1 className="display-4">Welcome to Our Landing Page</h1>
      <p className="lead">We offer amazing services to help your business grow.</p>
    </div>
  );
}

function CardRow() {
  return (
    <div className="row text-center">
      {[1, 2, 3, 4].map((i) => (
        <div className="col-md-3 mb-4" key={i}>
          <div className="card h-100">
            <div className="card-body">
              <h5 className="card-title">Card {i}</h5>
              <p className="card-text">This is a placeholder for card {i} content.</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Home;
