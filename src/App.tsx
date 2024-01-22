import PricingCard from "./assets/components/PricingCard/PricingCard";

function App() {
  return (
    <div>
      <PricingCard
        label="Pro"
        priceLabel="$49 / Year"
        imageAlt="car with clouds"
        image="/images/car.png"
      />
    </div>
  );
}

export default App;
