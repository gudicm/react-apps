import React, { useState } from 'react';

import './App.css';
import Footer from './components/layout/Footer';
import Header from './components/layout/Header';

import { httpMethods } from './constants/general';

import { execHttpReq } from './services/api-service';
import Circular from './components/common/circular';
import { errMsgs } from './constants/errors';
import { isValidURL } from './utils/validate';

type FormState = {
  url: string | null;
  method: string;
  config: Record<string, unknown>;
  body: Record<string, unknown>;
  params: Record<string, unknown>;
  headers: Record<string, string>;
  request: string | null;
  response: string | null;
  data: string | null;
};

const App: React.FC = () => {
  const [formState, setFormState] = useState<FormState>({
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

  const [isUrlValid, setIsUrlValid] = useState<boolean>(true);
  const [loading, setLoading] = useState<boolean | null>(null);
  const [reqTime, setReqTime] = useState<number | null>(null);

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setFormState({
      ...formState,
      method: event.target.value,
    });
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
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
    if (!formState.url) return;

    const isUrlValid = isValidURL(formState.url);
    setIsUrlValid(isUrlValid);
    if (!isUrlValid) {
      return;
    }
    try {
      setLoading(true);
      const { request, response, data, execTime } = await execHttpReq(
        formState.url,
        formState.method,
        formState.params,
        formState.headers,
        formState.body,
        formState.config,
      );
      setReqTime(execTime);

      if (response) {
        delete response.data;
      }

      const req: unknown =
        request === null ? '' : JSON.stringify(request, null, 2);
      const res: unknown =
        response === null ? '' : JSON.stringify(response, null, 2);
      const _data: unknown = data === null ? '' : JSON.stringify(data, null, 2);
      setFormState({
        ...formState,
        request: req as string,
        response: res as string,
        data: _data as string,
      });
    } catch (error) {
      setFormState({ ...formState, data: (error as Error).message });
    } finally {
      setLoading(false);
    }
  };

  const isStatusOk = (status: number): boolean => {
    return status >= 200 && status < 300;
  };

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
            />
            <button type="button" onClick={handleButtonClick}>
              Send
            </button>
          </p>
          {loading && <Circular size={100} color="grey" strokeWidth={10} />}

          {!isUrlValid && <p className="out error">{errMsgs.INVALID_URL}</p>}

          {!loading && formState.request !== null && (
            <p>
              <label>Request:</label>
              <textarea readOnly value={formState.request} rows={10} />
            </p>
          )}
          {!loading && formState.response !== null && (
            <>
              <p className="out time">{`Exec time:  ${reqTime} ms`}</p>
              <p>
                <label>Response:</label>
                <textarea
                  className={
                    isStatusOk(JSON.parse(formState.response)?.status)
                      ? ''
                      : 'error'
                  }
                  readOnly
                  value={formState.response}
                  rows={10}
                />
              </p>
            </>
          )}
          {!loading && formState.data !== null && (
            <p>
              <label>Data:</label>
              <textarea readOnly value={formState.data} rows={10} />
            </p>
          )}
        </div>
      </div>
      <Footer title="Copyright © 2024 Marko Gudic" />
    </>
  );
};

export default App;
