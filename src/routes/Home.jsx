import { useState, useEffect } from "react";
import { useOutletContext, NavLink } from "react-router-dom";
import "../styles/home.css";

import homeImage from "../assets/heshan-perera-Q1AhQ2DgSQA-unsplash.jpg";

const Home = () => {
  const { products, loading, error } = useOutletContext();
  const [mensClothing, setMensClothing] = useState([]);
  const [womenClothing, setWomenClothing] = useState([]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error...</p>;

  useEffect(() => {
    setMensClothing(filterProducts("men's clothing"));
    setWomenClothing(filterProducts("women's clothing"));
  }, [products]);

  function filterProducts(category) {
    return products.filter((p) => p.category === category);
  }

  return (
    <section className="home-section">
      <div className="image-container">
        <p className="home-img-credits">
          Image by <a href="https://unsplash.com/@geniequo">Heshan Perera</a> at{" "}
          <a href="https://unsplash.com/">Unsplash</a>
        </p>
      </div>
      <main className="home-main">
        <div>
          <p>
            Check out the best products, tested and approved by specialists.
          </p>
        </div>
        <div className="home-products-line">
          <h2>Popular men clothing</h2>
          <div className="home-products">
            {mensClothing.map((p, index) => (
              <div key={p.id}>
                <img src={p.image} alt="Product" />
                <h3>{p.title}</h3>
              </div>
            ))}
          </div>
        </div>
        <div className="home-products-line">
          <h2>Popular women clothing</h2>
          <div className="home-products">
            {womenClothing.map((p, index) => (
              <div key={p.id}>
                <img src={p.image} alt="Product" />
                <h3>{p.title}</h3>
              </div>
            ))}
          </div>
        </div>
        <div className="shop-button-container">
          <button className="shop-button">
            <NavLink to="/shop">See all our products</NavLink>
          </button>
        </div>
        <div>
          <p>This is a fake store page created to practice SPAs.</p>
        </div>
      </main>
    </section>
  );
};

export default Home;
