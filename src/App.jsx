/*Embla Caarousel */

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";
import FormLogin from "./components/FormLogin";

function App() {
  return (
    <>
      {/* <Home />
     

      
      <Nacionais />
      <Depoimentos />
      <Footer />
      <Whats /> */}

      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="login" element={<FormLogin />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
