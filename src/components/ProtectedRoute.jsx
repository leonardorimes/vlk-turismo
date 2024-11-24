import { Navigate } from "react-router-dom";
import { useAuth } from "./AuthContext";

function ProtectedRoute({ children }) {
  const { isLoggedIn } = useAuth();

  // Se o usuário não estiver logado, redirecione para a página de login
  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  }

  // Caso esteja logado, renderize os componentes filhos
  return children;
}

export default ProtectedRoute;
