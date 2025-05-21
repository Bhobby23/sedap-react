import React from 'react';

  const Footer = () => {
    return (
      <footer className="bg-gray-800 text-white p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
          <div>
            <h4 className="font-bold text-lg mb-2">Sedap</h4>
            <p>Jl.Kehidupan gagal<br />Tegar, Indonesia</p>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-2">Sosial Media</h4>
            <p>Instagram | Facebook | Twitter</p>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-2">Partner Kami</h4>
            <img src="/images/partner.png" alt="Partner" className="w-32 mt-2" />
          </div>
        </div>
        <p className="text-center mt-6">&copy; 2025 Sedap. All rights reserved.</p>
      </footer>
    );
  };
  export default Footer;