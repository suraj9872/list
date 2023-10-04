import React from 'react'

export default function Navbar(props) {
  return (
    <div>
        <nav  className="navbar navbar-expand-lg bg-body-tertiary bg-white py-6 shadow-sm">
  <div  className="container">
    <a  className="navbar-brand fw-bold fs-4" href="/">Seller App</a>
    <button  className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span  className="navbar-toggler-icon"></span>
    </button>
    <div  className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul  className="navbar-nav mx-auto mb-2 mb-lg-0">
        <li  className="nav-item">
          <a  className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li  className="nav-item">
          <a  className="nav-link" href="/">Products</a>
        </li>
        <li  className="nav-item">
          <a  className="nav-link" href="/">About</a>
        </li>
        <li  className="nav-item">
          <a  className="nav-link" href="/">Contact</a>
        </li>
       
      </ul>
    <div className="buttons">
        <a href="" className="btn btn-outline-dark">
            <i className="fa fa-login me-1"></i> Login</a>
            <a href="" className="btn btn-outline-dark ms-3">
            <i className="fa fa-login me-1"></i> Sign up</a>
    </div>
    </div>
  </div>
</nav>
    </div>
  )
}
