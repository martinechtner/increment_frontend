import React, {useState} from "react";

import AuthService from "../Services/auth.service";

const Login = (props) => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleEmailChange = (e) => {
    setEmail(e.target.value)
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value)
  }

  const handleRegister = (e) => {
    e.preventDefault()

    AuthService.login(email, password).then(
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
      <h1>Login</h1>
      <form className="ui form" onSubmit={handleRegister}>
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
          <button className="btn btn-primary btn-block">Login</button>
        </div>
      </form>
    </div>
  )
}

export default Login