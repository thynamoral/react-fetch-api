import { useEffect, useState } from "react";
import axios from "axios";
// components
import SelectForm from "./components/SelectForm";
import ProductCard from "./components/ProductCard";
// css
import "./App.css";

function App() {
  // states
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`https://fakestoreapi.com/products`);
        setProducts(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchProduct();
  }, []);

  const categories = Array.from(
    new Set(products.map((product) => product.category))
  );

  return (
    <div className="app">
      <SelectForm
        categories={categories}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <div className="products-content">
        {isLoading && <p style={{ color: "#000" }}>Loading...</p>}
        {products
          .filter((product) =>
            selectedCategory ? product.category === selectedCategory : product
          )
          .map((product, index) => (
            <ProductCard
              key={index}
              img={product.image}
              title={product.title}
              price={product.price}
              category={product.category}
            />
          ))}
      </div>
    </div>
  );
}

export default App;
