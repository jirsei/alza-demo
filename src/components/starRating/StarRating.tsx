import './StarRating.scss';
import starIcon from '@/assets/star-icon.png';

interface StarRatingProps {
  rating: number | string;
}

function StarRating({ rating }: StarRatingProps) {
  const percentage = isNaN(Number(rating)) ? 0 : Math.round(Number(rating) * 10);

  const stars = Array(5)
    .fill(0)
    .map((_value: undefined, index: number) => <img src={starIcon} key={index} className="star" />);

  return (
    <div className="star-rating" title={percentage + '%'}>
      <div className="stars empty-stars-border">{stars}</div>
      <div className="stars empty-stars">{stars}</div>
      <div className="stars full-stars" style={{ width: percentage.toString() + '%' }}>
        {stars}
      </div>
    </div>
  );
}

export default StarRating;
