import axios from 'axios';

const axiosInstance = axios.create({
    // Use an environment variable for flexibility
    baseURL: import.meta.env.VITE_API_URL || 'http://localhost:5000/api',
    headers: {
        'Content-Type': 'application/json'
    }
});

export default axiosInstance;