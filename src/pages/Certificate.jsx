// File: src/pages/Certificates.jsx

import { useState } from "react";
import { useTranslation } from "react-i18next";
import {motion} from "framer-motion";
import certificates from "../data/certificates.json";
import CertificateCard from "../components/CertificateCard";
import CertificateModal from "../components/CertificateModal";
import BackToTop from "../components/BackToTop";
import Footer from "../components/Footer";

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.1, // Jeda 0.1 detik antar kartu
        },
    },
};

export default function Certificates() {
    const { t } = useTranslation();
    const [modalState, setModalState] = useState({
        isOpen: false,
        currentIndex: null,
    });

    const handleOpenModal = (index) => setModalState({ isOpen: true, currentIndex: index });
    const handleCloseModal = () => setModalState({ isOpen: false, currentIndex: null });
    const handleNext = () => {
        if (modalState.currentIndex < certificates.length - 1) {
            setModalState(prev => ({ ...prev, currentIndex: prev.currentIndex + 1 }));
        }
    };
    const handlePrev = () => {
        if (modalState.currentIndex > 0) {
            setModalState(prev => ({ ...prev, currentIndex: prev.currentIndex - 1 }));
        }
    };

    return (
        // Menggunakan React Fragment karena div pembungkus tidak perlu
        <> 
            <section className="px-6 md:px-16 py-20 bg-gray-100 text-gray-800">
                <div className="flex flex-col items-center mb-5">
                    <motion.h2
                        className="text-3xl sm:text-4xl font-bold mb-4 text-center"
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        {t("certificates.titlePage", "Sertifikat Saya")}
                    </motion.h2>
                    <motion.span
                        className="block h-1 bg-gray-700 rounded shadow"
                        initial={{ width: 0, opacity: 0 }}
                        animate={{ width: "250px", opacity: 1 }}
                        transition={{ duration: 0.6, ease: "easeOut", delay: 0.8 }}
                    />
                    <motion.span
                        className="block h-1 bg-gray-400 rounded mt-2 shadow"
                        initial={{ width: 0, opacity: 0 }}
                        animate={{ width: "120px", opacity: 1 }}
                        transition={{ duration: 0.6, ease: "easeOut", delay: 0.9 }}
                    />
                </div>
                
                {/* Kode yang diperbaiki: karakter > dan komentar yang salah telah dihapus */}
                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {certificates.map((cert, index) => (
                        <CertificateCard
                            key={cert.id}
                            cert={cert}
                            onView={() => handleOpenModal(index)}
                        />
                    ))}
                </motion.div>

                {modalState.isOpen && (
                    <CertificateModal
                        certificate={certificates[modalState.currentIndex]}
                        onClose={handleCloseModal}
                        onNext={handleNext}
                        onPrev={handlePrev}
                        isFirst={modalState.currentIndex === 0}
                        isLast={modalState.currentIndex === certificates.length - 1}
                    />
                )}
            </section>

            <BackToTop />
            <Footer />
        </>
    );
}