import axios from "axios";

const headerCurrency = axios.create({
  baseURL: "https://dummyjson.com",
});

headerCurrency.interceptors.response.use(function (response) {
  return response.data;
});

export default headerCurrency;
