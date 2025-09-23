import { useParams, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import projects from "../data/projects.json";
import { ArrowLeft, ExternalLink, Github, CheckCircle, Ban } from "lucide-react";
import Footer from "../components/footer";

export default function ProjectDetail() {
  const { projectId } = useParams();
  const { t } = useTranslation();
  const project = projects.find(p => p.id === projectId);

  if (!project) {
    // Menggunakan t() untuk pesan error
    return <div>{t("projectDetail.notFound")}</div>;
  }

  const detailsArray = Object.values(t(project.details_key, { returnObjects: true }));

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="px-6 md:px-16 lg:px-24 py-16 bg-gray-100">
          <Link to="/projects" className="inline-flex items-center text-gray-600 hover:text-blue-600 font-semibold mb-8 transition-colors">
            <ArrowLeft size={20} className="mr-2" />
            {t("projectDetail.backButton")} {/* <-- Diubah */}
          </Link>
        </div>

        <div className="w-full h-[30vh] md:h-[50vh] overflow-hidden">
          <img src={project.image} alt={t(project.title_key)} className="w-full h-full object-cover" />
        </div>

        <section className="px-6 md:px-16 lg:px-24 py-16 text-gray-800">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <aside className="lg:col-span-1">
              <div className="sticky top-24">
                <h1 className="text-4xl font-bold text-gray-900">{t(project.title_key)}</h1>

                <h4 className="font-semibold text-gray-500 mt-8 mb-2 tracking-widest uppercase text-sm">{t("projectDetail.techLabel")}</h4> {/* <-- Diubah */}
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map(tech => (
                    <span key={tech} className="bg-gray-200 text-gray-700 text-xs font-semibold px-3 py-1 rounded-full">{tech}</span>
                  ))}
                </div>

                <h4 className="font-semibold text-gray-500 mt-6 mb-2 tracking-widest uppercase text-sm">{t("projectDetail.yearLabel")}</h4> {/* <-- Diubah */}
                <p className="text-gray-900">{project.year}</p>

                <h4 className="font-semibold text-gray-500 mt-6 mb-3 tracking-widest uppercase text-sm">{t("projectDetail.linksLabel")}</h4> {/* <-- Diubah */}
                <div className="flex space-x-4 items-center">
                  {project.demoUrl ? (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-700 hover:text-blue-600 font-medium transition-colors"
                    >
                      <ExternalLink size={18} /> {t("projectDetail.demoLink")}
                    </a>
                  ) : (
                    <span className="flex items-center gap-2 text-gray-400 cursor-not-allowed font-medium">
                      <Ban size={18} /> {t("projectDetail.demoLink")}
                    </span>
                  )}

                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-700 hover:text-blue-600 font-medium transition-colors">
                    <Github size={18} /> {t("projectDetail.repoLink")} {/* <-- Diubah */}
                  </a>
                </div>
              </div>
            </aside>

            <main className="lg:col-span-2">
              <h4 className="font-semibold text-gray-500 mb-2 tracking-widest uppercase text-sm">{t("projectDetail.descLabel")}</h4> {/* <-- Diubah */}
              <p className="text-gray-700 text-lg leading-relaxed mb-8">{t(project.description_key)}</p>

              <ul className="space-y-4">
                {detailsArray.map((detail, index) => (
                  <motion.li
                    key={index}
                    className="flex items-start"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.15 }}
                  >
                    <CheckCircle className="flex-shrink-0 w-5 h-5 text-green-600 mr-4 mt-1" />
                    <span className="text-gray-700 leading-relaxed">{detail}</span>
                  </motion.li>
                ))}
              </ul>
            </main>
          </div>
        </section>
      </motion.div>
      <Footer />
    </>
  );
}