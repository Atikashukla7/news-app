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
    <Link className="nav-link active" aria-current="page" to="/">Home</Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link" to="/">Business</Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link" to="/">Sports</Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link disabled" aria-disabled="true">Disabled</Link>
  </li>
</ul>
</div>
</nav>
    </div>
  )
}

export default Navbar