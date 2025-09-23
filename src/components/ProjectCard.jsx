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
                className="group relative block h-80 w-full rounded-xl overflow-hidden shadow-2xl"
            >
                {/* 1. Gambar dimulai dalam keadaan zoom (scale-105) dan kembali normal saat hover */}
                <img
                    src={project.image}
                    alt={t(project.title_key)}
                    className="absolute inset-0 h-full w-full object-contain transition-transform duration-500 ease-in-out scale-105 group-hover:scale-100"
                />
                {/* 2. Gradient terlihat di awal dan menghilang saat hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent transition-opacity duration-500 group-hover:opacity-0" />

                <div className="relative h-full flex flex-col justify-end p-6 text-white overflow-hidden">
                    <span className="absolute top-4 left-4 text-sm font-semibold bg-black/50 px-3 py-1 rounded-full">{project.year}</span>

                    {/* 3. Wrapper konten sekarang terlihat di awal dan menghilang saat hover */}
                    <div className="transition-all duration-500 ease-in-out group-hover:opacity-0 group-hover:translate-y-8">

                        <h3 className="text-3xl font-bold">
                            {t(project.title_key)}
                        </h3>

                        <p className="mt-2 text-gray-300 text-sm leading-relaxed line-clamp-2">
                            {t(project.description_key)}
                        </p>

                        <div className="mt-4 pt-4 border-t border-white/20 flex justify-between items-end">
                            <div className="flex flex-wrap gap-2">
                                {project.techStack.map(tech => (
                                    <span key={tech} className="text-xs bg-white/10 backdrop-blur-sm text-white px-3 py-1 rounded-full">
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <div className="flex items-center gap-3 flex-shrink-0">
                                {project.demoUrl && (
                                    <a
                                        href={project.demoUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        onClick={(e) => e.stopPropagation()}
                                        className="text-gray-300 hover:text-white transition-colors z-10"
                                        aria-label="Live Demo"
                                    >
                                        <ExternalLink size={20} />
                                    </a>
                                )}
                                <a
                                    href={project.githubUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={(e) => e.stopPropagation()}
                                    className="text-gray-300 hover:text-white transition-colors z-10"
                                    aria-label="GitHub Repository"
                                >
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