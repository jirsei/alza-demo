import { apiClient } from './axiosInstance';
import type { Products } from '@/types/products';

export const getProducts = async (): Promise<Products> => {
  const requestBody = {
    filterParameters: {
      id: 18855843,
      isInStockOnly: false,
      newsOnly: false,
      wearType: 0,
      orderBy: 0,
      page: 1,
      params: [],
      producers: [],
      sendPrices: true,
      type: 'action',
      typeId: '',
      branchId: '',
    },
  };

  const response = await apiClient.post<Products>('/products', requestBody);
  return response.data;
};
