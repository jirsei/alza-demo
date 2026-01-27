import './ProductCard.scss';
import Col from 'react-bootstrap/esm/Col';
import StarRating from '@/components/starRating/StarRating';
import type { Product } from '@/types/product';
import DropdownBtn from '@/components/dropdownBtn/dropdownBtn';

interface ProductCardProps {
  product: Product;
}

function ProductCard({ product }: ProductCardProps) {
  const optionNames = [
    'Koupit zrychleně',
    'Porovnat',
    'Hlídat',
    'Přidat do seznamu',
  ];

  const dropdownOptions = optionNames.map((value: string, _index: number) => ({
    name: value,
    action: () => {
      console.log(value + ' click on ' + product.name);
    },
  }));

  return (
    <Col className="product-card p-3 py-4 d-flex flex-column justify-content-between">
      <div className="product-card-top mb-2 flex-grow-1 overflow-hidden">
        <div className="product-name m-0 mb-2">
          <h6 className="m-0 p-0">{product.name}</h6>
        </div>
        <div className="product-description m-0 mb-2" title={product.spec}>
          {product.spec}
        </div>
      </div>
      <div className="product-card-bottom">
        <div className="product-image m-0 mb-2 justify-content-center">
          <img className="p-0" src={product.img} alt="Product image" />
          <div className="product-rating p-1">
            <StarRating rating={product.rating}></StarRating>
          </div>
        </div>
        <div className="m-0 mb-2 d-flex flex-row">
          <div className="product-price p-0 col-5 overflow-hidden text-nowrap">
            <div className="actual m-0 p-0">3 453 Kč</div>
            <div className="original m-0 p-0">3 453 Kč</div>
          </div>
          <div className="product-actions p-0 col-7 align-content-center">
            <DropdownBtn
              text={'Koupit'}
              options={dropdownOptions}
              width="100%"
            ></DropdownBtn>
          </div>
        </div>
        <div
          className="product-stock m-0 d-flex justify-content-center"
          style={{ color: '#' + product.avail_color }}
        >
          {product.avail}
        </div>
      </div>
    </Col>
  );
}

export default ProductCard;
