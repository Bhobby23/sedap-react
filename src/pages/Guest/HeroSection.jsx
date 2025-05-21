import React from 'react';
import heroImg from '../../assets/hero.jpg'; 

  const HeroSection = () => {
    return (
       <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-6 flex flex-col-reverse md:flex-row items-center">
        <div className="md:w-1/2">
          <h2 className="text-4xl font-bold mb-4 text-red-600">Nikmati Hidangan Lezat Setiap Hari</h2>
          <p className="mb-6 text-lg">Aplikasi Sedap menghadirkan berbagai menu berkualitas, sehat, dan menggugah selera langsung ke tangan Anda.</p>
        </div>
        <div className="md:w-1/2">
          <img src={heroImg} alt="Hero" className="rounded-lg shadow-lg" />
        </div>
      </div>
    </section>
    );
  };
  export default HeroSection;