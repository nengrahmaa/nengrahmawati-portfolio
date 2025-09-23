import { motion } from "framer-motion";
import { Mail, Github, Instagram, Linkedin } from "lucide-react";
import { useTranslation } from "react-i18next";
import Footer from "../components/Footer";
import BackToTop from "../components/BackToTop";

export default function Contact() {
  const { t } = useTranslation();

  return (
    <div>
      <motion.section
        id="contact"
        className="min-h-screen bg-gray-100 px-6 sm:px-12 md:px-20 py-16 flex flex-col items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Judul */}
        <motion.h2
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-800 mb-6 text-center"
        >
          {t("contact.title")}
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-24 h-1 bg-gray-700 rounded mb-8 mx-auto"
        />

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-gray-700 text-base sm:text-lg md:text-xl max-w-3xl text-center"
        >
          {t("contact.subtitle")}
        </motion.p>

        {/* Email */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-lg sm:text-xl font-medium text-gray-900 mt-8 text-center"
        >
          nengrahmawati061@gmail.com
        </motion.p>

        {/* Social Icons */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex flex-wrap justify-center gap-6 mt-10"
        >
          {[
            { icon: Mail, href: "mailto:nengrahmawati061@gmail.com" },
            { icon: Github, href: "https://github.com/nengrahmaa" },
            { icon: Instagram, href: "https://instagram.com/username" },
            { icon: Linkedin, href: "https://linkedin.com/in/neng-rahmawati-092586293/" },
          ].map((item, i) => (
            <motion.a
              key={i}
              href={item.href}
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.15, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              className="p-4 bg-white rounded-full shadow-lg hover:bg-gray-50 transition flex items-center justify-center"
            >
              <item.icon className="w-6 h-6 text-gray-800" />
            </motion.a>
          ))}
        </motion.div>
      </motion.section>
      <BackToTop/>
      <Footer />
    </div>
  );
}
