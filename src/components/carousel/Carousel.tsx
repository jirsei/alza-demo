import './Carousel.scss';
import Col from 'react-bootstrap/esm/Col';
import CarouselCard from './carouselCard/CarouselCard';
import type { Product } from '@/types/product';
import { useEffect, useRef, useState, type ReactElement } from 'react';
import { Button } from 'react-bootstrap';
import { modulo } from '@/utils/mathUtils';

interface CarouselProps {
  products: Product[];
}

function Carousel({ products }: CarouselProps) {
  const cardsRowRef = useRef<HTMLInputElement>(null);
  const [visibleWidthPx, setVisibleWidthPx] = useState(0);
  const [pageWidth, setPageWidth] = useState(0); // how many cards are fully visible

  const [page, setPage] = useState(0);
  const [cards, setCards] = useState<ReactElement[]>([]);
  const cardWidth = 200;
  const cardSpace = 8;

  useEffect(() => {
    setPageWidth(Math.floor(visibleWidthPx / (cardWidth + cardSpace)));
  }, [visibleWidthPx]);

  useEffect(() => {
    if (products.length > 0) {
      const newCards: ReactElement[] = [];

      for (let index = 0; index < pageWidth * 3 + 1; index++) {
        const productIndex = page * pageWidth - pageWidth + index;
        const product = { ...products[modulo(productIndex, products.length)] };

        const productElement = (
          <CarouselCard
            key={productIndex}
            product={product}
            position={(index - pageWidth) * (cardWidth + cardSpace)}
          ></CarouselCard>
        );
        newCards.push(productElement);
      }

      console.log('page', page); //TODO delete
      console.log('newCards', newCards); //TODO delete
      setCards(newCards);
    }
  }, [products, pageWidth, page]);

  // get visible width
  useEffect(() => {
    function handleWindowResize() {
      if (cardsRowRef.current) {
        console.log('ref width: ' + cardsRowRef.current.clientWidth);
        setVisibleWidthPx(cardsRowRef.current.clientWidth);
      }
    }

    handleWindowResize();

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  return (
    <Col className="carousel p-4">
      <Button className="page-btn page-minus" onClick={() => setPage(page - 1)}>
        <span className="btn-arrow ml-auto">◄</span>
      </Button>
      <div ref={cardsRowRef} className="cards-row d-flex flex-row">
        {products.length > 0 ? cards : ''}
      </div>

      <Button className="page-btn page-plus" onClick={() => setPage(page + 1)}>
        <span className="btn-arrow ml-auto">►</span>
      </Button>
    </Col>
  );
}

export default Carousel;
