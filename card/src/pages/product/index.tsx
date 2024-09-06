import React, { useState } from "react";

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  rating: number;
  brand: string;
  thumbnail: string;
}

interface ProductListProps {
  products: Product[];
}

const ProductList: React.FC<ProductListProps> = ({ products }) => {
  // State to keep track of the selected product
  const [selectedProductId, setSelectedProductId] = useState<number | null>(null);

  // Function to handle product click
  const handleProductClick = (productId: number) => {
    // Toggle selection
    setSelectedProductId((prevId) => (prevId === productId ? null : productId));
  };

  return (
    <>
      <div className="container m-auto p-6 ">
        {/* Scrollable Product Section */}
        <div className="overflow-y-auto h-[calc(100vh-4rem)]">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <div
                key={product.id}
                onClick={() => handleProductClick(product.id)}
                className={`border p-4 rounded-lg shadow-lg transition-transform transform hover:scale-105 cursor-pointer ${
                  selectedProductId === product.id ? "bg-green-400 text-white" : "bg-white"
                }`}
              >
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  className="w-full h-48 object-cover mb-4 rounded-md"
                />
                <h2 className="text-lg font-bold mb-2">{product.title}</h2>
                <p className="mb-2">{product.description}</p>
                <p className="font-semibold mb-1">Price: Rs. {product.price}</p>
                <p>Rating: {product.rating}</p>
                <p>Brand: {product.brand}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductList;
