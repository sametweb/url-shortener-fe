import axios from "axios";

export default (token) =>
  axios.create({
    baseURL: process.env.REACT_APP_BACK_END,
    headers: {
      Authorization: token,
    },
  });
