import axios from "axios";

const API_ROUTE = "http://localhost:4000";

const axiosInstance = axios.create({
    baseURL: API_ROUTE,
});

export const client = {
    signUp: async (payload) => axiosInstance.post("users", payload),
    checkPassword: async (email, password) => {
        const params = {email};
        const {data} = await axiosInstance.get("users", {params});
        const user = data.find((us) => us);
        return user?._password === password;
    },
    getUsernameByEmail: async (email) => {
        const params = {email};
        const {data} = await axiosInstance.get("users", {params});
        const user = data.find((us) => us);
        return user?._name;
    }
}
