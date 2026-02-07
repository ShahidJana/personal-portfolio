import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

const api = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
    timeout: 10000, // 10 seconds
});

// Request interceptor
api.interceptors.request.use(
    (config) => {
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// Response interceptor
api.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        if (error.response) {
            // Server responded with error
            console.error('API Error:', error.response.data);
        } else if (error.request) {
            // Request made but no response
            console.error('Network Error:', error.message);
        } else {
            // Something else happened
            console.error('Error:', error.message);
        }
        return Promise.reject(error);
    }
);

// API methods
export const contactAPI = {
    sendMessage: async (data) => {
        try {
            const response = await api.post('/contact', data);
            return response.data;
        } catch (error) {
            throw error;
        }
    },

    healthCheck: async () => {
        try {
            const response = await api.get('/health');
            return response.data;
        } catch (error) {
            throw error;
        }
    }
};

export default api;
