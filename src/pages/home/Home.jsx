import { Link, useOutletContext } from "react-router-dom";
import ItemCard from "../../components/itemCard/ItemCard.jsx";
import styles from "./Home.module.css";

const Home = () => {
  const { products } = useOutletContext();
  const clothing = products.filter((p) => p.category.includes("clothing"));
  const jewelery = products.filter((p) => p.category === "jewelery");

  return (
    <main className={styles["home-main"]}>
      <div className={styles.hero}>
        <h1>Super cool stuf shop</h1>
        <p>Find the best items for the best price.</p>
        <p>ONLY TODAY: 0.1% discount on purchases over $3.000.000.000!</p>
      </div>
      <div className={styles.products}>
        <h2>Trending Clothes</h2>
        <ul>
          {clothing.map((p) => {
            return <ItemCard key={p.id} item={p} direction="vertical" />;
          })}
        </ul>
        <h2>Todays Promotions</h2>
        <ul>
          {jewelery.map((p) => {
            return <ItemCard key={p.id} item={p} direction="vertical" />;
          })}
        </ul>
      </div>
      <div className={styles.action}>
        <Link to="/shop">Explore all our products</Link>
      </div>
    </main>
  );
};

export default Home;
