import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router
import products from '../../data/topproduct.json';
import rendangImage from '../../assets/images/rendang.jpg';
import sateImage from '../../assets/images/sate.jpg';

const TopProduct = () => {
  // Update the image paths in the products array
  const updatedProducts = products.map(product => {
    if (product.id === 1) {
      return { ...product, image: rendangImage };
    }
    if (product.id === 2) {
      return { ...product, image: sateImage };
    }
    return product;
  });

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-red-500 mb-10">Produk Unggulan</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {updatedProducts.map((product, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow">
              <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded" />
              <h3 className="mt-4 text-xl font-semibold">{product.name}</h3>
              <p className="text-red-500 font-bold">Rp{product.price}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link to="/ketersediaan" className="bg-blue-500 text-white p-2 rounded">
            Cek Ketersediaan Produk
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TopProduct;