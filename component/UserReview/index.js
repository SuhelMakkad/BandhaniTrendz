import RatingStars from "../RatingStars/index.js";
import { AccountCircle } from "../Icons";
import styles from "./UserReview.module.css";

export default function UserReview({ totalStars, name, reviewText, profilePhoto }) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        {profilePhoto ? (
          profilePhoto
        ) : (
          <span className={styles.profilePic}>
            <AccountCircle size="32px" />
          </span>
        )}
        <span className={styles.name}>{name}</span>

        <div className={styles.ratingStarsWrapper}>
          <RatingStars size="22px" totalStars={totalStars} />
        </div>
      </div>
      <p className={styles.reviewText}>{reviewText}</p>
    </div>
  );
}
