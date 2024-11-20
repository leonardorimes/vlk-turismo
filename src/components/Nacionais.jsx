import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from "./Card";
import { useEffect, useState } from "react";

import { getCardData } from "../utils/bancoPacotes";

function Nacionais() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 200,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: false,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          initialSlide: 1,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
          dots: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
          dots: false,
        },
      },
    ],
  };

  const [cardData, setCardData] = useState([]);

  useEffect(() => {
    getCardData("false", setCardData);
  }, []);

  // Dados dos cartões
  // const cardData = [
  //   {
  //     title: "Rio",
  //     subtitle: "Rio de Janeiro",
  //     price: "R$ 2.500,00",
  //     img: "../public/rio.jpeg",
  //   },
  //   {
  //     title: "Rio",
  //     subtitle: "Rio de Janeiro",
  //     price: "R$ 2.500,00",
  //     img: "../public/rio.jpeg",
  //   },
  //   {
  //     title: "Rio",
  //     subtitle: "Rio de Janeiro",
  //     price: "R$ 2.500,00",
  //     img: "../public/rio.jpeg",
  //   },
  //   {
  //     title: "Rio",
  //     subtitle: "Rio de Janeiro",
  //     price: "R$ 2.500,00",
  //     img: "../public/rio.jpeg",
  //   },
  //   {
  //     title: "Rio",
  //     subtitle: "Rio de Janeiro",
  //     price: "R$ 2.500,00",
  //     img: "../public/rio.jpeg",
  //   },
  //   {
  //     title: "Rio",
  //     subtitle: "Rio de Janeiro",
  //     price: "R$ 2.500,00",
  //     img: "../public/rio.jpeg",
  //   },
  //   {
  //     title: "Rio",
  //     subtitle: "Rio de Janeiro",
  //     price: "R$ 2.500,00",
  //     img: "../public/rio.jpeg",
  //   },
  //   {
  //     title: "Rio",
  //     subtitle: "Rio de Janeiro",
  //     price: "R$ 2.500,00",
  //     img: "../public/rio.jpeg",
  //   },
  // ];

  return (
    <div className="mt-20">
      <div className="grid place-items-center">
        <h1 className="text-4xl font-bold"> Destinos Nacionais</h1>
        <p className="text-center mt-4 w-[50%]">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta, amet
          vel. Doloremque maiores voluptatem consequatur enim suscipit dolor,
          quasi fugiat id corporis, in, commodi ad tempora sapiente! Nostrum,
          blanditiis! Sint!
        </p>
      </div>
      <div className="mt-16 ">
        <Slider {...settings}>
          {cardData.map((card, index) => (
            <Card
              key={index}
              title={card.Pacote}
              subtitle={card.Destino}
              price={card.Valor}
              img={card.imagem}
            />
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Nacionais;
