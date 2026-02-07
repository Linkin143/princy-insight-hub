import { useState } from 'react';

export const useForm = (submitFunction) => {
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState(null);
    const [success, setSuccess] = useState(false);

    const handleSubmit = async (formData) => {
        setLoading(true);
        setErrors(null);
        setSuccess(false);
        try {
            await submitFunction(formData);
            setSuccess(true);
        } catch (err) {
            // This captures the 'errors' array from your express-validator middleware
            setErrors(err.response?.data?.errors || [{ message: 'Something went wrong' }]);
        } finally {
            setLoading(false);
        }
    };

    return { handleSubmit, loading, errors, success };
};