import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function Projects() {
  const { t } = useTranslation();

  // contoh data project
  const projects = [
    {
      id: 1,
      title: "Portfolio Website",
      description: "A personal portfolio built with React, Tailwind, and i18next for multi-language support.",
      image: "/projects/portfolio.png",
      link: "https://your-portfolio-link.com",
      tech: ["React", "TailwindCSS", "i18next"],
    },
    {
      id: 2,
      title: "E-commerce Store",
      description: "An e-commerce web app with cart, authentication, and payment integration.",
      image: "/projects/ecommerce.png",
      link: "https://your-store-link.com",
      tech: ["React", "Node.js", "MongoDB"],
    },
    {
      id: 3,
      title: "Travel App",
      description: "App to explore destinations with search, filter, and profile features.",
      image: "/projects/travel.png",
      link: "https://your-travel-app-link.com",
      tech: ["React", "Express", "MySQL"],
    },
  ];

  return (
    <section className="w-full pt-24 pb-16 bg-gray-50 dark:bg-gray-900 transition-colors duration-500">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center"
        >
          {t("projects.title", "My Projects")}
        </motion.h2>

        {/* Grid */}
        <div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              whileHover={{ scale: 1.02 }}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-md overflow-hidden flex flex-col"
            >
              {/* Image */}
              <div className="relative h-40 sm:h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 p-4 sm:p-5">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 flex-1">
                  {project.description}
                </p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2 mt-3">
                  {project.tech.map((t, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 text-xs font-medium bg-cyan-100 text-cyan-700 dark:bg-cyan-700 dark:text-cyan-100 rounded-full"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Link */}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block text-center bg-cyan-500 text-white px-4 py-2 rounded-lg text-sm sm:text-base hover:bg-cyan-600 transition"
                >
                  {t("projects.view", "View Project")}
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
