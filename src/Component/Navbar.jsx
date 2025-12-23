
import React from 'react';
// import './Style/navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='navbar'>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">HARSHIT</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">

           

              

            </ul>
              
<a className="nav-link" href="#1">Home</a>&nbsp;&nbsp;
    <a className="nav-link" href="#2"> About</a>&nbsp;&nbsp;
    <a className="nav-link" href="#3">Skill</a>&nbsp;&nbsp;
    <a className="nav-link" href="#4">Project</a>&nbsp;&nbsp;
    <a className="nav-link" href="#5">Contact</a>&nbsp;&nbsp;

          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar;


// import React from 'react'
// import { Link } from 'react-router-dom'
// const Navbar = () => {
//   return (
//     <div>
//       <h1>hidssdsd</h1>
//       <li>
//         <Link to="/Signup">Signup</Link>
//         <Link to="/Signin">Signin</Link>
//       </li>
//     </div>
//   )
// }

// export default Navbar
