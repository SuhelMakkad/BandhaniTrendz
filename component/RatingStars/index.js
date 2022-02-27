import { useEffect, useState } from "react";
import { Star, EmptyStar, HalfStar } from "../Icons";
import styles from "./RatingStars.module.css";

export default function RatingStars({ totalStars, size, maxStars = 5 }) {
  const [starsToShow, setStarsToShow] = useState([]);

  useEffect(() => {
    const numberOfStars = totalStars > maxStars ? maxStars : totalStars || 0;
    const stars = [];

    for (let i = 0; i < Math.floor(numberOfStars); i++) {
      stars.push(<Star size={size} key={stars.length - 1} />);
    }

    if (Math.ceil(numberOfStars - Math.floor(numberOfStars)) > 0) {
      stars.push(<HalfStar size={size} key={stars.length - 1} />);
    }

    while (stars.length < maxStars) {
      stars.push(<EmptyStar size={size} key={stars.length - 1} />);
    }

    setStarsToShow(stars);
  }, []);

  return <span className={styles.stars}>{starsToShow}</span>;
}
