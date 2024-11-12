import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from "./Card";

function Internacionais() {
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

  // Dados dos cartões
  const cardData = [
    {
      title: "Rio",
      subtitle: "Rio de Janeiro",
      price: "R$ 2.500,00",
      img: "../public/rio.jpeg",
    },
    {
      title: "Rio",
      subtitle: "Rio de Janeiro",
      price: "R$ 2.500,00",
      img: "../public/rio.jpeg",
    },
    {
      title: "Rio",
      subtitle: "Rio de Janeiro",
      price: "R$ 2.500,00",
      img: "../public/rio.jpeg",
    },
    {
      title: "Rio",
      subtitle: "Rio de Janeiro",
      price: "R$ 2.500,00",
      img: "../public/rio.jpeg",
    },
    {
      title: "Rio",
      subtitle: "Rio de Janeiro",
      price: "R$ 2.500,00",
      img: "../public/rio.jpeg",
    },
    {
      title: "Rio",
      subtitle: "Rio de Janeiro",
      price: "R$ 2.500,00",
      img: "../public/rio.jpeg",
    },
    {
      title: "Rio",
      subtitle: "Rio de Janeiro",
      price: "R$ 2.500,00",
      img: "../public/rio.jpeg",
    },
    {
      title: "Rio",
      subtitle: "Rio de Janeiro",
      price: "R$ 2.500,00",
      img: "../public/rio.jpeg",
    },
    {
      title: "Rio",
      subtitle: "Rio de Janeiro",
      price: "R$ 2.500,00",
      img: "../public/rio.jpeg",
    },
  ];

  return (
    <div className="lg:mt-[600px] xl:-mt-8 md:mt-[600px] sm:mt-[690px] xs:-mt-[10000px]  w-full">
      <div className="grid place-items-center">
        <h1 className="text-4xl font-bold ">Destinos Internacionais</h1>
        <p className="text-center mt-4 w-[50%]">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta, amet
          vel. Doloremque maiores voluptatem consequatur enim suscipit dolor,
          quasi fugiat id corporis, in, commodi ad tempora sapiente! Nostrum,
          blanditiis! Sint!
        </p>
      </div>
      <div className="mt-16">
        <Slider {...settings}>
          {cardData.map((card, index) => (
            <Card
              key={index}
              title={card.title}
              subtitle={card.subtitle}
              price={card.price}
              img={card.img}
            />
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Internacionais;
