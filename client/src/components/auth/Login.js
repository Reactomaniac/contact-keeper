import React, { useState, useContext, useEffect } from "react"
import AuthContext from "../../context/auth/authContext"
import AlertContext from "../../context/alert/alertContext"

const Login = props => {
  const alertContext = useContext(AlertContext)
  const authContext = useContext(AuthContext)

  const { setAlert } = alertContext
  const { login, error, clearErrors, isAuthenticated } = authContext

  const [user, setUser] = useState({
    email: "",
    password: ""
  })

  useEffect(() => {
    if (isAuthenticated) {
      props.history.push("/")
    }
    if (error) {
      setAlert(error, "danger")
      clearErrors()
    }
  }, [error, isAuthenticated, props.history, clearErrors, setAlert])

  const { email, password } = user

  const onChange = e => setUser({
    ...user,
    [e.target.name]: e.target.value
  })

  const onSubmit = e => {
    e.preventDefault()
    if (email === "" || password === "") {
      setAlert("Please add email or password")
    } else {
      login({
        email,
        password
      })
    }
    console.log("Login submit")
  }

  return (
    <div className="from-container">
      <h1>
        Account <span className="text-primary">Login</span>
      </h1>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input type="email" name="email" value={email} onChange={onChange} />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" value={password} onChange={onChange} />
        </div>
        <input type="submit" value="Register" className="btn btn-primary btn-block" />
      </form>
    </div>
  )
}

export default Login
