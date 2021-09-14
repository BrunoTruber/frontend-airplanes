import axios from "axios";

const api = axios.create({
    //baseURL: "https://backend-airplanes-bruno.herokuapp.com/airplanes"
    baseURL: "http://localhost:3000/airplanes"
});

export default api;