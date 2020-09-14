import React, {useState, useRef} from "react";

import AuthService from "../Services/auth.service";

const Register = (props) => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [passwordConfirmation, setPasswordConfirmation] = useState("")

  const handleEmailChange = (e) => {
    setEmail(e.target.value)
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value)
  }

  const handlePasswordConfirmationChange = (e) => {
    setPasswordConfirmation(e.target.value)
  }

  const handleRegister = (e) => {
    e.preventDefault()

    AuthService.register(email, password, passwordConfirmation).then(
      () => {
        props.history.push("/increment");
        window.location.reload();
      },
      (error) => {
        if (error) {
          alert(error)
        }
      }
    );
  }

  return (
    <div className="card card-container">
      <h1>Sign Up</h1>
      <form className="form" onSubmit={handleRegister}>
        <div className="form-group">
          <label>Email</label>
          <input className="form-control"
                 value={email} onChange={handleEmailChange}
                 type="text"
                 placeholder="email"/>
        </div>
        <div className="form-group">
          <label>Password</label>
          <input className="form-control"
                 value={password}
                 onChange={handlePasswordChange}
                 type="password"
                 placeholder="password"/>
        </div>
        <div className="form-group">
          <label>Password Confirmation</label>
          <input className="form-control"
                 value={passwordConfirmation}
                 onChange={handlePasswordConfirmationChange}
                 type="password"
                 placeholder="password confirmation"/>
        </div>

        <div className="form-group">
          <button className="btn btn-primary btn-block">Sign Up</button>
        </div>
      </form>
    </div>
  )
}

export default Register