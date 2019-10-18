import * as React from 'react'
import { Link } from "react-router-dom";

import * as styles from './navigation.module.scss';

const navItems = [
  // {
  //   "label": "About",
  //   "target": "/about/"
  // }
]

export const Navbar = () => {
  return (
    <nav className="navbar is-fixed-top" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <div className="navbar-item">
          <div className={styles.logo}>
            <Link to={'/'}>QUICK-CHAT</Link>
          </div>
        </div>
      </div>

      <div className="navbar-menu">
        <div className="navbar-start">
          {navItems.map(function(item, x){
            return (
              <div key={x} className="navbar-item">
                <Link to={item.target}>{item.label}</Link>
              </div>
            );
          })}
        </div>
      </div>
    </nav>
  )
}
