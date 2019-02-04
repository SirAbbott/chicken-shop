import React from 'react'

import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <nav className="navbar is-danger">
      <div className="navbar-brand">
        <a className="navbar-item" href="/">
          <img src="https://res.cloudinary.com/grubhub/image/upload/w_1200,h_800,f_auto,fl_lossy,q_80,c_fit/v9wwi4smdbbjrubfwywc" width="112" height="100" />
        </a>
      </div>
      <div className="navbar-end">
        <div className="navbar-item">
          <div className="buttons">
            <Link to="/chickenshop/new">
              <a className="button is-light">
              Add a shop
              </a>
            </ Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Nav
