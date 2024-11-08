import Card from "./components/Card";
import Home from "./components/Home";
import Secao2 from "./components/Secao2";

/*Embla Caarousel */

function App() {
  return (
    <>
      <Home />
      <Secao2 />

      <Card
        title="Rio"
        subtitle="Rio de Janeiro"
        price="R$ 2.500,00"
        img="../public/rio.jpeg"
      />
    </>
  );
}

export default App;
