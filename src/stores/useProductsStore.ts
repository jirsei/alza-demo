import { create } from 'zustand';
import type { Product } from '@/types/product';
import { getProducts } from '@/api/productsApi';

interface ProductsState {
  products: Product[];
  category: string;
  loading: boolean;
  error: string | null;
  fetchProducts: () => void;
}

const useProductsStore = create<ProductsState>((set) => ({
  products: [],
  category: '',
  loading: false,
  error: null,

  fetchProducts: async () => {
    set({ error: null, loading: true });

    getProducts()
      .then((res) => {
        set({
          category: res.breadcrumbs[0]?.category?.name || '',
          products: res.data || [],
          loading: false,
        });
      })
      .catch((err) => {
        set({
          error: err.response?.data?.error || 'Something went wrong',
          loading: false,
        });
        console.error(err);
      });

    set({ products: [] });
  },
}));

export default useProductsStore;
