"use client"

import { motion } from 'framer-motion';
import Image from "next/image";
import Link from 'next/link';
import { Button } from "@nextui-org/button";
import { useTypewriter, Cursor } from 'react-simple-typewriter';

const HeroSection = () => {
  const [text] = useTypewriter({
    words: ['TU MARCA', 'TU NEGOCIO', 'TU EMPRESA'],
    loop: 0,
    typeSpeed: 70,
    deleteSpeed: 50,
    delaySpeed: 1000,
  });
  return (
    <>
      <div className="max-w-8xl mx-auto flex flex-col justify-center lg:flex-row items-center relative overflow-hidden z-10 space-y-5 space-x-10 px-4 lg:px-0 mt-12">

        {/* Contenedor animado del texto */}
        <motion.div
          className="flex flex-col w-full lg:w-2/5"
          initial={{ x: '-100%', opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
        >
          <div className="flex flex-col items-start gap-6">
            <span className="text-default text-3xl lg:text-5xl font-monserrat font-extrabold leading-tight">
              Transformamos tu negocio<br />
              en una <span className="text-primary">{text}</span>
              <Cursor cursorColor="#104D7E" /><br />
              digital de alto impacto
            </span>

            <span className="text-lg text-default lg:text-2xl max-w-3xl">
              Somos expertos en aplicaciones web y desarrollo de software.
              En Wonder Clouds convertimos tus ideas en soluciones tecnológicas innovadoras que
              impulsan el crecimiento de tu negocio y cautivan a tu audiencia.
            </span>

            <div className="flex gap-4 mt-2">
              <Button
                size='lg'
                className="w-fit flex items-center group text-2xl text-white bg-primary rounded-xl 
                     transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95 gap-2 px-5"
              >
                <Link
                  href={"/contactanos"}
                  className="transition-all duration-500 group-hover:translate-x-1 my-auto"
                >
                  Contáctanos
                </Link>
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Imagen animada */}
        <motion.div
          className="hidden lg:block lg:w-2/6 z-10"
          initial={{ x: '100%', opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
        >
          <motion.div
            initial={{ x: 0, y: 0 }}
            animate={{
              x: [0, -10, 10, -10, 10, 0],
              y: [0, -10, 10, 10, -10, 0]
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
            }}
            className="w-5/6 h-auto mx-auto"
          >
            <Image
              src="/static/images/inicio.svg"
              width={800}
              height={800}
              className="mx-auto"
              alt="Imagen representativa"
            />
          </motion.div>
        </motion.div>
      </div>
    </>
  )
}

export default HeroSection;