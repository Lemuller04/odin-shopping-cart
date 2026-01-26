import styles from "./App.module.css";
import { Link, useOutletContext } from "react-router-dom";
import ItemCard from "./components/itemCard/ItemCard.jsx";

const App = () => {
  const [fakeItems] = useOutletContext();

  return (
    <>
      <div className={"body" + " " + styles["home-body"]}>
        <div className={styles["hero"]}>
          <h1>Super Cool Stuff</h1>
          <p>Welcome to the coolest web shop in the world!</p>
          <p>Browse the latest trending items and the best offers available.</p>
        </div>
        <main className={styles["home-main"]}>
          <section>
            <h2>Today's Promotions</h2>
            <div>
              {fakeItems.filter(e => e.category === "CA").map((i) => {
                return (
                  <ItemCard item={i} key={i.id} />
                )
              })}
            </div>
          </section>
          <section>
            <h2>Trending Clothes</h2>
            <div>
              {fakeItems.filter(e => e.category === "CB").map((i) => {
                return (
                  <ItemCard item={i} key={i.id} />
                )
              })}
            </div>
          </section>
          <Link to="/shop" className={styles["button"]}>See all the products</Link>
        </main>
      </div>
    </>
  )
}

export default App
