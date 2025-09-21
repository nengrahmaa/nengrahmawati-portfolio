// File: src/component/CertificateCard.jsx

import { useTranslation } from "react-i18next";
import { motion } from "framer-motion"; // 1. Impor motion
import { Eye } from "lucide-react";

// 2. Definisikan "variants" untuk animasi item kartu
const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

export default function CertificateCard({ cert, onView }) {
  const { t } = useTranslation();

  return (
    // 3. Ubah div menjadi motion.div dan terapkan variants
    <motion.div
      className="bg-white rounded-2xl p-6 flex justify-between items-center shadow-md hover:shadow-xl transition-shadow duration-300"
      variants={itemVariants} // <-- Terapkan variants di sini
    >
      <div className="flex flex-col">
        <h3 className="font-bold text-lg text-gray-900">{t(cert.title)}</h3>
        <p className="text-gray-500 text-sm mt-1">{t(cert.issuer)}</p>
      </div>
      <button
        onClick={onView}
        className="bg-gray-700 text-white p-3 rounded-full cursor-pointer hover:bg-gray-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
        aria-label={`Lihat sertifikat ${t(cert.title)}`}
      >
        <Eye className="h-6 w-6" />
      </button>
    </motion.div>
  );
}