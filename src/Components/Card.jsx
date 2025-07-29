// components/DisasterCard.jsx
import React from 'react';

const Card = ({ image, title, location, price, tag }) => {
  return (
    <div className=" rounded-xl overflow-hidden transform transition-transform duration-300 hover:scale-[1.03] hover:shadow-xl">
      <div className="relative">
        <img src={image} alt={title} className="w-full h-48 object-cover" />
        <span className="absolute top-2 right-2 bg-white text-black text-xs px-2 py-1 rounded-full shadow">
          {tag}
        </span>
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-sm">{title}</h3>
        <p className="text-xs text-gray-500">{location}</p>
        <p className="mt-2 font-bold text-sm text-gray-800">${price.toLocaleString()}</p>
      </div>
    </div>
  );
};

export default Card;
