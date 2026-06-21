import { apiRequest, jsonOptions } from '../api';

export const getInquiries = () => apiRequest('/inquiries');
export const createInquiry = (inquiry) => apiRequest('/inquiries', jsonOptions('POST', inquiry));
export const archiveInquiry = (id) => apiRequest(`/inquiries/${id}`, { method: 'DELETE' });
