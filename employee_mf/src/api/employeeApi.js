import axios from "axios";

const api = axios.create({
  baseURL: "https://reactmodulefederation-plus-dotnet10-1.onrender.com/api",
});

export default api;