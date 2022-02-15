import React from 'react'
import '../../css/header.css'

export default function header() {
  return (
    <div>
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a className="navbar-item" href="/">
            <img src={process.env.PUBLIC_URL + '/nyla-logo.png'} width="200px" height="55px" />
          </a>

        </div>

        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-start">
            
             
            <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link">
                Furniture Categories
              </a>

              <div className="navbar-dropdown">
                <a className="navbar-item">
                  Beds
                </a>
                <a className="navbar-item">
                  Sofas
                </a>
                <a className="navbar-item">
                  Tv Stands
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}
