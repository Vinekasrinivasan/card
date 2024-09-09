import React, { useEffect, useState } from "react";
import NavBar from "./navbar";
import ProductList from "./product";


interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  rating: number;
  brand: string;
  thumbnail: string;
}

const Home: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch("https://dummyjson.com/products");
      const { products } = await res.json();
      setProducts(products);
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <NavBar />
      <ProductList products={products} />
    </div>
  );
};

export default Home;
