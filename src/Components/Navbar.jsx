import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">NewsDaily</Link>

          <ul className="nav justify-content-center">
            <li className="nav-item">
              <Link className="nav-link " aria-current="page" to="/">Home</Link>
            </li>


            <Link className="nav-link" to="/business">Business</Link>


            <Link className="nav-link " to="/entertainment">Entertainment</Link>


            <Link className="nav-link " to="/general">General</Link>


            <Link className="nav-link " to="/health">Health</Link>

            <Link className="nav-link " to="/science">Science</Link>

            <Link className="nav-link " to="/sports">Sports</Link>

            <Link className="nav-link " to="/technology">Technology</Link>

          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Navbar