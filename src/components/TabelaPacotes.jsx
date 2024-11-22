import { useState, useEffect } from "react";
import Button from "./Button";
import { getCardData } from "../utils/bancoPacotes";
import { deleteData } from "../utils/bancoPacotes";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function TabelaPacotes() {
  const [pacotesNacionais, setPacotesNacionais] = useState([]);
  const [pacotesInternacionais, setPacotesInternacionais] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getCardData("false", setPacotesNacionais);
    getCardData("true", setPacotesInternacionais);
  }, []);

  console.log("Nacionais:", pacotesNacionais);
  console.log("Internacionais:", pacotesInternacionais);

  function handleDelete(id) {
    deleteData(id);
    navigate("/tabelaPacotes");
  }

  return (
    <>
      {/* Tabela de Pacotes Nacionais */}
      <h1 className="mt-24 flex items-center justify-center">
        Pacotes Nacionais
        <Link
          to="/cadastroPacote"
          className="text-blue-500 underline ml-8 mt-2 flex items-center justify-center"
        >
          novo pacote
        </Link>
      </h1>
      <table className="mt-7 w-[80%] mx-auto border-collapse border border-slate-400">
        <thead className="bg-slate-500 text-slate-100 font-bold">
          <tr>
            <th className="border border-slate-400 p-2">Imagem</th>
            <th className="border border-slate-400 p-2">Pacote</th>
            <th className="border border-slate-400 p-2">Destino</th>
            <th className="border border-slate-400 p-2">Valor</th>
            <th className="border border-slate-400 p-2">Ação</th>
          </tr>
        </thead>
        <tbody>
          {pacotesNacionais.length === 0 ? (
            <tr>
              <td colSpan={5} className="text-center">
                Não existem pacotes cadastrados.
                <Link
                  to="/cadastroPacote"
                  className="text-blue-500 underline ml-8"
                >
                  Cadastre um novo pacote
                </Link>
              </td>
            </tr>
          ) : (
            pacotesNacionais.map((pacote, index) => (
              <tr key={index}>
                <td className="border border-slate-400 p-2">
                  <img
                    src={pacote.imagen}
                    alt={pacote.Destino}
                    className="w-16 h-16 object-cover"
                  />
                </td>
                <td className="border border-slate-400 p-2">{pacote.Pacote}</td>
                <td className="border border-slate-400 p-2">
                  {pacote.Destino}
                </td>
                <td className="border border-slate-400 p-2">
                  R$ {pacote.Valor}
                </td>
                <td className="border border-slate-400 p-2">
                  <Button onClick={() => handleDelete(pacote.id)}>
                    Excluir
                  </Button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>

      {/* Tabela de Pacotes Internacionais */}
      <h1 className="flex mt-5 items-center justify-center">
        Pacotes Internacionais
        <Link
          to="/cadastroPacote"
          className="text-blue-500 underline ml-8 mt-2 flex items-center justify-center"
        >
          novo pacote
        </Link>
      </h1>

      <table className="mt-7 w-[80%] mx-auto border-collapse border border-slate-400">
        <thead className="bg-slate-500 text-slate-100 font-bold">
          <tr>
            <th className="border border-slate-400 p-2">Imagem</th>
            <th className="border border-slate-400 p-2">Pacote</th>
            <th className="border border-slate-400 p-2">Destino</th>
            <th className="border border-slate-400 p-2">Valor</th>
            <th className="border border-slate-400 p-2">Ação</th>
          </tr>
        </thead>
        <tbody>
          {pacotesInternacionais.map((pacote, index) => (
            <tr key={index}>
              <td className="border border-slate-400 p-2">
                <img
                  src={pacote.imagen} // Supondo que a propriedade seja "imagen"
                  alt={pacote.Destino}
                  className="w-16 h-16 object-cover"
                />
              </td>
              <td className="border border-slate-400 p-2">{pacote.Pacote}</td>
              <td className="border border-slate-400 p-2">{pacote.Destino}</td>
              <td className="border border-slate-400 p-2">R$ {pacote.Valor}</td>
              <td className="border border-slate-400 p-2">
                <Button onClick={() => deleteData(pacote.id)}>Excluir</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default TabelaPacotes;
