"use client"

import { motion } from "framer-motion";
import Breadcrumb from "@/components/ui/Breadcrumb";

const ProjectsTitle = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      <div className="container mx-auto pt-6 px-4">
        <motion.div
          className="flex flex-col items-center text-center mb-8"
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl text-primary font-bold mb-4">
            Proyectos
          </h1>
          <Breadcrumb />
        </motion.div>
      </div>
    </>
  );
};

export default ProjectsTitle;