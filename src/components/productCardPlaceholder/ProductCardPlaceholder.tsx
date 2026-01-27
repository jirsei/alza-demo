import './ProductCardPlaceholder.scss';
import Col from 'react-bootstrap/esm/Col';

function ProductCardPlaceholder() {
  return (
    <Col className="product-card-placeholder p-3 py-4 d-flex flex-column justify-content-between">
      <div></div>
      <div className="spinner"></div>
      <div></div>
    </Col>
  );
}

export default ProductCardPlaceholder;
