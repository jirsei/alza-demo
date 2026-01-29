import useProductsStore, { type SortType } from '@/stores/ProductsStore';
import './ProductTabs.scss';
import Button from 'react-bootstrap/esm/Button';

function ProductTabs() {
  const sortType = useProductsStore((s) => s.sortType);

  const setSortType = useProductsStore((s) => s.setSortType);

  const tabs = [
    { label: 'TOP', value: 'top' },
    { label: 'Nejprodávanější', value: 'best' },
    { label: 'Od nejlevnějšího', value: 'priceAsc' },
    { label: 'Od nejdražšího', value: 'priceDesc' },
  ];

  return (
    <div className="product-tabs px-4 mt-5 py-4">
      <div className="product-tabs-btns d-flex align-content-end">
        {tabs.map((value, index) => (
          <Button
            key={index}
            className={'product-tab ' + (sortType == value.value ? 'active-tab' : '')}
            onClick={() => {
              setSortType(value.value as SortType);
            }}
          >
            {value.label}
          </Button>
        ))}
      </div>
    </div>
  );
}

export default ProductTabs;
