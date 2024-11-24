import { useState } from "react";
import Button from "./Button";
import { supabase } from "./Client";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./AuthContext"; // Importando o contexto

function FormLogin() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const { authUser, setAuthUser, isLoggedIn, setIsLoggedIn } = useAuth();

  function handleChange(e) {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [e.target.name]: e.target.value,
      };
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const { user, error } = await supabase.auth.signInWithPassword({
        email: formData.email,
        password: formData.password,
      });

      if (error) throw error; // Se houver erro, lança a exceção

      // Se o login for bem-sucedido, atualiza o estado de autenticação

      setIsLoggedIn(true);
      setAuthUser({
        name: formData.email,
      });
      navigate("/tabelaPacotes"); // Redireciona para a página de pacotes após o login
    } catch (error) {
      alert(error.message); // Exibe o erro se ocorrer
    }
  }

  return (
    <div className="w-[90%] mx-auto my-0  mt-20 bg-green-800 pb-12  rounded flex flex-col">
      <h1 className="text-center mt-3 text-3xl font-bold text-yellow-500">
        Login!
      </h1>
      <form
        className="flex flex-col items-center justify-center gap-12 mt-14 w-full"
        onSubmit={handleSubmit}
      >
        <label className="w-[80%] flex  gap-5 items-center justify-center">
          <span className="text-2xl text-yellow-500 font-bold ">e-mail:</span>
          <input
            type="text"
            className="w-[50%] h-11 rounded p-2"
            placeholder="Digite seu email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </label>
        <label className="w-[80%] flex  gap-5 items-center justify-center">
          <span className="text-2xl text-yellow-500 font-bold ">senha</span>
          <input
            type="password"
            className="w-[50%] h-11 rounded p-2"
            placeholder="Digite sua senha"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </label>
        <Button
          type="submit"
          className="rounded-full bg-green-700  px-10 py-2 text-white flex"
        >
          Entrar
        </Button>
      </form>
    </div>
  );
}

export default FormLogin;
