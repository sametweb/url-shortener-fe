import axios from "axios";

export default (token) => {
  const params = {
    baseURL: process.env.REACT_APP_BACK_END,
    headers: { "Content-Type": "application/json" },
    // withCredentials: true,
  };
  if (token) {
    params.headers = { authorization: token };
  }
  return axios.create(params);
};
