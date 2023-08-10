import { useState } from 'react';

const  RatingComponent = ({ score }) => {
  const [stars, setStars] = useState([]);

  const generateStars = (score) => {
    const numFullStars = Math.floor(score);
    const hasHalfStar = score % 1 !== 0;

    const starElements = [];

    for (let i = 0; i < numFullStars; i++) {
      starElements.push(<img key={`full-star-${i}`} src="src/assets/star.svg" width="14px" height="11px" />);
    }

    if (hasHalfStar) {
      starElements.push(<img key="half-star" src="src/assets/half-star-icon-design-isolated-on-white-background-vector.jpg" width="14px" height="11px" />);
    }

    return starElements;
  };

  return <div>{generateStars(score)}</div>;
}

export default RatingComponent;