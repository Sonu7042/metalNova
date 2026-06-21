import { apiRequest, jsonOptions } from '../api';

export const getTheme = () => apiRequest('/theme', { cache: 'no-store' });
export const updateTheme = (theme) => apiRequest('/theme', { ...jsonOptions('PUT', theme), cache: 'no-store' });
