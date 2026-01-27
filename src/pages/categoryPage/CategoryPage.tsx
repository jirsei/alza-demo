import './CategoryPage.scss';
import { useEffect, useState, type ReactNode } from 'react';
import Row from 'react-bootstrap/esm/Row';
import ProductCard from '@/components/productCard/ProductCard';
import ProductCardPlaceholder from '@/components/productCardPlaceholder/ProductCardPlaceholder';
import type { Product } from '@/types/product';
import useProductsStore from '@/stores/useProductsStore';
import Subcategories from '@/components/subcategories/Subcategories';

function CategoryPage() {
  const [productCards, setProductCards] = useState<ReactNode[] | null>(null);
  const [placeholderCards, setPlaceholderCards] = useState<ReactNode[] | null>(
    null,
  );

  const { products, category, loading, fetchProducts } = useProductsStore();

  // load products
  useEffect(() => {
    fetchProducts();
  }, []);

  // generate loading placeholders
  useEffect(() => {
    setPlaceholderCards(
      [...Array(24)].map((_value: undefined, index: number) => (
        <ProductCardPlaceholder key={index}></ProductCardPlaceholder>
      )),
    );
  }, []);

  // transform products into cards
  useEffect(() => {
    if (products !== null) {
      const cards = [...products].map((value: Product, index: number) => (
        <ProductCard product={value} key={index}></ProductCard>
      ));
      setProductCards(cards);
    }
  }, [products]);

  return (
    <div className="category-page">
      <Row id="category-page-header" className="p-4 mt-3">
        <h3 className="category-page-name p-0">
          {!category ? '\u00A0' : category}
        </h3>
      </Row>
      <Row id="category-page-subcategories" className="p-3 px-4">
        <Subcategories></Subcategories>
      </Row>
      <Row id="category-page-carousel" className="p-3 px-4">
        Carousel
      </Row>
      <Row id="category-page-tabs" className="p-3 px-4">
        Tabs
      </Row>
      <Row id="category-page-products" className="p-3">
        {!productCards || loading ? placeholderCards : productCards}
      </Row>
    </div>
  );
}

export default CategoryPage;
