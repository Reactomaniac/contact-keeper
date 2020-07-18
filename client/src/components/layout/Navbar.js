import React from "react"
import { Link } from "react-router-dom"
import PropTypes from "prop-types"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faIdCardAlt } from '@fortawesome/free-solid-svg-icons'

const Navbar = ({ title, icon }) => {
  return (
    <div className="navbar bg-primary">
      <h1>
        <FontAwesomeIcon icon={icon} /> {title}
      </h1>
      <ul>
        <li>
          <Link to="/register">Register</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
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
