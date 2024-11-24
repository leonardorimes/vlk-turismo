import { createContext, useContext, useEffect, useState } from "react";
import { supabase } from "../components/Client"; // Certifique-se de importar o cliente Supabase corretamente

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [authUser, setAuthUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Função para verificar sessão ativa
  async function checkSession() {
    const { data: session, error } = await supabase.auth.getSession();

    if (error) {
      console.error("Erro ao verificar sessão:", error.message);
      return;
    }

    if (session) {
      console.log("Sessão ativa:", session);
      setAuthUser(session.user); // Configura o usuário autenticado
      setIsLoggedIn(true);
    } else {
      console.log("Nenhuma sessão ativa.");
      setAuthUser(null);
      setIsLoggedIn(false);
    }
  }

  // Verifica sessão ao carregar o componente
  useEffect(() => {
    checkSession();
  }, []);

  const value = {
    authUser,
    isLoggedIn,
    checkSession,
    setAuthUser,
    setIsLoggedIn,
    logout: async () => {
      const { error } = await supabase.auth.signOut();
      if (error) {
        console.error("Erro ao deslogar:", error.message);
      } else {
        setAuthUser(null);
        setIsLoggedIn(false);
        console.log("Deslogado com sucesso");
      }
    },
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
