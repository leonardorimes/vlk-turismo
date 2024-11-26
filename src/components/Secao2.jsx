import CardBeneficiosVlk from "./CardBeneficiosVlk";

function Secao2() {
  return (
    <div
      className="bg-[url('/public/IMG-SECTION.png')] bg-no-repeat bg-cover bg-center h-screen w-screen mt-40"
      id="secao2"
    >
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
        <div className="flex flex-col sm:flex-col md:flex-col xl:flex-row mt-14 gap-20">
          <CardBeneficiosVlk
            img="/public/destinos.png"
            title="Multiplos Destinos"
            text=" Descubra o mundo de uma forma única e personalizada! Com nossos pacotes de múltiplos destinos, você pode explorar várias cidades ou países em uma única viagem, aproveitando ao máximo cada momento. Planejamos cada detalhe para que sua experiência seja incrível, conectando culturas, sabores e paisagens inesquecíveis. Sua aventura começa aqui!"
          />

          <CardBeneficiosVlk
            img="/public/user.png"
            title="+ de 5.000 viajantes "
            text="Já realizamos o sonho de milhares de pessoas que desejavam explorar o mundo! Com mais de 5.000 clientes atendidos, oferecemos experiências únicas e planejamos cada detalhe da sua viagem para que ela seja inesquecível. Confie na nossa expertise e comece a planejar sua próxima aventura hoje mesmo! ✈️"
          />

          <CardBeneficiosVlk
            img="/public/confianca.png"
            title="Certificada"
            text="Viaje com total confiança! garantimos segurança, qualidade e transparência em todos os serviços. Com anos de experiência e reconhecimento no mercado, estamos prontos para oferecer as melhores soluções e tornar sua viagem inesquecível"
          />
        </div>
      </div>
    </div>
  );
}

export default Secao2;
