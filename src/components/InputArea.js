import React, { useContext, useState } from "react";
import { AuthContext } from "../App";

import validateUrl from "../utils/validateUrl";
import axiosWithAuth from "../utils/axiosWithAuth";

import Output from "./Output";
import Input from "./Input";
import { Spin } from "antd";

function InputArea() {
  const [shortened, setShortened] = useState("");
  const [validError, setValidError] = useState("");
  const [loading, setLoading] = useState(false);
  const { idToken } = useContext(AuthContext);

  const resetState = () => {
    setValidError("");
    setShortened("");
  };

  const shortenUrl = (url) => {
    const isValid = validateUrl(url);

    setLoading(true);
    if (isValid) {
      resetState();
      axiosWithAuth()
        .post("/", { url, idToken: idToken || 0 })
        .then((res) => {
          setShortened(`${process.env.REACT_APP_BACK_END}/${res.data.id}`);
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
          setLoading(false);
        });
    } else {
      setShortened("");
      setValidError("Invalid URL");
    }
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
