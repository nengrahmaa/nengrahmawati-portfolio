import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Globe, Code2 } from "lucide-react";
import { useTranslation } from "react-i18next";
import i18next from "i18next";

export default function Header() {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const isActive = (path) => location.pathname === path;

  const toggleLanguage = () => {
    const newLang = i18n.language === "en" ? "id" : "en";
    i18n.changeLanguage(newLang);
  };

  return (
    // Gunakan React Fragment untuk membungkus header dan menu mobile
    <>
      <motion.header
        className="fixed top-0 left-0 w-full backdrop-blur-md z-50 bg-white/60 dark:bg-gray-900/60 shadow-sm"
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
          <motion.h1
            className="flex items-center gap-3 text-3xl font-semibold cursor-pointer 
                 text-gray-800 dark:text-gray-200 tracking-wide"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            onClick={() => navigate("/")}
          >
            <Code2 className="w-8 h-8 text-gray-600 dark:text-gray-300" />
            NR Codes
          </motion.h1>
          <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-gray-800 dark:text-gray-200">
            <button
              onClick={() => navigate("/")}
              className={`cursor-pointer font-bold pb-1 ${isActive("/")
                ? "border-b-2 border-gray-500 text-gray-500"
                : "hover:text-gray-600 dark:hover:text-gray-700"
                }`}
            >
              {t("header.home")}
            </button>
            <button
              onClick={() => navigate("/about")}
              className={`cursor-pointer font-bold pb-1 ${isActive("/about")
                ? "border-b-2 border-gray-500 text-gray-500"
                : "hover:text-gray-600 dark:hover:text-gray-700"
                }`}
            >
              {t("header.about")}
            </button>
            <button
              onClick={() => navigate("/about")}
              className={`cursor-pointer font-bold pb-1 ${isActive("/about")
                ? "border-b-2 border-gray-500 text-gray-500"
                : "hover:text-gray-600 dark:hover:text-gray-700"
                }`}
            >
              {t("header.sertif")}
            </button>
            <button
              onClick={() => navigate("/project")}
              className={`cursor-pointer font-bold pb-1 ${isActive("/project")
                ? "border-b-2 border-gray-500 text-gray-500"
                : "hover:text-gray-600 dark:hover:text-gray-700"
                }`}
            >
              {t("header.project")}
            </button>
            <button
              onClick={() => navigate("/contact")}
              className={`cursor-pointer font-bold pb-1 ${isActive("/contact")
                ? "border-b-2 border-gray-500 text-gray-500"
                : "hover:text-gray-600 dark:hover:text-gray-700"
                }`}
            >
              {t("header.contact")}
            </button>
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1 text-sm font-semibold text-gray-700 dark:text-gray-50 px-2 py-1 rounded-md hover:text-gray-500 dark:hover:text-gray-700 transition cursor-pointer"
            >
              <Globe className="h-5 w-5" /> {i18next.language.toUpperCase()}
            </button>
          </nav>

          <div className="flex lg:hidden items-center gap-3">
            <Menu
              className="h-7 w-7 text-gray-800 dark:text-gray-200 cursor-pointer"
              onClick={() => setMenuOpen(true)}
            />
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 z-50 flex justify-end"
          >
            <div
              className="absolute inset-0 bg-black/30 backdrop-blur-sm"
              onClick={() => setMenuOpen(false)}
            ></div>
            <div className="relative z-50 bg-white dark:bg-gray-900 w-72 sm:w-80 h-full shadow-2xl flex flex-col p-6">
              <div className="flex justify-end">
                <X
                  className="h-6 w-6 text-gray-800 dark:text-gray-200 cursor-pointer hover:text-red-500 transition"
                  onClick={() => setMenuOpen(false)}
                />
              </div>

              <nav className="flex flex-col mt-6 gap-4 text-gray-800 dark:text-gray-200 font-medium text-base">
                <button
                  onClick={() => {
                    navigate("/");
                    setMenuOpen(false);
                  }}
                  className={`pb-1 ${isActive("/")
                    ? "border-b-2 border-gray-500 text-gray-500"
                    : "hover:text-gray-600 dark:hover:text-gray-400"
                    }`}
                >
                  {t("header.home")}
                </button>
                <button
                  onClick={() => {
                    navigate("/explore");
                    setMenuOpen(false);
                  }}
                  className={`pb-1 ${isActive("/explore")
                    ? "border-b-2 border-gray-500 text-gray-500"
                    : "hover:text-gray-600 dark:hover:text-gray-400"
                    }`}
                >
                  {t("header.explore")}
                </button>
                <button
                  onClick={() => {
                    navigate("/about");
                    setMenuOpen(false);
                  }}
                  className={`pb-1 ${isActive("/about")
                    ? "border-b-2 border-gray-500 text-gray-500"
                    : "hover:text-gray-600 dark:hover:text-gray-400"
                    }`}
                >
                  {t("header.about")}
                </button>
                <button
                  onClick={() => {
                    navigate("/project");
                    setMenuOpen(false);
                  }}
                  className={`pb-1 ${isActive("/project")
                    ? "border-b-2 border-gray-500 text-gray-500"
                    : "hover:text-gray-600 dark:hover:text-gray-400"
                    }`}
                >
                  {t("header.project")}
                </button>
                <button
                  onClick={() => {
                    navigate("/contact");
                    setMenuOpen(false);
                  }}
                  className={`pb-1 ${isActive("/contact")
                    ? "border-b-2 border-gray-500 text-gray-500"
                    : "hover:text-gray-600 dark:hover:text-gray-400"
                    }`}
                >
                  {t("header.contact")}
                </button>
                <button
                  onClick={toggleLanguage}
                  className="flex items-center gap-2"
                >
                  <Globe className="h-5 w-5" />
                  {i18next.language.toUpperCase()}
                </button>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}