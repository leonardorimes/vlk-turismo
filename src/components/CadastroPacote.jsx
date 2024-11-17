import { useState } from "react";
import Button from "./Button";

function CadastroPacote() {
  const [selectedOption, setSelectedOption] = useState(""); // Gerencia o estado do radio button

  const handleChange = (event) => {
    setSelectedOption(event.target.value); // Atualiza o estado com a opção selecionada
  };

  return (
    <div className="w-[90%] mx-auto my-0 mt-20 bg-green-800 pb-12 rounded flex flex-col">
      <h1 className="text-center mt-3 text-3xl font-bold text-yellow-500">
        Cadastre seu pacote
      </h1>
      <form className="flex flex-col items-center justify-center gap-12 mt-14 w-full">
        {/* Campo Pacote */}
        <label className="w-[80%] flex gap-5 items-center justify-center">
          <span className="text-2xl text-yellow-500 font-bold">Pacote :</span>
          <input
            type="text"
            className="w-[50%] h-11 rounded p-2"
            placeholder="Digite o nome do pacote"
          />
        </label>

        {/* Campo Destino */}
        <label className="w-[80%] flex gap-5 items-center justify-center">
          <span className="text-2xl text-yellow-500 font-bold">Destino :</span>
          <input
            type="text"
            className="w-[50%] h-11 rounded p-2"
            placeholder="Digite o destino"
          />
        </label>

        {/* Campo Valor */}
        <label className="w-[80%] flex gap-5 items-center justify-center">
          <span className="text-2xl text-yellow-500 font-bold">Valor :</span>
          <input
            type="number"
            className="w-[50%] h-11 rounded p-2"
            placeholder="Digite o valor"
          />
        </label>

        {/* Campo Imagem */}
        <label className="w-[80%] flex gap-5 items-center justify-center">
          <span className="text-2xl text-yellow-500 font-bold">Imagem:</span>
          <input
            type="file"
            className="w-[50%] h-11 rounded p-2"
            placeholder="Envie a imagem"
          />
        </label>

        {/* Radio Buttons */}
        <div className="flex gap-5 items-center mt-6">
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="tipo"
              value="internacional"
              checked={selectedOption === "internacional"}
              onChange={handleChange}
              className="w-5 h-5 rounded-full"
            />
            <span className="text-lg">Internacional</span>
          </label>

          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="tipo"
              value="nacional"
              checked={selectedOption === "nacional"}
              onChange={handleChange}
              className="w-5 h-5 rounded-full"
            />
            <span className="text-lg">Nacional</span>
          </label>
        </div>

        {/* Exibição da opção selecionada */}
        <div className="mt-4">
          <p>
            Opção selecionada: {selectedOption ? selectedOption : "Nenhuma"}
          </p>
        </div>

        {/* Botão */}
        <Button className="rounded-full bg-green-700 px-10 py-2 text-white flex mt-8">
          Enviar
        </Button>
      </form>
    </div>
  );
}

export default CadastroPacote;
