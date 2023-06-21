import { FaStar } from 'react-icons/fa';
import '../../styles/components/rating.scss'

function Rating ({rating}){
    const filledStars = Array.from({ length: rating }, (_, index) => (
        <span key={index} className="star">
          <FaStar />
        </span>
      ));
      const emptyStars = Array.from({ length: 5 - rating }, (_, index) => (
        <span key={index} className="star">
          <FaStar />
        </span>
      ));

    return (
        <div className="rating-stars">
            <span className="filled-stars">{filledStars}</span>
            <span className="empty-stars">{emptyStars}</span>
        </div>
    )
}

export default Rating