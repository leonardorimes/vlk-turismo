import Button from "./Button";

function TabelaPacotes() {
  return (
    <>
      <h1 className="mt-24 flex items-center justify-center">
        Pacotes Nacionais
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

        {/* Corpo da Tabela */}
        <tbody>
          {/* Linha 1 */}
          <tr>
            <td className="border border-slate-400 p-2">
              <img
                src="public/rio.jpeg"
                alt="Rio de Janeiro"
                className="w-16 h-16 object-cover"
              />
            </td>
            <td className="border border-slate-400 p-2">Pacote A</td>
            <td className="border border-slate-400 p-2">Rio de Janeiro</td>
            <td className="border border-slate-400 p-2">R$ 1.500,00</td>
            <td>
              <Button>excluir</Button>
            </td>
          </tr>
          <tr>
            <td className="border border-slate-400 p-2">
              <img
                src="public/rio.jpeg"
                alt="Rio de Janeiro"
                className="w-16 h-16 object-cover"
              />
            </td>
            <td className="border border-slate-400 p-2">Pacote A</td>
            <td className="border border-slate-400 p-2">Rio de Janeiro</td>
            <td className="border border-slate-400 p-2">R$ 1.500,00</td>
            <td className="border border-slate-400 p-2">
              <Button>excluir</Button>
            </td>
          </tr>
        </tbody>
      </table>

      <h1 className="flex mt-5 items-center justify-center">
        Pacotes Internacionais
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

        {/* Corpo da Tabela */}
        <tbody>
          {/* Linha 1 */}
          <tr>
            <td className="border border-slate-400 p-2">
              <img
                src="public/rio.jpeg"
                alt="Rio de Janeiro"
                className="w-16 h-16 object-cover"
              />
            </td>
            <td className="border border-slate-400 p-2">Pacote A</td>
            <td className="border border-slate-400 p-2">Rio de Janeiro</td>
            <td className="border border-slate-400 p-2">R$ 1.500,00</td>
            <td>
              <Button>excluir</Button>
            </td>
          </tr>
          <tr>
            <td className="border border-slate-400 p-2">
              <img
                src="public/rio.jpeg"
                alt="Rio de Janeiro"
                className="w-16 h-16 object-cover"
              />
            </td>
            <td className="border border-slate-400 p-2">Pacote A</td>
            <td className="border border-slate-400 p-2">Rio de Janeiro</td>
            <td className="border border-slate-400 p-2">R$ 1.500,00</td>
            <td className="border border-slate-400 p-2">
              <Button>excluir</Button>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default TabelaPacotes;
