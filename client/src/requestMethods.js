import axios from "axios";
const BASE_URL = "http://localhos:500/api/"
const TOKEN = "http://localhos:500/api/"

export const publicRequesr = axios.create({
    baseURL : BASE_URL,
});
export const userRequest = axios.create({
    baseURL:BASE_URL,
    header:{token:"Bearer "}
})