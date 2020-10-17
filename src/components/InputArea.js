import React, { useState } from "react";
// import { AuthContext } from "../App";

import validateUrl from "../utils/validateUrl";
import axiosWithAuth from "../utils/axiosWithAuth";

import Output from "./Output";
import Input from "./Input";
import { Spin } from "antd";

function InputArea() {
  const [shortened, setShortened] = useState("");
  const [validError, setValidError] = useState("");
  const [loading, setLoading] = useState(false);
  // const { idToken } = useContext(AuthContext);

  const resetState = () => {
    setValidError("");
    setShortened("");
  };

  const shortenUrl = (url) => {
    const isValid = validateUrl(url);

    if (isValid) {
      resetState();
      setLoading(true);

      axiosWithAuth()
        .post("/", { url })
        .then((res) => {
          setShortened(`${process.env.REACT_APP_BACK_END}/${res.data.id}`);
        })
        .catch((err) => {
          console.log(err);
          setValidError("There was a problem performing your request.");
        });
    } else {
      setShortened("");
      setValidError("Invalid URL");
    }
    setLoading(false);
  };

  return shortened ? (
    <Output resetState={resetState} shortened={shortened} />
  ) : (
    <Spin spinning={loading} delay={500} style={{ width: "100%" }}>
      <Input shortenUrl={shortenUrl} validError={validError} />
    </Spin>
  );
}

export default InputArea;
