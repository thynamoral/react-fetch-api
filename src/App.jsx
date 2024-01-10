import { useEffect, useState } from "react";
import axios, { CanceledError } from "axios";
// components
import SelectForm from "./components/SelectForm";
import ProductCard from "./components/ProductCard";
import SearchForm from "./components/SearchForm";
// css
import "./App.css";

function App() {
  // states
  const [products, setProducts] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    const fetchProduct = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get(`https://fakestoreapi.com/products`, {
          signal: controller.signal,
        });
        setProducts(response.data);
        setIsLoading(false);
      } catch (error) {
        if (error instanceof CanceledError) return;
        setIsLoading(false);
        console.log(error);
      }
    };
    fetchProduct();

    return () => controller.abort();
  }, []);

  const categories = Array.from(
    new Set(products.map((product) => product.category))
  );

  const filteredProducts = products.filter((product) => {
    if (selectedCategory === "") return product;
    return product.category === selectedCategory;
  });

  return (
    <div className="app">
      <SearchForm keyword={searchInput} setKeyword={setSearchInput} />
      <SelectForm
        categories={categories}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <div className="products-content">
        {isLoading && <p style={{ color: "#000" }}>Loading...</p>}
        {filteredProducts
          ?.filter(
            (product) =>
              product.title.toLowerCase().includes(searchInput.toLowerCase()) ||
              product.category.toLowerCase().includes(searchInput.toLowerCase())
          )
          .map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
      </div>
    </div>
  );
}

export default App;
