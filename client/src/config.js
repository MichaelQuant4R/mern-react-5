import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: "https://mern-react-cv.herokuapp.com/api/",
});