import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Github, ExternalLink } from "lucide-react";

const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { type: 'spring', stiffness: 80, duration: 0.8 },
    },
};

export default function ProjectCard({ project }) {
    const { t } = useTranslation();

    return (
        <motion.div variants={cardVariants}>
            <Link
                to={`/projects/${project.id}`}
                className="group relative block h-72 md:h-80 w-full rounded-xl overflow-hidden shadow-2xl"
            >
                <img
                    src={project.image}
                    alt={t(project.title_key)}
                    className="absolute inset-0 h-full w-full object-contain transition-transform duration-500 ease-in-out scale-105 group-hover:scale-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent transition-opacity duration-500 group-hover:opacity-0" />

                <div className="relative h-full flex flex-col justify-end p-4 md:p-6 text-white overflow-hidden">
                    {/* TIPOGRAFI: Label tahun dibuat sedikit lebih besar di layar tablet ke atas */}
                    <span className="absolute top-4 left-4 text-xs sm:text-sm font-semibold bg-black/50 px-3 py-1 rounded-full">{project.year}</span>

                    <div className="transition-all duration-500 ease-in-out group-hover:opacity-0 group-hover:translate-y-8">
                        {/* TIPOGRAFI UTAMA: Ukuran judul diskalakan secara bertahap untuk setiap breakpoint */}
                        <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold">
                            {t(project.title_key)}
                        </h3>

                        {/* TIPOGRAFI: Jarak (margin) & panjang teks deskripsi disesuaikan */}
                        <p className="mt-1 sm:mt-2 text-sm text-gray-300 leading-relaxed line-clamp-1 sm:line-clamp-2">
                            {t(project.description_key)}
                        </p>

                        <div className="mt-3 md:mt-4 pt-3 md:pt-4 border-t border-white/20 flex flex-col items-start gap-3 sm:flex-row sm:justify-between sm:items-end">
                            <div className="flex flex-wrap gap-2">
                                {project.techStack.map(tech => (
                                    // TIPOGRAFI: Ukuran font untuk label teknologi dijaga tetap kecil (text-xs) agar tidak terlalu ramai
                                    <span key={tech} className="text-xs bg-white/10 backdrop-blur-sm text-white px-3 py-1 rounded-full">
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <div className="flex items-center gap-3 flex-shrink-0">
                                {project.demoUrl && (
                                    <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className="text-gray-300 hover:text-white transition-colors z-10" aria-label="Live Demo">
                                        <ExternalLink size={20} />
                                    </a>
                                )}
                                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className="text-gray-300 hover:text-white transition-colors z-10" aria-label="GitHub Repository">
                                    <Github size={20} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </motion.div>
    );
}