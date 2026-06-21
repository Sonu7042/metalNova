import { apiRequest } from '../api';

export const getProducts = () => apiRequest('/products');
export const getCategories = () => apiRequest('/categories');
