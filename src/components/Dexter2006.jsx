import React from "react";
import { Link } from "react-router-dom";
import "swiper/css";
import logo from "../assets/logodex.png";
import michael from "../assets/michaelchall.jpg";
import jennifer from "../assets/jennifer.jpg";
import James from "../assets/James Remar.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import Noticias1 from "../data/Dexter 2006/Noticias1"; 

const Dexter2006 = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col">
      <nav className="bg-gradient-to-r from-red-600 via-red-700 to-red-800 p-6 shadow-lg">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0 w-32">
            <img src={logo} alt="Logotipo Dexter" className="w-full h-auto" />
          </div>
          <div className="lg:flex justify-center items-center hidden w-full">
            <ul className="flex space-x-8">
              <li>
                <Link
                  to="/dexter2006"
                  className="text-lg hover:text-red-400 transition duration-300"
                >
                  Dexter (2006)
                </Link>
              </li>
              <li>
                <Link
                  to="/newblood"
                  className="text-lg hover:text-red-400 transition duration-300"
                >
                  Dexter: New Blood
                </Link>
              </li>
              <li>
                <Link
                  to="/originalsin"
                  className="text-lg hover:text-red-400 transition duration-300"
                >
                  Dexter: Original Sin
                </Link>
              </li>
              <li>
                <Link
                  to="/resurrection"
                  className="text-lg hover:text-red-400 transition duration-300"
                >
                  Dexter: Resurrection
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Conteúdo Principal */}
      <div className="p-8 lg:p-16">
        {/* Últimas Notícias */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-md mb-12 max-w-full mx-auto">
          {/* Exibindo as notícias importadas */}
          <Noticias1 />
        </section>

        {/* Elenco */}
        <section className="mt-16">
          <h1 className="text-4xl font-bold mb-12 text-center">Elenco Principal</h1>
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={20}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            <SwiperSlide>
              <div className="flex flex-col items-center group">
                <div className="w-56 h-56 rounded-full overflow-hidden shadow-xl transition-transform duration-300 ease-in-out group-hover:scale-105 bg-gray-800 flex items-center justify-center">
                  <img
                    src={michael}
                    alt="Michael C. Hall"
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-xl font-semibold text-center mt-4 group-hover:text-red-400 transition-colors duration-300">
                  Michael C. Hall
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex flex-col items-center group">
                <div className="w-56 h-56 rounded-full overflow-hidden shadow-xl transition-transform duration-300 ease-in-out group-hover:scale-105 bg-gray-800 flex items-center justify-center">
                  <img
                    src={jennifer}
                    alt="Jennifer Carpenter"
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-xl font-semibold text-center mt-4 group-hover:text-red-400 transition-colors duration-300">
                  Jennifer Carpenter
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex flex-col items-center group">
                <div className="w-56 h-56 rounded-full overflow-hidden shadow-xl transition-transform duration-300 ease-in-out group-hover:scale-105 bg-gray-800 flex items-center justify-center">
                  <img
                    src={James}
                    alt="James Remar"
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-xl font-semibold text-center mt-4 group-hover:text-red-400 transition-colors duration-300">
                  James Remar
                </p>
              </div>
            </SwiperSlide>
          </Swiper>
        </section>
      </div>
    </div>
  );
};

export default Dexter2006;