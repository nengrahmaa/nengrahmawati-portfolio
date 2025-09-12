import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  const { t } = useTranslation();

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
          {t("contact.title", "Get In Touch")}
        </motion.h2>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-12 text-sm sm:text-base">
          {t(
            "contact.subtitle",
            "Feel free to contact me if you have any questions or just want to say hi."
          )}
        </p>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="flex items-center gap-4">
              <Mail className="h-6 w-6 text-cyan-600 dark:text-cyan-400" />
              <span className="text-sm sm:text-base text-gray-800 dark:text-gray-200">
                hello@example.com
              </span>
            </div>
            <div className="flex items-center gap-4">
              <Phone className="h-6 w-6 text-cyan-600 dark:text-cyan-400" />
              <span className="text-sm sm:text-base text-gray-800 dark:text-gray-200">
                +62 812 3456 7890
              </span>
            </div>
            <div className="flex items-center gap-4">
              <MapPin className="h-6 w-6 text-cyan-600 dark:text-cyan-400" />
              <span className="text-sm sm:text-base text-gray-800 dark:text-gray-200">
                Jakarta, Indonesia
              </span>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6 sm:p-8 flex flex-col gap-4"
          >
            <input
              type="text"
              placeholder={t("contact.name", "Your Name")}
              className="w-full px-4 py-2 text-sm sm:text-base rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              required
            />
            <input
              type="email"
              placeholder={t("contact.email", "Your Email")}
              className="w-full px-4 py-2 text-sm sm:text-base rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              required
            />
            <textarea
              rows="4"
              placeholder={t("contact.message", "Your Message")}
              className="w-full px-4 py-2 text-sm sm:text-base rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              required
            />
            <button
              type="submit"
              className="w-full mt-2 bg-cyan-500 text-white py-2 rounded-lg text-sm sm:text-base font-semibold hover:bg-cyan-600 transition"
            >
              {t("contact.send", "Send Message")}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
