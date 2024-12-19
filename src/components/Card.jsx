import { useState } from "react";

function Card({ img }) {
  return (
    <div className="w-full mx-6 h-full rounded-xl overflow-hidden bg-slate-50 grid place-items-center shadow-2xl relative">
      {/* Imagem com efeito de zoom ao passar o mouse */}
      <div className="relative w-full h-full">
        <img
          src={img}
          alt="Imagem do cartão"
          className="rounded-xl w-full h-full object-cover transition-transform duration-300 ease-in-out "
        />
      </div>
    </div>
  );
}

export default Card;
