import axios from "axios";
const customFetch = axios.create({
  // baseURL: "https://afrihub-a2sv-hackathon-project-server.onrender.com/",
  baseURL: "http://localhost:8080",
});

export default customFetch;
