const LOCAL_API = 'http://localhost:5000/api';
const PRODUCTION_API = 'https://metal-nova-u2ah.vercel.app/api';
const configuredApi = import.meta.env.VITE_API_BASE_URL?.replace(/\/$/, '');
const configuredApiIsFrontend = configuredApi?.includes('metal-nova-cyan.vercel.app');

export const API_BASE = import.meta.env.DEV
  ? (configuredApi || LOCAL_API)
  : (configuredApi && !configuredApiIsFrontend ? configuredApi : PRODUCTION_API);

export const apiUrl = (path = '') => `${API_BASE}/${path.replace(/^\//, '')}`;

export const apiFetch = (path, options) => fetch(apiUrl(path), options);

export const readJsonResponse = async (response) => {
  const contentType = response.headers.get('content-type') || '';
  if (!contentType.includes('application/json')) {
    if (response.status === 404) {
      throw new Error('The requested backend API route is not deployed yet.');
    }
    throw new Error('The API returned a web page instead of JSON. Check VITE_API_BASE_URL.');
  }

  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.error || `API request failed with status ${response.status}.`);
  }
  return data;
};

export const readThemeResponse = readJsonResponse;

export const apiRequest = async (path, options) => readJsonResponse(await apiFetch(path, options));

export const jsonOptions = (method, body) => ({
  method,
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(body)
});
