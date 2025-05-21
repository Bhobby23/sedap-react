import React, { useState } from 'react';
import produk from '../../data/product.json'; 

const Ketersediaan = () => {
  const [kodeProduk, setKodeProduk] = useState('');
  const [message, setMessage] = useState('');

  const handleCekStok = () => {
    if (!kodeProduk || kodeProduk.length < 4) {
      setMessage('❌ Kode produk tidak boleh kosong dan minimal 4 karakter.');
      return;
    }

    const foundProduct = produk.find((item) => item.kode_produk === kodeProduk.toUpperCase());

    if (!foundProduct) {
      setMessage('❌ Kode produk tidak ditemukan.');
    } else if (foundProduct.stok > 0) {
      setMessage(`✅ Produk ${foundProduct.nama_produk} tersedia dengan harga Rp${foundProduct.harga}.`);
    } else {
      setMessage(`⚠️ Produk ${foundProduct.nama_produk} saat ini sedang habis.`);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-semibold text-center">Cek Ketersediaan Produk</h1>
      <div className="mt-4">
        <input
          type="text"
          value={kodeProduk}
          onChange={(e) => setKodeProduk(e.target.value)}
          placeholder="Masukkan Kode Produk"
          className="border p-2 rounded w-full"
        />
        <button
          onClick={handleCekStok}
          className="mt-2 bg-blue-500 text-white p-2 rounded w-full"
        >
          Cek
        </button>
      </div>
      {message && <div className="mt-4 text-center">{message}</div>}
    </div>
  );
};

export default Ketersediaan;