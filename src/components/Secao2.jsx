import CardBeneficiosVlk from "./CardBeneficiosVlk";

function Secao2() {
  return (
    <div className="bg-[url('/public/IMG-SECTION.png')] bg-no-repeat bg-cover bg-center h-screen w-screen mt-40">
      <div className=" w-[80%] mx-auto my-0">
        <div className="grid place-items-center w-full">
          <h1 className="font-bold text-4xl">Porque escolher a VLK?</h1>

          <p className="text-center mt-4 w-[80%]">
            A VLK é mais do que uma agência de turismo; somos especialistas em
            transformar viagens em experiências únicas e personalizadas. Com um
            compromisso inabalável com a qualidade, oferecemos roteiros
            cuidadosamente planejados para atender aos interesses específicos de
            cada cliente. Seja explorando destinos exóticos, imersões culturais
            ou aventuras emocionantes, cada detalhe é pensado para garantir uma
            viagem tranquila e memorável. Escolher a VLK é optar por um
            atendimento especializado, segurança e uma experiência
            transformadora, onde você pode descobrir o mundo de maneira
            autêntica e sem preocupações.
          </p>
        </div>
        <div className=" flex mt-14 gap-20">
          <CardBeneficiosVlk
            img="/public/destinos.png"
            title="Multiplos Destinos"
            text="            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, inventore accusantium. Perspiciatis nisi beatae at error magnam tenetur aperiam consectetur necessitatibus exercitationem, recusandae quos repellat atque asperiores voluptatum temporibus vel!"
          />

          <CardBeneficiosVlk
            img="/public/user.png"
            title="+ de 5.000 clientes"
            text="            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, inventore accusantium. Perspiciatis nisi beatae at error magnam tenetur aperiam consectetur necessitatibus exercitationem, recusandae quos repellat atque asperiores voluptatum temporibus vel!"
          />

          <CardBeneficiosVlk
            img="/public/confianca.png"
            title="Certificada"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, inventore accusantium. Perspiciatis nisi beatae at error magnam tenetur aperiam consectetur necessitatibus exercitationem, recusandae quos repellat atque asperiores voluptatum temporibus vel!"
          />
        </div>
      </div>
    </div>
  );
}

export default Secao2;
