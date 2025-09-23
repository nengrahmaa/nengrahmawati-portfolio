import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Github, Instagram, Linkedin } from "lucide-react";
import { useTranslation } from "react-i18next";
import Sidebar from "../components/sidebar";
import { useNavigate, Link } from "react-router-dom";

export default function Home() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const roles = [
    t("roles.juniorWebDev"),
    t("roles.javaDev"),
    t("roles.reactDev"),
    t("roles.fullStackDev"),
  ];

  const [index, setIndex] = useState(0);
  const [isDesktop, setIsDesktop] = useState(false);
  const sectionsRef = useRef([]);

  const [showMenu, setShowMenu] = useState(false);

  const handleDownload = (version) => {
    const fileMap = {
      id: "/cv-indo.pdf",
      en: "/cv-english.pdf",
    };
    const link = document.createElement("a");
    link.href = fileMap[version];
    link.download = version === "id" ? "CV-Indo.pdf" : "CV-English.pdf";
    link.click();
    setShowMenu(false); // tutup menu setelah klik
  };

  useEffect(() => {
    // Set initial state based on window width
    setIsDesktop(window.innerWidth >= 768);

    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [roles.length]);

  useEffect(() => {
    if (!isDesktop) return;

    const sections = sectionsRef.current.filter(Boolean);
    let isScrolling = false;

    const handleWheel = (e) => {
      e.preventDefault();
      if (isScrolling) return;

      const currentIndex = sections.findIndex((section) => {
        const rect = section.getBoundingClientRect();
        return rect.top >= -10 && rect.top <= 10;
      });

      const direction = e.deltaY > 0 ? 1 : -1;
      let nextIndex = currentIndex + direction;

      if (nextIndex < 0) nextIndex = 0;
      if (nextIndex >= sections.length) nextIndex = sections.length - 1;

      if (sections[nextIndex]) {
        isScrolling = true;
        sections[nextIndex].scrollIntoView({ behavior: "smooth" });
        setTimeout(() => {
          isScrolling = false;
        }, 1500);
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => window.removeEventListener("wheel", handleWheel);
  }, [isDesktop]);



  return (
    <div className="bg-gray-200 snap-y snap-mandatory h-screen overflow-y-auto lg:overflow-hidden">
      {/* Sidebar hanya muncul di tablet dan laptop */}
      {isDesktop && <Sidebar />}

      {/* HOME SECTION */}
      <section
        ref={(el) => (sectionsRef.current[0] = el)}
        id="home"
        className="min-h-screen bg-gray-200 flex flex-col md:flex-row items-center justify-center px-4 sm:px-6 md:px-8 py-18 snap-start"
      >
        <div className="max-w-6xl w-full flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div className="w-full md:w-2/5 flex justify-center">
            <motion.img
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
              src="photo-hero.jpg"
              alt={t("alt.profile")}
              className="w-50 h-50 sm:w-56 sm:h-56 md:w-72 md:h-72 object-cover grayscale hover:grayscale-0 transition duration-500 rounded-full shadow-lg"
            />
          </div>

          <div className="w-full md:w-3/5 text-center md:text-left space-y-4 md:space-y-6 rounded-lg md:bg-transparent md:shadow-none md:backdrop-blur-none md:p-0">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-800"
            >
              <span className="text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-950 block mt-2">
                Neng Rahmawati
              </span>
            </motion.h1>

            <div className="h-8 mt-4 flex justify-center md:justify-start items-center gap-2">
              <span className="text-lg sm:text-xl lg:text-2xl font-medium text-gray-800">
                {t("home.a")}{" "}
              </span>
              <AnimatePresence mode="wait">
                <motion.span
                  key={roles[index]}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-800"
                >
                  {roles[index]}
                </motion.span>
              </AnimatePresence>
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-gray-700 text-sm sm:text-base leading-relaxed max-w-xl mx-auto md:mx-0 text-justify md:text-left mt-4"
            >
              {t("home.description")}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex flex-row sm:flex-row gap-4 mt-8 font-medium justify-center md:justify-start"
            >
              <motion.button
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
                onClick={() => setShowMenu(!showMenu)}
                className="px-5 py-2 bg-gradient-to-r from-gray-800 via-gray-900 to-black 
          text-gray-200 rounded-lg hover:brightness-110 hover:scale-105 hover:shadow-2xl hover:shadow-black/60
          transition text-sm sm:text-base shadow-lg shadow-gray-700/40 
          tracking-wide cursor-pointer"
              >
                {t("home.downloadCV")}
              </motion.button>

              {/* Menu versi CV */}
              <AnimatePresence>
                {showMenu && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute mt-8 w-38 bg-gray-500 text-gray-200 rounded-lg shadow-lg flex flex-col"
                  >
                    <button
                      className="px-4 py-2 hover:bg-gray-700 rounded-t-lg text-left"
                      onClick={() => handleDownload("id")}
                    >
                      CV Indonesia
                    </button>
                    <button
                      className="px-4 py-2 hover:bg-gray-700 rounded-b-lg text-left"
                      onClick={() => handleDownload("en")}
                    >
                      CV English
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
              <motion.button
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
                className="px-5 py-2 border border-gray-800 text-gray-800
               rounded-lg hover:brightness-110 hover:scale-103 hover:shadow-2xl hover:shadow-black/60
              transition text-sm sm:text-base shadow-lg shadow-gray-700/40 
              self-center md:self-start tracking-wide cursor-pointer"
              >
                <Link
                  to="contact"
                  smooth={true}
                  duration={500}
                  className="w-full h-full block"
                >

                  {t("home.contactMe")}
                </Link>
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <motion.section
        ref={(el) => (sectionsRef.current[1] = el)}
        id="about"
        className="min-h-screen bg-gray-200 px-4 sm:px-6 md:px-8 py-12 flex flex-col items-center justify-center snap-start"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="max-w-6xl w-full flex flex-col md:flex-row items-center md:items-stretch gap-8 md:gap-12">
          {/* Gambar Project */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full md:w-1/2 relative"
          >
            {/* Mobile & Tablet */}
            <img
              src="photo-grid.png"
              alt={t("alt.projects")}
              className="w-full h-[50vh] object-cover rounded-xl shadow-lg grayscale hover:grayscale-0 transition duration-500 lg:hidden"
            />

            {/* Laptop & Desktop */}
            <img
              src="photo-grid2.png"
              alt={t("alt.projects")}
              className="w-full h-[70vh] object-cover rounded-xl shadow-lg grayscale hover:grayscale-0 transition duration-500 hidden lg:block"
            />
            {/* Judul di dalam gambar (hanya untuk mobile) */}
            <motion.h2
              initial={{ x: -60, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
              className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 text-2xl sm:text-3xl font-extrabold text-gray-50 drop-shadow-lg z-10 text-left md:hidden"
            >
              {t("about.title")}
              <motion.span
                initial={{ width: 0, opacity: 0 }}
                whileInView={{ width: "70px", opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.8 }}
                className="block h-1 bg-gray-700 rounded mt-2 shadow"
              />
              <motion.span
                initial={{ width: 0, opacity: 0 }}
                whileInView={{ width: "90px", opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.8 }}
                className="block h-1 bg-gray-400 rounded mt-2 shadow"
              />
            </motion.h2>
          </motion.div>

          {/* Konten about */}
          <div className="w-full md:w-1/2 flex flex-col justify-center">
            {/* Judul untuk tablet/laptop (di atas deskripsi) */}
            <motion.h2
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
              className="hidden md:block text-5xl lg:text-6xl font-extrabold text-gray-800 mb-6"
            >
              {t("about.title")}
              <motion.span
                initial={{ width: 0, opacity: 0 }}
                whileInView={{ width: "90px", opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.8 }}
                className="block h-1 bg-gray-700 rounded mt-2"
              />
              <motion.span
                initial={{ width: 0, opacity: 0 }}
                whileInView={{ width: "110px", opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.8 }}
                className="block h-1 bg-gray-400 rounded mt-2"
              />
            </motion.h2>

            {/* Deskripsi */}
            <motion.p
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
              className="text-gray-700 text-base sm:text-lg leading-relaxed text-center md:text-left mb-8 mt-6 md:mt-0"
            >
              {t("about.description")}
            </motion.p>

            {/* Tombol */}
            <motion.button
              onClick={() => navigate("/about")}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
              className="px-5 py-2 bg-gradient-to-r from-gray-800 via-gray-900 to-black 
              text-gray-200 rounded-full hover:brightness-110 hover:scale-103 hover:shadow-2xl hover:shadow-black/60
              transition text-sm sm:text-base shadow-lg shadow-gray-700/40 
              self-center md:self-start tracking-wide cursor-pointer"
            >
              {t("about.learnMore")}
            </motion.button>
          </div>
        </div>
      </motion.section>


      {/* PROJECTS SECTION */}
      <motion.section
        ref={(el) => (sectionsRef.current[2] = el)}
        id="projects"
        className="min-h-screen bg-gray-200 px-4 sm:px-6 md:px-8 py-12 flex flex-col items-center justify-center snap-start"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="max-w-6xl w-full flex flex-col md:flex-row items-center md:items-stretch gap-8 md:gap-12">
          {/* Gambar Project */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full md:w-1/2 relative"
          >
            <img
              src="project-grid.png"
              alt={t("alt.projects")}
              className="w-full h-[50vh] md:h-[70vh] object-cover rounded-xl shadow-lg grayscale hover:grayscale-0 transition duration-500"
            />

            {/* Judul di dalam gambar (hanya untuk mobile) */}
            <motion.h2
              initial={{ x: -60, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
              className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 text-2xl sm:text-3xl font-extrabold text-gray-900 drop-shadow-lg z-10 text-left md:hidden"
            >
              {t("project.title")}
              <motion.span
                initial={{ width: 0, opacity: 0 }}
                whileInView={{ width: "90px", opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.8 }}
                className="block h-1 bg-gray-700 rounded mt-2"
              />
              <motion.span
                initial={{ width: 0, opacity: 0 }}
                whileInView={{ width: "110px", opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.8 }}
                className="block h-1 bg-gray-400 rounded mt-2"
              />
            </motion.h2>
          </motion.div>

          <div className="w-full md:w-1/2 flex flex-col justify-center">
            <motion.h2
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
              className="hidden md:block text-5xl lg:text-6xl font-extrabold text-gray-800 mb-6"
            >
              {t("project.title")}
              <motion.span
                initial={{ width: 0, opacity: 0 }}
                whileInView={{ width: "70px", opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.8 }}
                className="block h-1 bg-gray-700 rounded mt-2"
              />
              <motion.span
                initial={{ width: 0, opacity: 0 }}
                whileInView={{ width: "90px", opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.8 }}
                className="block h-1 bg-gray-400 rounded mt-2"
              />
            </motion.h2>

            {/* Deskripsi */}
            <motion.p
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
              className="text-gray-700 text-base sm:text-lg leading-relaxed text-center md:text-left mb-8 mt-6 md:mt-0"
            >
              {t("project.description")}
            </motion.p>

            {/* Tombol */}
            <motion.button
              onClick={() => navigate("/projects")}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
              className="px-5 py-2 bg-gradient-to-r from-gray-800 via-gray-900 to-black 
              text-gray-200 rounded-full hover:brightness-110 hover:scale-103 hover:shadow-2xl hover:shadow-black/60
              transition text-sm sm:text-base shadow-lg shadow-gray-700/40 
              self-center md:self-start tracking-wide cursor-pointer"
            >
              {t("project.view")}
            </motion.button>
          </div>
        </div>
      </motion.section>

      {/* Certificate SECTION */}
      <motion.section
        ref={(el) => (sectionsRef.current[3] = el)}
        id="certificate"
        className="min-h-screen bg-gray-200 px-4 sm:px-6 md:px-8 py-12 flex flex-col items-center justify-center snap-start"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="max-w-6xl w-full flex flex-col md:flex-row items-center md:items-stretch gap-8 md:gap-12">
          {/* Gambar Project */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full md:w-1/2 relative"
          >
            <img
              src="certif-grid.png"
              alt={t("alt.certificate")}
              className="w-full h-[50vh] md:h-[70vh] object-cover rounded-xl shadow-lg grayscale hover:grayscale-0 transition duration-500"
            />

            {/* Judul di dalam gambar (hanya untuk mobile) */}
            <motion.h2
              initial={{ x: -60, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
              className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 text-2xl sm:text-3xl font-extrabold text-gray-900 drop-shadow-lg z-10 text-left md:hidden"
            >
              {t("certificate.title")}
              <motion.span
                initial={{ width: 0, opacity: 0 }}
                whileInView={{ width: "90px", opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.8 }}
                className="block h-1 bg-gray-700 rounded mt-2"
              />
              <motion.span
                initial={{ width: 0, opacity: 0 }}
                whileInView={{ width: "110px", opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.8 }}
                className="block h-1 bg-gray-400 rounded mt-2"
              />
            </motion.h2>
          </motion.div>

          <div className="w-full md:w-1/2 flex flex-col justify-center">
            {/* Judul untuk tablet/laptop (di atas deskripsi) */}
            <motion.h2
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
              className="hidden md:block text-5xl lg:text-6xl font-extrabold text-gray-800 mb-6"
            >
              {t("certificate.title")}
              <motion.span
                initial={{ width: 0, opacity: 0 }}
                whileInView={{ width: "70px", opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.8 }}
                className="block h-1 bg-gray-700 rounded mt-2"
              />
              <motion.span
                initial={{ width: 0, opacity: 0 }}
                whileInView={{ width: "90px", opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.8 }}
                className="block h-1 bg-gray-400 rounded mt-2"
              />
            </motion.h2>

            {/* Deskripsi */}
            <motion.p
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
              className="text-gray-700 text-base sm:text-lg leading-relaxed text-center md:text-left mb-8 mt-6 md:mt-0"
            >
              {t("certificate.description")}
            </motion.p>

            {/* Tombol */}
            <motion.button
              onClick={() => navigate("/certificate")}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
              className="px-5 py-2 bg-gradient-to-r from-gray-800 via-gray-900 to-black 
              text-gray-200 rounded-full hover:brightness-110 hover:scale-103 hover:shadow-2xl hover:shadow-black/60
              transition text-sm sm:text-base shadow-lg shadow-gray-700/40 
              self-center md:self-start tracking-wide cursor-pointer"
            >
              {t("certificate.seeDetails")}
            </motion.button>
          </div>
        </div>
      </motion.section>

      <motion.section
        ref={(el) => (sectionsRef.current[4] = el)}
        id="contact"
        className="min-h-screen bg-gray-200 px-4 sm:px-6 md:px-8 py-12 flex flex-col items-center justify-center snap-start"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="max-w-6xl w-full flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full md:w-1/2 relative"
          >
            <img
              src="photo-hero.jpg"
              alt={t("alt.projects")}
              className="w-full h-[50vh] md:h-[70vh] object-cover rounded-xl shadow-lg grayscale hover:grayscale-0 transition duration-500"
            />

            {/* Judul di dalam gambar (hanya untuk mobile) */}
            <motion.h2
              initial={{ x: -60, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
              className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 text-2xl sm:text-3xl font-extrabold text-white drop-shadow-lg z-10 text-left md:hidden"
            >
              {t("contact.title")}
              <motion.span
                initial={{ width: 0, opacity: 0 }}
                whileInView={{ width: "90px", opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.8 }}
                className="block h-1 bg-gray-700 rounded mt-2"
              />
              <motion.span
                initial={{ width: 0, opacity: 0 }}
                whileInView={{ width: "110px", opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.8 }}
                className="block h-1 bg-gray-400 rounded mt-2"
              />
            </motion.h2>
          </motion.div>

          {/* Bagian Konten Kontak */}
          <div className="w-full md:w-1/2 flex flex-col justify-center">
            <motion.h2
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
              className="hidden md:block text-5xl lg:text-6xl font-extrabold text-gray-800 mb-6"
            >
              {t("contact.title")}
              <motion.span
                initial={{ width: 0, opacity: 0 }}
                whileInView={{ width: "70px", opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.8 }}
                className="block h-1 bg-gray-700 rounded mt-2"
              />
              <motion.span
                initial={{ width: 0, opacity: 0 }}
                whileInView={{ width: "90px", opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.8 }}
                className="block h-1 bg-gray-400 rounded mt-2"
              />
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-gray-700 text-base sm:text-lg max-w-md mx-auto md:mx-0 mt-4"
            >
              {t("contact.subtitle")}
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-lg sm:text-xl font-medium text-gray-800 mt-6"
            >
              nengrahmawati061@gmail.com
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex flex-wrap justify-center md:justify-start gap-4 mt-8"
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
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 bg-gray-100 rounded-full hover:bg-gray-200 transition shadow-sm"
                >
                  <item.icon className="w-6 h-6 text-gray-700" />
                </motion.a>
              ))}
            </motion.div>
          </div>


        </div>
      </motion.section>
    </div>

  );
}