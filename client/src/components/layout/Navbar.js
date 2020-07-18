import React, { useContext, Fragment } from "react"
import { Link } from "react-router-dom"
import PropTypes from "prop-types"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faIdCardAlt, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'

import AuthContext from "../../context/auth/authContext"

const Navbar = ({ title, icon }) => {
  const authContext = useContext(AuthContext)
  const { isAuthenticated, logout, user } = authContext

  const onLogout = () => {
    logout()
  }

  const authLinks = (
    <Fragment>
      <li>Hello {user && user.name}</li>
      <li>
        <a href="#!" onClick={onLogout}>
          <FontAwesomeIcon icon={faSignOutAlt} /> <span className="hide-sm">Logout</span>
        </a>
      </li>
    </Fragment>
  )
  const guestLinks = (
    <Fragment>
      <li>
        <Link to="/register">Register</Link>
      </li>
      <li>
        <Link to="/login">Login</Link>
      </li>
    </Fragment>
  )
  return (
    <div className="navbar bg-primary">
      <h1>
        <FontAwesomeIcon icon={icon} /> {title}
      </h1>
      <ul>
        {isAuthenticated ? authLinks : guestLinks}
      </ul>
    </div>
  )
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.object
}

Navbar.defaultProps = {
  title: "Contact Keeper",
  icon: faIdCardAlt
}

export default Navbar
