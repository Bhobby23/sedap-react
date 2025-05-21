import React from 'react';
import testimoniData from '../../data/testimoni.json';

const Testimoni = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-red-500 mb-10">Apa Kata Mereka</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {testimoniData.slice(0, 5).map((item, index) => (
            <div key={index} className="bg-gray-100 p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <img
                  src={item.avatar || 'https://avatar-placeholder.iran.liara.run/public/1'}
                  alt={item.name}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <h4 className="font-bold">{item.name}</h4>
              </div>
              <p className="text-gray-700">"{item.review}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimoni;