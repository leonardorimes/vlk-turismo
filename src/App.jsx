/*Embla Caarousel */

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";
import FormLogin from "./components/FormLogin";
import CadastroPacote from "./components/CadastroPacote";
import TabelaPacotes from "./components/TabelaPacotes";
import { AuthProvider } from "./components/AuthContext";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="login" element={<FormLogin />} />

            <Route path="cadastroPacote" element={<CadastroPacote />} />
            <Route path="tabelaPacotes" element={<TabelaPacotes />} />
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
