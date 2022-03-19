import { useEffect, useState } from "react";

import { Share } from "../Icons";
import AvgRating from "../AvgRating";
import ReviewsOverview from "../ReviewsOverview";
import UserReview from "../UserReview";

import styles from "./ProductDescription.module.css";

export default function ProductDescription() {
  const [details, setDetails] = useState({});
  const [descriptions, setDescriptions] = useState([]);

  useEffect(() => {
    setDetails({
      size: "XL",
      length: `24"`,
      somthing: "XYZ",
    });

    setDescriptions([
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    ]);
  }, []);
  return (
    <div className={styles.wrapper}>
      <div className={styles.topbar}>
        <span>dress</span>
        <span id={styles.shareBtnWrapper}>
          <Share size={20} id={styles.shareBtn} />
        </span>
      </div>

      <h3 id={styles.productName}>Red Drees with flower design and dotted dupata</h3>

      <div className={styles.ratingTop}>
        <AvgRating rating="4.4" />
        <p className={styles.avgRatingTop}>253 Ratings & 38 Reviews</p>
      </div>

      <span className={styles.divider}></span>

      <div className={styles.detailsSectionn}>
        <p className={styles.sectionHeading}>Details</p>
        <div className={styles.detailsWrapper}>
          <ul className={styles.detailsList + " " + styles.detailsKey}>
            {details
              ? Object.keys(details).map((detail, i) => (
                  <li key={i} className={styles.detailsItem}>
                    {detail}
                  </li>
                ))
              : ""}
          </ul>
          <ul className={styles.detailsList + " " + styles.detailsValue}>
            {details
              ? Object.values(details).map((detail, i) => (
                  <li key={i} className={styles.detailsItem}>
                    {detail}
                  </li>
                ))
              : ""}
          </ul>
        </div>
      </div>

      <span className={styles.divider}></span>

      <div className={styles.descriptionsWrapper}>
        <p className={styles.sectionHeading}>Description</p>
        <div className={styles.descriptions}>
          {descriptions
            ? descriptions.map((detail, i) => (
                <p key={i} className={styles.detailsText}>
                  {detail}
                </p>
              ))
            : ""}
        </div>
      </div>

      <span className={styles.divider}></span>

      <div className={styles.reviewsWrapper}>
        <p className={styles.sectionHeading}>Customer Reviews</p>
        <ReviewsOverview />
        <span className={styles.divider}></span>

        <div className={styles.userReviewsWrapper}>
          <UserReview
            totalStars={4.5}
            name={"suhel makkad"}
            reviewText={
              "Sit amet consectetur adipisicing elit. Voluptatem omnis voluptatibus nisi, reprehenderit maiores nulla."
            }
          />

          <span className={styles.divider}></span>

          <UserReview
            totalStars={3.5}
            name={"suhel makkad"}
            reviewText={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis ad, esse adipisci sequi repellat architecto fuga dicta tempore mollitia eaque isci  architecto fuga dicta tempore mollitia eaque?"
            }
          />

          <span className={styles.divider}></span>

          <UserReview
            totalStars={3.5}
            name={"suhel makkad"}
            reviewText={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis ad, esse adipisci sequi repellat architecto fuga dicta tempore mollitia ipsum dolor sit amet consectetur adipisicing elit. Officiis ad, esse adipisci sequi repellat architecto fuga dicta tempore mollitia eaque?"
            }
          />

          <span className={styles.divider}></span>

          <UserReview
            totalStars={3.5}
            name={"suhel makkad"}
            reviewText={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis ad, esse adipisci sequi repellat architecto fuga dicta tempore mollitia eaque?"
            }
          />
        </div>
      </div>
    </div>
  );
}
