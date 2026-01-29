import type { Products } from '@/types/products';
import axios, { AxiosError } from 'axios';

export const apiClient = axios.create({
  baseURL: 'https://www.alza.cz/Services/RestService.svc/v2',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

const errorHandler = (error: unknown) => {
  if (error instanceof AxiosError) {
    const statusCode = error.response?.status;
    const data: Products | undefined = error.response?.data as Products;

    if (data.err && data.msg) {
      console.error(data.msg);
    }

    if (statusCode && statusCode !== 401) {
      console.error(error);
    }
  }

  // eslint-disable-next-line @typescript-eslint/prefer-promise-reject-errors
  return Promise.reject(error);
};

apiClient.interceptors.response.use(undefined, (error) => {
  return errorHandler(error);
});
