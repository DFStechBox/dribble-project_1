import styles from "./PricingCard.module.css";

interface Props {
  label: string;
  priceLabel: string;
  image: string;
  imageAlt: string;
}

function PricingCard({ label, priceLabel, image, imageAlt }: Props) {
  return (
    <div className={styles.card}>
      <div className={`${styles.card__wrapper} center-vertical`}>
        <span className={styles.card__label}>{label}</span>
        <div>
          <img className={styles.card__image} src={image} alt={imageAlt} />
        </div>
        <span className={styles["card__price-label"]}>{priceLabel}</span>
        <span className={styles["card__benefits-label"]}>
          Every thing in Free, Plus
        </span>
        <ul className={styles.card__benefits}>
          <li className={styles.card__benefit}>
            <img
              alt="check"
              className={styles["card__benefit-icon"]}
              src="/icons/check.png"
            />
            Up to 10 users
          </li>
          <li className={styles.card__benefit}>
            {" "}
            <img
              alt="check"
              className={styles["card__benefit-icon"]}
              src="/icons/check.png"
            />
            Email Support, Call Support
          </li>
          <li className={styles.card__benefit}>
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
