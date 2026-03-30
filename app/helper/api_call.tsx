import axios from "axios";

const API = axios.create({
    baseURL: "https://honeydew-armadillo-704093.hostingersite.com/api",
    headers: {
        "Content-Type": "application/json",
    },
});

// GET request
export const getAPI = async (url: string) => {
    try {
        const response = await API.get(url);
        return response.data;
    } catch (error) {
        console.error("GET API Error:", error);
        throw error;
    }
};

// POST request
export const postAPI = async (url: string, data: any) => {
    try {
        const response = await API.post(url, data);
        return response.data;
    } catch (error) {
        console.error("POST API Error:", error);
        throw error;
    }
};