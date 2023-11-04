import axios from "axios";

export const auth = async ({ username, password }) => {
    return axios.post("https://fakestoreapi.com/auth/login", {
        username,
        password
    });
};