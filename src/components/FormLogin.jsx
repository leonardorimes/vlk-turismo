import { useState } from "react";
import Button from "./Button";
import { supabase } from "./Client";
import { useNavigate } from "react-router-dom";

function FormLogin() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  console.log(formData);
  const navigate = useNavigate();

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
      const { error } = await supabase.auth.signInWithPassword({
        email: formData.email,
        password: formData.password,
      });
      if (error) throw error;
    } catch (error) {
      alert(error);
    }
    navigate("/tabelaPacotes");
  }

  return (
    <div className="w-[90%] mx-auto my-0  mt-20 bg-green-800 pb-12  rounded flex flex-col">
      <h1 className="text-center mt-3 text-3xl font-bold text-yellow-500">
        {" "}
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
