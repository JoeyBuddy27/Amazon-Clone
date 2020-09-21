import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5001/clone-83740/us-central1/api",
  //API endpoint
});

export default instance;
