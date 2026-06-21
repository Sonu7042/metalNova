import { apiRequest, jsonOptions } from '../api';

export const createCategory = (name) => apiRequest('/categories', jsonOptions('POST', { name }));
export const updateCategory = (id, data) => apiRequest(`/categories/${id}`, jsonOptions('PUT', data));
export const archiveCategory = (id) => apiRequest(`/categories/${id}`, { method: 'DELETE' });
export const createProduct = (product) => apiRequest('/products', jsonOptions('POST', product));
export const updateProduct = (id, product) => apiRequest(`/products/${id}`, jsonOptions('PUT', product));
export const archiveProduct = (id) => apiRequest(`/products/${id}`, { method: 'DELETE' });

export const uploadProductImage = async (formData) => apiRequest('/upload', { method: 'POST', body: formData });
