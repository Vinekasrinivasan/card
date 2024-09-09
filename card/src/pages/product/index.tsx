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
  const [selectedProductId, setSelectedProductId] = useState<number | null>(null);

  const handleProductClick = (productId: number) => {
    setSelectedProductId((prevId) => (prevId === productId ? null : productId));
  };

  return (
    <div className="container mx-auto p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="border p-4 rounded-lg shadow-lg transition-transform transform hover:scale-105 cursor-pointer"
            onClick={() => handleProductClick(product.id)}
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
            <div className="mt-4 flex justify-between">
              <button className="bg-blue-500 text-white border-2 border-blue-500 py-2 px-4 rounded transition-colors duration-300 hover:bg-transparent hover:text-blue-500">
                Add to Cart
              </button>
              <button className="bg-green-500 text-white border-2 border-green-500 py-2 px-4 rounded transition-colors duration-300 hover:bg-transparent hover:text-green-500">
                Buy Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
