import React from 'react'

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
            <a className="button is-light">
            Add a shop
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Nav
