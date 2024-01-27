import styles from "./PricingCard.module.css";

interface Props {
  label: string;
  price: string;
  duration: string;
  image: string;
  imageAlt: string;
}

function PricingCard({ label, price, duration, image, imageAlt }: Props) {
  return (
    <div className={styles.card}>
      <div className={`${styles.card__wrapper} center-vertical`}>
        <span className={styles.card__label}>{label}</span>
        <div>
          <img className={styles.card__image} src={image} alt={imageAlt} />
        </div>
        <div className={styles["card__price-label"]}>
          <span className={styles["card__price-amount"]}>{price}</span>
          <span className={styles["card__price-duration"]}>{duration}</span>
        </div>
        <span className={styles["card__benefits-label"]}>
          Every thing in Free, Plus
        </span>
        <ul className={styles.card__benefits}>
          <li className={`${styles.card__benefits} center-horizontal`}>
            <img
              alt="check"
              className={styles["card__benefit-icon"]}
              src="/icons/check.png"
            />
            Up to 10 users
          </li>
          <li className={`${styles.card__benefits} center-horizontal`}>
            {" "}
            <img
              alt="check"
              className={styles["card__benefit-icon"]}
              src="/icons/check.png"
            />
            Email Support, Call Support
          </li>
          <li className={`${styles.card__benefits} center-horizontal`}>
            {" "}
            <img
              alt="check"
              className={styles["card__benefit-icon"]}
              src="/icons/check.png"
            />
            1 Year Access
          </li>
        </ul>
        <button className={styles.card__button}>Choose</button>
      </div>
    </div>
  );
}

export default PricingCard;
