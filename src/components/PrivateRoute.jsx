import { useAuth } from "../contexts/AuthContext";
import { Navigate } from "react-router-dom";

function PrivateRoute({ children }) {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />; // Redireciona para a página de login se não estiver autenticado
  }

  return children; // Caso contrário, renderiza os componentes filhos
}

export default PrivateRoute;
