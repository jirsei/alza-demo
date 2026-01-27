import './CategoryPage.scss';
import Row from 'react-bootstrap/esm/Row';
import ProductCard from '@/components/productCard/ProductCard';
import { getProducts } from '@/api/productsApi';
import { useEffect, useState, type ReactNode } from 'react';
import type { Product } from '@/types/product';

function CategoryPage() {
  const [categoryName, setCategoryName] = useState<string | null>(null);
  const [products, setProducts] = useState<Product[] | null>(null);
  const [productCards, setProductCards] = useState<ReactNode[] | null>(null);

  useEffect(() => {
    getProducts()
      .then((res) => {
        setCategoryName(res.breadcrumbs[0].category.name);
        setProducts(res.data);
      })
      .catch(console.error);
  }, []);

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
        <h3 className="category-page-name p-0">{categoryName}</h3>
      </Row>
      <Row id="category-page-subcategories" className="p-3 px-4">
        Subcategories
      </Row>
      <Row id="category-page-carousel" className="p-3 px-4">
        Carousel
      </Row>
      <Row id="category-page-tabs" className="p-3 px-4">
        Tabs
      </Row>
      <Row id="category-page-products" className="p-3">
        {productCards}
      </Row>
    </div>
  );
}

export default CategoryPage;
