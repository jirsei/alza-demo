import './CategoryPage.scss';
import { useEffect, useMemo, useState, type ReactNode } from 'react';
import Row from 'react-bootstrap/esm/Row';
import ProductCard from '@/components/productCard/ProductCard';
import ProductCardPlaceholder from '@/components/productCardPlaceholder/ProductCardPlaceholder';
import type { Product } from '@/types/product';
import useProductsStore, { sortProducts } from '@/stores/ProductsStore';
import Subcategories from '@/components/subcategories/Subcategories';
import ProductTabs from '@/components/productTabs/ProductTabs';
import Carousel from '@/components/carousel/Carousel';

function CategoryPage() {
  const { products, category, loading, sortType, fetchProducts } =
    useProductsStore();

  const sortedProducts = useMemo(
    () => sortProducts(products, sortType),
    [products, sortType],
  );

  const carouselProducts = useMemo(
    () => sortProducts(products, 'best').slice(0, 4), //TODO change to like 10
    [products],
  );

  // transform products into cards
  const productCards = [...sortedProducts].map(
    (value: Product, index: number) => (
      <ProductCard product={value} key={index}></ProductCard>
    ),
  );

  // generate loading placeholders
  const placeholderCards = [...Array(24)].map(
    (_value: undefined, index: number) => (
      <ProductCardPlaceholder key={index}></ProductCardPlaceholder>
    ),
  );

  // load products
  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="category-page">
      <Row className="category-page-name p-4 mt-3">
        <h3 className="p-0">{!category ? '\u00A0' : category}</h3>
      </Row>
      <Row className="category-page-subcategories p-3 pb-5 px-4">
        <Subcategories></Subcategories>
      </Row>
      <Row className="category-page-carousel p-0">
        <Carousel products={carouselProducts}></Carousel>
      </Row>
      <Row className="category-page-tabs p-0">
        <ProductTabs></ProductTabs>
      </Row>
      <Row className="category-page-products p-3">
        {!productCards || loading ? placeholderCards : productCards}
      </Row>
    </div>
  );
}

export default CategoryPage;
