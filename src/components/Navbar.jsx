// components/Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <h1 className="text-xl font-bold text-red-500">Sedap</h1>
        <nav className="flex gap-6">
          <Link to="/guest" className="hover:text-red-500">Beranda</Link>
          <Link to="/about" className="hover:text-red-500">Tentang</Link>
          <Link to="/topproduct" className="hover:text-red-500">Produk</Link>
          <Link to="/testimoni" className="hover:text-red-500">Testimoni</Link>
        </nav>
        <div>
          <Link to="/login" className="bg-red-500 text-white px-4 py-2 rounded">Login / Register</Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
