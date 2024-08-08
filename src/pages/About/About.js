import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";
import { nashiRaboti } from "../../constants/index";
import Image from "../../components/designLayouts/Image";

const About = () => {
  const location = useLocation();
  const [prevLocation, setPrevLocation] = useState("");
  useEffect(() => {
    setPrevLocation(location.state.data);
  }, [location]);
  console.log(nashiRaboti);

  return (
    <div className="flex items-center flex-col max-w-container mx-auto px-4">
      <Breadcrumbs
        className="text-center"
        title="Наши работы"
        // prevLocation={prevLocation}
      />

      <div className="my-16 max-w-[1200px] flex justify-center flex-wrap">
        {nashiRaboti.map((item, index) => (
          <Image
            key={index}
            className="w-96 h-64 p-3 object-cover transition-all hover:scale-105"
            imgSrc={item.imgUrl}
          />
        ))}
      </div>
      {/* <div className="pb-10">
        <h1 className="max-w-[600px] text-base text-lightText mb-2">
          <span className="text-primeColor font-semibold text-lg">Orebi</span>{" "}
          is one of the world's leading ecommerce brands and is internationally
          recognized for celebrating the essence of classic Worldwide cool
          looking style.
        </h1>
        <Link to="/shop">
          <button className="w-52 h-10 bg-primeColor text-white hover:bg-black duration-300">
            Continue Shopping
          </button>
        </Link>
      </div> */}
    </div>
  );
};

export default About;
