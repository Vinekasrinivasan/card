import React from "react";
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

interface HomeProps {
  products: Product[];
}

const Home: React.FC<HomeProps> = ({ products }) => {
  return (
    <div>
      <NavBar />
      <ProductList products={products} />
    </div>
  );
};

export async function getStaticProps() {
  const res = await fetch("https://dummyjson.com/products");
  const { products } = await res.json();

  return {
    props: {
      products,
    },
  };
}

export default Home;
