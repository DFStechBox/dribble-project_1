import PricingCard from "./assets/components/PricingCard/PricingCard";
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.prices}>
      <PricingCard
        label="Pro"
        price="Free"
        imageAlt="Moving Bicycle with clouds"
        image="/images/bike.png"
      />
      <PricingCard
        label="Pro"
        price="$49"
        duration="/Year"
        imageAlt="Car with clouds"
        image="/images/car.png"
      />
      <PricingCard
        label="Enterprise"
        price="$99"
        imageAlt="Flyingplane with clouds"
        image="/images/plane.png"
      />
    </div>
  );
}

export default App;
