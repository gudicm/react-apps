import axios, { AxiosRequestConfig, AxiosResponse, isAxiosError } from 'axios';

import { httpMethods } from '../constants/general';

type HttpMethod = (typeof httpMethods)[number];

interface HttpResponse<T> {
  request: AxiosRequestConfig;
  response: AxiosResponse<T> | null;
  data: T;
  execTime: number;
}

const execHttpReq = async <T>(
  url: string,
  method: HttpMethod = 'GET',
  params: Record<string, unknown> = {},
  headers: Record<string, string> = {},
  body: Record<string, unknown> = {},
  config: AxiosRequestConfig = {}
): Promise<HttpResponse<T>> => {
  headers = headers['Content-Type'] ? headers : { ...headers, 'Content-Type': 'application/json' };

  const startTime = Date.now();

  try {
    const requestConfig: AxiosRequestConfig = {
      method: method.toUpperCase() as HttpMethod,
      url,
      headers,
      params,
      ...config,
    };

    if (['POST', 'PUT', 'PATCH'].includes(method.toUpperCase())) {
      requestConfig.data = body;
    }

    const response = await axios<T>(requestConfig);
    const endTime = Date.now();
    const execTime = endTime - startTime;

    return {
      request: requestConfig,
      response,
      data: response.data,
      execTime,
    };
  } catch (error) {
    const endTime = Date.now();
    const execTime = endTime - startTime;

    if (isAxiosError(error) && error.response) {
      return {
        request: error.config as AxiosRequestConfig,
        response: error.response,

        data: error.response.data as T,
        execTime,
      };
    } else if (isAxiosError(error) && error.request) {
      return {
        request: error.config as AxiosRequestConfig,
        response: null,

        data: 'No response received' as unknown as T,
        execTime,
      };
    } else {
      return {
        request: {} as AxiosRequestConfig,
        response: null,

        data: ((error as Error).message || 'Unknown error') as unknown as T,
        execTime,
      };
    }
  }
};

export { execHttpReq };
