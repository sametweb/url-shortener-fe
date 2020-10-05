import axios from "axios";

export default (token) => {
  const params = { baseURL: process.env.REACT_APP_BACK_END };
  if (token) {
    params.headers = { authorization: token };
  }
  return axios.create(params);
};
