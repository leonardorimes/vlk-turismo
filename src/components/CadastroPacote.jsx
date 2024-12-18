import { useState } from "react";
import Button from "./Button";
import { insertCardData } from "../utils/bancoPacotes";
import { useNavigate } from "react-router-dom"; // Certifique-se de importar o useNavigate
import { useAuth } from "./AuthContext";
import BtnLogout from "./BtnLogout";

function CadastroPacote() {
  const [formData, setFormData] = useState({
    pacote: "",
    destino: null,
    valor: null,
    imagem: null,
    internacional: false,
  });

  const navigate = useNavigate(); // Inicializa o navigate
  const { logout } = useAuth();

  const handleChange = (event) => {
    const { name, value, type, checked, files } = event.target;

    if (type === "checkbox") {
      setFormData((prevData) => ({
        ...prevData,
        [name]: checked,
      }));
    } else if (type === "file") {
      setFormData((prevData) => ({
        ...prevData,
        [name]: files[0],
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);

    // Aguarde o retorno da função de inserção
    await insertCardData(formData);

    // Redireciona para a página após a inserção
    console.log("Redirecionando para /tabelaPacotes...");
    navigate("/tabelaPacotes"); // Realiza o redirecionamento
  };

  return (
    <div className="w-[90%] mx-auto my-0 mt-20 bg-green-800 pb-12 rounded flex flex-col">
      <h1 className="text-center mt-3 text-3xl font-bold text-yellow-500">
        Cadastre seu pacote
      </h1>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center justify-center gap-12 mt-14 w-full"
      >
        <label className="w-[80%] flex gap-5 items-center justify-center">
          <span className="text-2xl text-yellow-500 font-bold">Pacote :</span>
          <input
            type="text"
            name="pacote"
            className="w-[50%] h-11 rounded p-2"
            placeholder="Digite o nome do pacote"
            value={formData.pacote}
            onChange={handleChange}
          />
        </label>

        {/* <label className="w-[80%] flex gap-5 items-center justify-center">
          <span className="text-2xl text-yellow-500 font-bold">Destino :</span>
          <input
            type="text"
            name="destino"
            className="w-[50%] h-11 rounded p-2"
            placeholder="Digite o destino"
            value={formData.destino}
            onChange={handleChange}
          />
        </label>

        <label className="w-[80%] flex gap-5 items-center justify-center xs:w-full">
          <span className="text-2xl text-yellow-500 font-bold">Valor :</span>
          <input
            type="number"
            name="valor"
            className="w-[50%] h-11 rounded p-2"
            placeholder="Digite o valor"
            value={formData.valor}
            onChange={handleChange}
          />
        </label> */}

        <label className="w-[80%] flex gap-5 items-center justify-center">
          <span className="text-2xl text-yellow-500 font-bold">Imagem:</span>
          <input
            type="file"
            name="imagem"
            className="w-[50%] h-11 rounded p-2"
            onChange={handleChange}
          />
        </label>

        <div className="flex items-center gap-3 mt-6">
          <input
            type="checkbox"
            name="internacional"
            checked={formData.internacional}
            onChange={handleChange}
            className="w-5 h-5 rounded"
          />
          <span className="text-lg">Marque se for Internacional</span>
        </div>

        <div className="mt-4">
          <p>Tipo: {formData.internacional ? "Internacional" : "Nacional"}</p>
        </div>

        <Button className="rounded-full bg-green-700 px-10 py-2 text-white flex mt-8">
          Enviar
        </Button>
      </form>
      <BtnLogout sair={logout}>Sair</BtnLogout>
    </div>
  );
}

export default CadastroPacote;
