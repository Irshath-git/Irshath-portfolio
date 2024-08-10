import { motion } from "framer-motion";
import { styles } from "../styles";
import Computers from "./canvas/Computers";
import { BsLinkedin } from "react-icons/bs";

const Hero = () => {
  return (
    <section className="relative  w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5 `}
      >
        <div className="flex flex-col justify-center items-center mt-5 ">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>
        <div className="">
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi,I'm <span className="text-[#915eff]">Irshath</span>{" "}
          </h1>

          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I like to craft solid and scalable, User{" "}
            <br className="sm:block hidden" />
            Interfaces and Full Stack Web Applications.
            <span className="text-blue-500">Let's Connect in</span>
            <a href="https://in.linkedin.com/in/Irshath-S">
              <BsLinkedin
                size={30}
                round
                className=" text-blue-500 mr-5"
                id="link"
              ></BsLinkedin>
            </a>
          </p>
        </div>
      </div>

      <Computers />

      <div className="absolute xs:bottom-10 bottom-0  lg:visible w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] md:mt-0  rounded-3xl border-4 border-white justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-white mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
