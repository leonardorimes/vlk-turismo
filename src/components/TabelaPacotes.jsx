import { useState, useEffect } from "react";
import Button from "./Button";
import { getCardData, deleteData } from "../utils/bancoPacotes";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "./AuthContext";

function TabelaPacotes() {
  const [pacotesNacionais, setPacotesNacionais] = useState([]);
  const [pacotesInternacionais, setPacotesInternacionais] = useState([]);
  const navigate = useNavigate();
  const { isLoggedIn, logout } = useAuth();

  useEffect(() => {
    getCardData("false", setPacotesNacionais);
    getCardData("true", setPacotesInternacionais);
  }, []);

  const handleDelete = (id) => {
    deleteData(id);
    // Atualize os pacotes removendo o item deletado
    setPacotesNacionais((prev) => prev.filter((pacote) => pacote.id !== id));
    setPacotesInternacionais((prev) =>
      prev.filter((pacote) => pacote.id !== id)
    );
    navigate("/tabelaPacotes");
  };

  if (!isLoggedIn) {
    return <div>Por favor, logue no sistema para acessar os pacotes.</div>;
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
          Novo Pacote
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
            pacotesNacionais.map((pacote) => (
              <tr key={pacote.id}>
                <td className="border border-slate-400 p-2">
                  <img
                    src={pacote.imagen || pacote.imagem}
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
          Novo Pacote
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
          {pacotesInternacionais.length === 0 ? (
            <tr>
              <td colSpan={5} className="text-center">
                Não existem pacotes cadastrados.
              </td>
            </tr>
          ) : (
            pacotesInternacionais.map((pacote) => (
              <tr key={pacote.id}>
                <td className="border border-slate-400 p-2">
                  <img
                    src={pacote.imagen || pacote.imagem}
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
      <button className="absolute top-12 right-12" onClick={() => logout()}>
        {" "}
        Sair
      </button>
    </>
  );
}

export default TabelaPacotes;
