import Image from "next/image";
import Link from "next/link";

const Contact = () => {
  return (
    <section id="contact" className="relative bubble">
      <div className="absolute bottom-0 z-[-2] h-screen w-screen rotate-180 transform bg-white bg-[radial-gradient(60%_120%_at_50%_50%,hsla(0,0%,100%,0)_0,hsl(0,0%,85%)_100%)]"></div>
      <div className="absolute bottom-0 z-[-2] h-screen w-screen">
        <img
          src={"/img/wave-bg.svg"}
          alt="background"
          className="background-cover w-full h-full object-cover"
        />
      </div>
      <div
        className={`flex flex-col justify-evenly min-h-screen transition-all duration-500 gap-2 transform py-20 px-24 w-full `}
      >
        <div className="flex flex-col">
          <div>
            <h1 className="text-7xl text-left w-full">Contact</h1>
          </div>
          <div>
            <span className="lg:text-left text-center w-full">
              Contactez moi pour tout projet ou collaboration. Je suis disponible pour une alternance en réseau et sécurité
            </span>
          </div>
        </div>

        <div className="grid sm:grid-cols-3 grid-cols-1 gap-6 items-center w-full ">
          <div className="flex flex-col">
            <h2 className="text-4xl text-left w-full">Email</h2>
            <span>yannblondel.enemebiloo@edu.esiee.fr</span>
          </div>
          <div className="flex flex-col">
            <h2 className="text-4xl text-left w-full">Mobile</h2>
            <span>+33 6 41 49 47 94</span>
          </div>
          <div className="flex flex-col">
            <h2 className="text-4xl text-left w-full">Links</h2>
            <div className="flex gap-4">
              <Link href={"https://github.com/RandomStranger0"}>
                <Image
                  src={"/img/github-mark.svg"}
                  width={30}
                  height={30}
                  alt="github logo"
                />
              </Link>
              <Link href={"https://www.linkedin.com/in/yann-blondel-eneme-biloo?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BGiGH1VizSjOHd%2FApQIviUw%3D%3D"}>
                <Image
                  src={"/img/linkedin.svg"}
                  width={30}
                  height={30}
                  alt="github logo"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 flex w-full justify-center items-center h-20">
        <p>© 2024 - All rights reserved </p>
      </div>
    </section>
  );
};

export default Contact;
