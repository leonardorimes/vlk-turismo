import { useState } from "react";

function Card({ title, subtitle, price, img }) {
  const [isExpanded, setIsExpanded] = useState(false); // Estado para controlar a expansão da imagem
  const [transformOrigin, setTransformOrigin] = useState("center center"); // Controla a origem do zoom

  const handleExpand = () => {
    setIsExpanded(true); // Expande a imagem
  };

  const handleClose = () => {
    setIsExpanded(false); // Fecha a imagem expandida
  };

  const handleMouseMove = (e) => {
    const rect = e.target.getBoundingClientRect(); // Obtém as dimensões da imagem
    const x = ((e.clientX - rect.left) / rect.width) * 100; // Calcula a posição X do mouse em porcentagem
    const y = ((e.clientY - rect.top) / rect.height) * 100; // Calcula a posição Y do mouse em porcentagem
    setTransformOrigin(`${x}% ${y}%`); // Define a origem do zoom baseada na posição do mouse
  };

  return (
    <>
      <div className="w-80 mx-6 h-[350px] rounded-xl overflow-hidden bg-slate-50 grid place-items-center shadow-2xl relative">
        {/* Container principal do cartão */}
        <img
          src={img}
          alt=""
          className="rounded-xl absolute top-0 w-full h-[350px] transform transition-transform duration-300 ease-in-out group-hover:scale-110"
          onClick={handleExpand} // Clique para expandir
        />
        {/* <div className="flex justify-betweem items-center gap-9 mt-36">
          <div className="flex flex-col">
            <h2 className="text-3xl">{title}</h2>
            <p> {subtitle} </p>
          </div>
          <span className=" bg-yellow-600 p-4 rounded-xl font-bold ">
            R$ {price}
          </span>
        </div> */}
        {/* Informações adicionais do cartão (desativadas no momento) */}
      </div>

      {/* Modal para imagem expandida */}
      {isExpanded && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50"
          onClick={handleClose} // Clique fora para fechar
        >
          <img
            src={img}
            alt=""
            className="rounded-xl max-w-full max-h-full transform transition-transform duration-300 ease-in-out scale-150 cursor-zoom-out"
            style={{
              transformOrigin: transformOrigin, // Origem do zoom ajustada dinamicamente
            }}
            onMouseMove={handleMouseMove} // Atualiza o zoom com base na posição do mouse
            onClick={(e) => e.stopPropagation()} // Evita que o clique feche o modal
          />
        </div>
      )}
    </>
  );
}

export default Card;
