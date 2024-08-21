import axios from "axios";

/**
 * Makes an HTTP request using Axios.
 *
 * @param {string} url - The URL for the request.
 * @param {string} method - The HTTP method ('GET', 'POST', 'PUT', 'DELETE', 'HEAD', 'OPTIONS', etc.).
 * @param {object} [params] - The URL parameters to be sent with the request.
 * @param {object} [headers] - The headers to be sent with the request.
 * @param {object} [body] - The body to be sent with the request (for methods like POST, PUT).
 * @param {object} [config] - Optional Axios request configuration.
 * @returns {object} - An object containing request, response, data, and executionTime properties.
 */
const execHttpReq = async (
  url,
  method = "GET",
  params = {},
  headers = {},
  body = {},
  config = {},
) => {
  // Set default headers if not provided
  headers = headers["Content-Type"]
    ? headers
    : { ...headers, "Content-Type": "application/json" };

  // Record the start time
  const startTime = Date.now();

  try {
    const requestConfig = {
      method: method.toUpperCase(),
      url,
      headers,
      params,
      ...config,
    };

    if (
      method.toUpperCase() === "POST" ||
      method.toUpperCase() === "PUT" ||
      method.toUpperCase() === "PATCH"
    ) {
      requestConfig.data = body;
    }

    const response = await axios(requestConfig);

    // Record the end time
    const endTime = Date.now();

    // Calculate execution time
    const execTime = endTime - startTime;

    return {
      request: requestConfig,
      response,
      data: response.data,
      execTime,
    };
  } catch (error) {
    // Record the end time
    const endTime = Date.now();

    // Calculate execution time
    const execTime = endTime - startTime;

    if (error.response) {
      // Server responded with a status other than 200 range
      return {
        request: error.config,
        response: error.response,
        data: error.response.data,
        execTime,
      };
    } else if (error.request) {
      // Request was made but no response was received
      return {
        request: error.config,
        response: null,
        data: "No response received",
        execTime,
      };
    } else {
      // Something happened in setting up the request
      return {
        request: null,
        response: null,
        data: error.message,
        execTime,
      };
    }
  }
};

export { execHttpReq };

// POST Request Example
// (async () => {
//   const url = 'https://jsonplaceholder.typicode.com/posts';
//   const method = 'POST';
//   const params = { userId: 1 };
//   const headers = { 'Content-Type': 'application/json' };
//   const body = {
//     title: 'foo',
//     body: 'bar',
//     userId: 1,
//   };

//   const { request, response, data, executionTime } = await execHttpReq(
//     url,
//     method,
//     params,
//     headers,
//     body,
//   );
//   console.log(
//     request,
//     response,
//     data,
//     `Execution time: ${executionTime}ms`
//   );
// })();
