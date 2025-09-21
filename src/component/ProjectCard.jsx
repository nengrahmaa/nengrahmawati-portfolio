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
                <img
                    src={project.image}
                    alt={t(project.title_key)}
                    className="absolute inset-0 h-full w-full object-contain transition-transform duration-500 ease-in-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent" />

                {/* 1. Tambahkan "overflow-hidden" agar konten yang bergeser tidak keluar dari padding */}
                <div className="relative h-full flex flex-col justify-end p-6 text-white overflow-hidden">
                    {/* Tahun tetap terlihat */}
                    <span className="absolute top-4 left-4 text-sm font-semibold bg-black/50 px-3 py-1 rounded-full">{project.year}</span>

                    {/* 2. Buat wrapper untuk semua konten yang akan muncul */}
                    <div className="opacity-0 transform translate-y-8 transition-all duration-500 ease-in-out group-hover:opacity-100 group-hover:translate-y-0">

                        <h3 className="text-3xl font-bold transition-colors duration-300 group-hover:text-white">
                            {t(project.title_key)}
                        </h3>

                        <p className="mt-2 text-gray-300 text-sm leading-relaxed line-clamp-2">
                            {t(project.description_key)}
                        </p>

                        {/* Wrapper untuk bagian bawah kartu */}
                        <div className="mt-4 pt-4 border-t border-white/20 flex justify-between items-end">

                            {/* Bagian Kiri: Tech Stack */}
                            <div className="flex flex-wrap gap-2">
                                {project.techStack.map(tech => (
                                    <span key={tech} className="text-xs bg-white/10 backdrop-blur-sm text-white px-3 py-1 rounded-full">
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            {/* Bagian Kanan: Ikon Link Demo & GitHub */}
                            <div className="flex items-center gap-3 flex-shrink-0">

                                {/* Tampilkan ikon ini HANYA jika project.demoUrl ada */}
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

                                {/* Ikon GitHub tetap tampil seperti biasa */}
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