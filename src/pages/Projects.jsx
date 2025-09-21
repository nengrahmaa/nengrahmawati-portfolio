import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import projects from "../data/projects.json";
import ProjectCard from "../component/ProjectCard"; // <-- Pastikan menggunakan ProjectCard
import Footer from "../component/footer";
import BackToTop from "../component/BackToTop";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15, // Jeda animasi antar kartu
    },
  },
};

export default function Projects() {
  const { t } = useTranslation();

  return (
    <>
      <section className="px-6 md:px-16 lg:px-24 py-20 bg-white text-gray-800">
        {/* ... (kode judul tidak berubah) ... */}
        
        {/* Pastikan bagian ini menggunakan `grid` */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
            />
          ))}
        </motion.div>
      </section>

      <BackToTop />
      <Footer />
    </>
  );
}