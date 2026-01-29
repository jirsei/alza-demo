import './CarouselCard.scss';
import Col from 'react-bootstrap/esm/Col';
import StarRating from '@/components/starRating/StarRating';
import type { Product } from '@/types/product';

interface CarouselCardProps {
  product: Product;
  position: number;
}

function CarouselCard({ product, position }: CarouselCardProps) {
  return (
    <Col
      className="carousel-card p-3 py-4 d-flex flex-column justify-content-between"
      style={{ left: position }}
    >
      <div className="product-card-top mb-2 flex-grow-1 overflow-hidden">
        <div className="product-image m-0 mb-2 d-flex justify-content-center">
          <img className="p-0" src={product.img} alt="Product image" />
        </div>
        <div className="product-rating mb-2">
          <StarRating rating={product.rating}></StarRating>
        </div>
        <div className="product-name m-0 mb-2">
          <h6 className="m-0 p-0">{product.name}</h6>
        </div>
        <div className="product-description m-0 mb-2" title={product.spec}>
          {product.spec}
        </div>
      </div>
      <div className="product-card-bottom">
        <div className="product-price p-0 col-5 align-content-center overflow-hidden text-nowrap">
          <div className="actual m-0 p-0">{product.price}</div>
        </div>
      </div>
    </Col>
  );
}

export default CarouselCard;
