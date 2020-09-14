import axios from "axios";

const API_URL = "http://localhost:3000/";
const headers = {
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json",
    "Authorization": localStorage.getItem("jwt-token")
  }
}

const current = () => {
  return axios.get(API_URL + "current", headers)
}

const increment = () => {
  return axios.get(API_URL + "increment", headers)
}

const reset = (current) => {
  return axios.put(API_URL + "reset", JSON.stringify({ current }), headers)
}

export default {
  current,
  increment,
  reset
};