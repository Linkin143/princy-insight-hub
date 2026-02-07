import axiosInstance from './axiosInstance.js';

export const contactService = {
    sendMessage: (data) => axiosInstance.post('/messages', data),
};

export const feedbackService = {
    submitFeedback: (data) => axiosInstance.post('/feedback', data),
    getFeedbacks: () => axiosInstance.get('/feedback'),
};