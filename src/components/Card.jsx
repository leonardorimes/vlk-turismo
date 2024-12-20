import { useState } from "react";

function Card({ img }) {
  const handleImageClick = () => {
    window.open(img, "_blank");
  };

  return (
    <div className="w-full h-full rounded-xl overflow-hidden bg-slate-50 grid place-items-center shadow-2xl relative">
      {/* Imagem com efeito de zoom ao passar o mouse */}
      <div className="relative w-full h-full">
        <img
          src={img}
          alt="Imagem do cartão"
          onClick={handleImageClick}
          className="rounded-xl w-full h-full object-cover transition-transform duration-300 ease-in-out cursor-pointer"
        />
      </div>
    </div>
  );
}

export default Card;
