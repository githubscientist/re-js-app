// import the axios library
import axios from "axios";

const baseURL = 'https://6a3403ef8248ee962fa4f20a.mockapi.io';

// create the axios instance
const instance = axios.create({
    baseURL: baseURL,
    timeout: 3000,
    headers: {
        'Content-Type': 'application/json'
    }
});

export default instance;