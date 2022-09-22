import axios from "axios";
const MAXIMUM_BASE_URL =
  "https://us-central1-maximumprotocol-50f77.cloudfunctions.net/api";

const MAXIMUM_LOCAL =
  "https://192.168.0.109:5001/maximumprotocol-50f77/us-central1/api";

export const maximumInstance = axios.create({
  baseURL: MAXIMUM_BASE_URL,
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
    Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
  },
});

const apiBook = {
  dashboard: "/dashboard",
};
