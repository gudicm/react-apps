import { statusOkRange } from "../constants/general";

const isValidURL = (url) => {
  const regex = new RegExp(
    "^(https?:\\/\\/)" + // protocol is required
      "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // domain name
      "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
      "(\\:\\d+)?" + // port
      "(\\/[-a-z\\d%_.~+]*)*" + // path
      "(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
      "(\\#[-a-z\\d_]*)?$",
    "i", // case-insensitive flag
  );
  return regex.test(url);
};

const isStatusOk = (status) => {
  const res = statusOkRange.MIN <= status && status <= statusOkRange.MAX;
  console.log("status: ", status, res);
  return res;
};

export { isStatusOk, isValidURL };
