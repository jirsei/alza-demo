import './StarRating.scss';
import { useEffect, useState, type JSX } from 'react';
import starIcon from '@/assets/star-icon.png';

interface StarRatingProps {
  rating: number | string;
}

function StarRating({ rating = 0 }: StarRatingProps) {
  const [stars, setStars] = useState<JSX.Element[] | null>(null);
  const [percentage, setPercentage] = useState<number>(0);

  useEffect(() => {
    setStars(
      [...Array(5)].map((_value: undefined, index: number) => (
        <img src={starIcon} key={index} className="star" />
      )),
    );
  }, []);

  useEffect(() => {
    setPercentage(isNaN(Number(rating)) ? 0 : Math.round(Number(rating) * 10));
  }, [rating]);

  return (
    <div className="star-rating" title={percentage + '%'}>
      <div className="stars empty-stars-border">{stars}</div>
      <div className="stars empty-stars">{stars}</div>
      <div className="stars full-stars" style={{ width: percentage + '%' }}>
        {stars}
      </div>
    </div>
  );
}

export default StarRating;
