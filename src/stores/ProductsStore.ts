import { create } from 'zustand';
import type { Product } from '@/types/product';
import { getProducts } from '@/api/productsApi';

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

  fetchProducts: () => void;
  setSortType: (sort: SortType) => void;
}

const useProductsStore = create<ProductsState>((set, get) => ({
  products: [],
  category: '',
  loading: false,
  error: null,
  sortType: 'top',
  sortedProducts: [],

  setSortType: (sortType) => set({ sortType }),

  fetchProducts: async () => {
    if (!get().loading) {
      set({ loading: true, error: null });

      try {
        const res = await getProducts();

        set({
          category: res.breadcrumbs[0]?.category?.name || '',
          products: res.data || [],
          loading: false,
        });
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (err: any) {
        set({
          error: err.response?.data?.error || 'Something went wrong',
          loading: false,
        });
        console.error(err);
      }
    }
  },
}));

export default useProductsStore;
