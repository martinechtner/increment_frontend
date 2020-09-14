import axios from "axios";

const API_URL = "http://localhost:3000/";
const headers = {
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json"
  }
}
const register = (email, password, passwordConfirmation) => {
  return axios.post(API_URL + "signup",
    JSON.stringify({
      user: {
        email: email,
        password: password,
        password_confirmation: passwordConfirmation
      }
    }),
    headers
  )
    .then((resp) => {
      localStorage.setItem("jwt-token", resp.headers.authorization)
    });
};

const login = (email, password) => {
  return axios.post(API_URL + "login", JSON.stringify({
      user: {
        email: email,
        password: password
      }
    }),
    headers
  )
    .then((resp) => {
      localStorage.setItem("jwt-token", resp.headers.authorization)
    });
};

const logout = () => {
  localStorage.removeItem("jwt-token");
};

export default {
  register,
  login,
  logout
};