import React, { useState } from "react";
import axios from "axios";

import validateUrl from "../utils/validateUrl";
import Output from "./Output";
import Input from "./Input";
import { Spin } from "antd";

function InputArea() {
  const [shortened, setShortened] = useState("");
  const [validError, setValidError] = useState("");
  const [loading, setLoading] = useState(false);

  const resetState = () => {
    setValidError("");
    setShortened("");
  };

  const shortenUrl = (url) => {
    const isValid = validateUrl(url);
    setLoading(true);
    if (isValid) {
      resetState();
      axios
        .post(process.env.REACT_APP_BACK_END, { url })
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
