import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";
import FormLogin from "./components/FormLogin";
import CadastroPacote from "./components/CadastroPacote";
import TabelaPacotes from "./components/TabelaPacotes";
import { AuthProvider } from "./components/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute"; // Importando o componente de rota protegida
import ExternalPage from "./components/ExternalPage"; // Certifique-se de importar o componente

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="login" element={<FormLogin />} />

            {/* Rotas protegidas */}
            <Route
              path="cadastroPacote"
              element={
                <ProtectedRoute>
                  <CadastroPacote />
                </ProtectedRoute>
              }
            />
            <Route
              path="tabelaPacotes"
              element={
                <ProtectedRoute>
                  <TabelaPacotes />
                </ProtectedRoute>
              }
            />

            {/* Nova rota para página externa */}
            <Route
              path="vlkturismo"
              element={
                <ExternalPage url="https://www.comprarviagem.com.br/vlkturismo" />
              }
            />
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
