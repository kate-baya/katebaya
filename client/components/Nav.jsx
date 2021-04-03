import React from 'react'
import {Link} from 'react-router-dom'

export default function Nav() {
  return (
    <nav className="navbar is-fixed-top" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <Link to='/' className="navbar-item is-rounded">
          <img className='is-rounded' src="../images/cake.png" height="28" />
        </Link>

        <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-start">
          <Link to='/about' className="navbar-item">
            About
          </Link>

          <Link to='/updates' className="navbar-item">
            Updates
          </Link>

          <Link to='/contact' className="navbar-item">
            Contact
          </Link>

          <div className="navbar-item has-dropdown is-hoverable">
            <Link to='/wip' className="navbar-link">
              Wip
            </Link>

            <div className="navbar-dropdown">
              <Link to='/wip' className="navbar-item">
                Profile Creator
              </Link>
              <Link to='/wip#devHub' className="navbar-item">
                Dev-Hub
              </Link>
              <Link to='/wip' className="navbar-item">
                Future Projects
              </Link>
            </div>
          </div>
        </div>

        <div className="navbar-end">
          <div className="navbar-item">
              <a href="https://github.com/kate-baya" className="is-primary">
                <span className="icon">
                  <i className="fab fa-github"></i>
                </span>
              </a>
          </div>
          <div className="navbar-item">
          <a href="https://www.instagram.com/katie_b_drums/" className=" is-light">
            <span className="icon">
              <i className="fab fa-instagram"></i>
            </span>
          </a>
          </div>
        </div>
      </div>
    </nav>
  )
}