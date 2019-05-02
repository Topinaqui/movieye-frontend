import axios from "axios";

const BASE_URL = "http://localhost/api";
const HEADERS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, OPTIONS, PUT, PATCH, DELETE",
  "Content-Type": "application/json"
};

const API = axios.create({
  baseURL: BASE_URL,
  headers: HEADERS
});

export default API;
