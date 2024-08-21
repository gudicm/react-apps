import { useState } from "react";

import "./App.css";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import { httpMethods } from "./constants/general";
import { isValidURL, isStatusOk } from "./utils/validate";
import { errMsgs } from "./constants/errors";

import { execHttpReq } from "./services/api-service";
import Circular from "./components/common/circular";

function App() {
  // state
  // form
  const [formState, setFormState] = useState({
    url: null,
    method: httpMethods[0],
    config: {},
    body: {},
    params: {},
    headers: {},
    request: null,
    response: null,
    data: null,
  });
  // form
  // flags
  const [isUrlValid, setIsUrlValid] = useState(true);
  const [loading, setLoading] = useState(null);
  const [reqTime, setReqTime] = useState(null);
  // event handlers
  const handleSelectChange = (event) => {
    setFormState({
      ...formState,
      method: event.target.value,
    });
  };

  const handleInputChange = (event) => {
    setIsUrlValid(true);
    setFormState({
      ...formState,
      url: event.target.value,
      request: null,
      response: null,
      data: null,
    });
  };

  const handleButtonClick = async () => {
    const isUrlValid = isValidURL(formState.url);
    setIsUrlValid(isUrlValid);
    if (!isUrlValid) {
      return;
    }
    try {
      setLoading(true);
      let { request, response, data, execTime } = await execHttpReq(
        formState.url,
        formState.method,
        formState.params,
        formState.headers,
        formState.body,
        formState.config,
      );
      setReqTime(execTime);

      delete response.data;

      request = request === null ? "" : JSON.stringify(request, null, 2);
      response = response === null ? "" : JSON.stringify(response, null, 2);
      data = data === null ? "" : JSON.stringify(data, null, 2);
      setFormState({
        ...formState,
        request: request,
        response: response,
        data: data,
      });
    } catch (error) {
      setFormState({ ...formState, data: error.message });
    } finally {
      setLoading(false);
    }
  };

  console.log(`${reqTime} ms`);
  return (
    <>
      <Header title="Rest React Client" />
      <div className="content">
        <div className="container">
          <h2>Configure a call to endpoint:</h2>
          <p>
            <label>Method:</label>
            <select onChange={handleSelectChange}>
              {httpMethods.map((item, index) => (
                <option key={index} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </p>
          <p>
            <input
              type="text"
              placeholder="Enter a url:"
              onChange={handleInputChange}
            ></input>
            <button type="button" onClick={handleButtonClick}>
              Send
            </button>
          </p>
          {loading && <Circular size={100} color="grey" strokeWidth={10} />}

          {!isUrlValid && <p className="out error">{errMsgs.INVALID_URL}</p>}

          {!loading && formState.request !== null && (
            <p>
              <label>Request:</label>
              <textarea readOnly value={formState.request} rows="10" />
            </p>
          )}
          {!loading && formState.response !== null && (
            <>
              <p className="out time">{`Exec time:  ${reqTime} ms`}</p>
              <p>
                <label>Response:</label>
                <textarea
                  className={
                    !isStatusOk(JSON.parse(formState.response)?.status) &&
                    "error"
                  }
                  readOnly
                  value={formState.response}
                  rows="10"
                />
              </p>
            </>
          )}
          {!loading && formState.data !== null && (
            <p>
              <label>Data:</label>
              <textarea readOnly value={formState.data} rows="10" />
            </p>
          )}
        </div>
      </div>
      <Footer title="Copyright © 2024 Marko Gudic" />
    </>
  );
}

export default App;
