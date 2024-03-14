import Image from "next/image";
import { useRef, useState, useEffect } from "react";

const Home = () => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => setIsVisible(entry.isIntersecting));
    });

    observer.observe(ref.current);

    // Nettoyage de l'observer
    return () => observer.disconnect();
  }, []);
  return (
    <section
      id="home"
      ref={ref}
      className={`grid lg:grid-cols-2 grid-cols-1 h-screen gap-20 transition-all duration-500 transform ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
      }`}
    >
      <div className="hidden lg:flex  items-center justify-center flex-col">
        <Image
          src={"/img/photo CV.jpg"}
          width={420}
          height={420}
          alt="me"
          className="rounded-3xl lg:ml-20 lg-0 mr-0 md:mx-0 mx-10 md:m-0 m-6"
        />
      </div>
      <div className="lg:mr-40 flex items-center justify-center flex-col 3xl:mr-80 lg:mx-0 mx-20">
        <h1 className="text-7xl lg:text-left text-center w-full">
          Hi, I'm <br />
          ENEME BILO'O Yann Blondel
        </h1>
        <h5 className="lg:text-left text-center">
         Apprenti ingénieur en réseau et sécurité recherche une alternance sur 3 ans (Septembre 2024 - Aout 2027)
        </h5>

        {/* https://uiverse.io/emmanuelh-dev/nervous-starfish-19 */}
        <div className="w-full mt-8 rounded-lg bg-gray-100 relative border-2 p-1">
          <div className="flex p-2 gap-1 items-center">
            <div className="">
              <span className="bg-red-500 inline-block center w-3 h-3 rounded-full"></span>
            </div>
            <div className="circle">
              <span className="bg-gray-500 inline-block center w-3 h-3 rounded-full"></span>
            </div>
            <div className="circle">
              <span className="bg-green-600 box inline-block center w-3 h-3 rounded-full"></span>
            </div>
            <div>
              <p className="text-sm">{">"} /lang/languages.tsx</p>
            </div>
          </div>

          <div className="card__content px-4 p-4 flex flex-row gap-2 flex-wrap">
            <div className="bg-red-200 rounded-2xl px-3 flex items-center justify-center">
              Java
            </div>
            <div className="bg-orange-200 rounded-2xl px-3 flex items-center justify-center">
              Python
            </div>
            <div className="bg-green-200 rounded-2xl px-3 flex items-center justify-center">
              C
            </div>
            <div className="bg-purple-200 rounded-2xl px-3 flex items-center justify-center">
              VHDL
            </div>
             <div className="bg-pink-200 rounded-2xl px-3 flex items-center justify-center">
              ARM Assembler
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
