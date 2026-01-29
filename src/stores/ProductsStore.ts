import { create } from 'zustand';
import type { Product } from '@/types/product';
import { getProducts } from '@/api/productsApi';
import axios from 'axios';

export type SortType = 'top' | 'best' | 'priceAsc' | 'priceDesc';

export const sortProducts = (products: Product[], sortType: SortType) => {
  const sorted = [...products];

  switch (sortType) {
    case 'top':
      return sorted.sort((a, b) => b.rating - a.rating);
    case 'best':
      return sorted.sort((a, b) => b.ratingCount - a.ratingCount);
    case 'priceAsc':
      return sorted.sort((a, b) => a.priceNoCurrency - b.priceNoCurrency);
    case 'priceDesc':
      return sorted.sort((a, b) => b.priceNoCurrency - a.priceNoCurrency);
    default:
      return sorted;
  }
};

interface ProductsState {
  products: Product[];
  category: string;
  loading: boolean;
  error: string | null;
  sortType: SortType;
  sortedProducts: Product[];

  fetchProducts: () => Promise<void>;
  setSortType: (sort: SortType) => void;
}

const useProductsStore = create<ProductsState>((set, get) => ({
  products: [],
  category: '',
  loading: false,
  error: null,
  sortType: 'top',
  sortedProducts: [],

  setSortType: (sortType) => {
    set({ sortType });
  },

  fetchProducts: async () => {
    console.log('fetching products');

    if (!get().loading) {
      set({ loading: true, error: null });

      try {
        const res = await getProducts();

        set({
          category: res.breadcrumbs[0]?.category?.name || '',
          products: res.data,
          loading: false,
        });
      } catch (err: unknown) {
        let errorMessage = 'Something went wrong';

        if (axios.isAxiosError<{ error?: string }>(err)) {
          errorMessage = err.response?.data.error ?? errorMessage;
        }

        set({
          error: errorMessage,
          loading: false,
        });
        console.error(err);
      }
    }
  },
}));

export default useProductsStore;
