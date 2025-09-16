'use client';
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useNavigate, useLocation } from "react-router-dom";
import BackToTop from "../component/BackToTop";
import Footer from "../component/footer";

// Ini bisa ditaruh di atas komponen kalau belum ada

export default function AboutPage() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();

  const quote = t("quote");
  const words = quote.split(" ");

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const wordVariant = {
  hidden: { opacity: 0, filter: "blur(8px)", y: 20 },
  visible: {
    opacity: 1,
    filter: "blur(0)",
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, staggerChildren: 0.12 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };

  const allSkills = [
    { name: "C", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" },
    { name: "C++", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
    { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
    { name: "PHP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
    { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Spring Boot", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" },
    { name: "Spring Security", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" },
    { name: "Thymeleaf", icon: "https://images.seeklogo.com/logo-png/44/1/thymeleaf-logo-png_seeklogo-441827.png" },
    { name: "Tailwind CSS", icon: "https://img.icons8.com/?size=100&id=4PiNHtUJVbLs&format=png&color=000000" },
    { name: "Bootstrap", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
    { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
    { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
    { name: "Swagger", icon: "https://images.seeklogo.com/logo-png/43/1/swaggerhub-logo-png_seeklogo-435223.png" },
    { name: "Postman", icon: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" },
  ];

  return (
    <div className="overflow-x-hidden">
      {/* Hero / Intro Section */}
      <motion.section
        className="min-h-screen flex flex-col md:flex-row items-center justify-center px-6 md:px-16 py-16 bg-gray-100 relative overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Konten Teks */}
        <motion.div
          className="w-full md:w-1/3 flex flex-col justify-center order-2 md:order-none"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-4 drop-shadow-lg">
            {t("about.title")}
          </h1>
          <div className="w-24 h-1 bg-gray-800 rounded mb-6 shadow-lg"></div>
          <p className="text-gray-700 text-base sm:text-lg md:text-base leading-relaxed mb-6">
            {t("about.description")}
          </p>
        </motion.div>

        {/* Gambar */}
        <motion.div
          className="w-full md:w-2/3 mt-8 md:mt-0 flex justify-center items-center order-1 md:order-none"
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <img
            src="/photo-grid2.png"
            alt="About Hero"
            className="w-full h-auto object-cover rounded-xl shadow-lg grayscale hover:grayscale-0 transition duration-500 ease-in-out"
          />
        </motion.div>
      </motion.section>

      {/* About Section */}
      <motion.section
        className="min-h-screen px-6 md:px-16 py-16 bg-gray-100 flex flex-col md:flex-row items-center justify-center relative overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        {/* Gambar kiri (Collage) */}
        <motion.div
          className="w-full md:w-1/2 flex justify-center items-center -mt-20 sm:-mt-35 mb-12 md:mb-0" // Tambahkan margin bottom untuk mobile
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {/* Kontainer Grid untuk Kolase Responsif */}
          {/* Atur max-w-md atau ukuran lain yang sesuai agar tidak terlalu besar di layar lebar */}
          <div className="relative w-full max-w-md aspect-square">
            {/* Gambar 1 (Paling Besar) */}
            <motion.div
              className="absolute top-[30%] left-[5%] w-[55%] aspect-square" // Posisi & ukuran relatif
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <img
                src="/photo-grid2.png"
                alt="Pendidikan 1"
                className="w-full h-full object-cover shadow-md grayscale hover:grayscale-0 transition-all duration-300 ease"
              />
            </motion.div>

            {/* Gambar 2 */}
            <motion.div
              className="absolute top-[25%] right-[15%] w-[35%] aspect-square" // Posisi & ukuran relatif
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <img
                src="/photo-grid.png"
                alt="Pendidikan 2"
                className="w-full h-full object-cover shadow-md grayscale hover:grayscale-0 transition-all duration-300 ease"
              />
            </motion.div>

            {/* Gambar 3 */}
            <motion.div
              className="absolute -bottom-[10%] right-[10%] w-[45%] aspect-square" // Posisi & ukuran relatif
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <img
                src="/photo-hero.jpg"
                alt="Pendidikan 3"
                className="w-full h-full object-cover shadow-md grayscale hover:grayscale-0 transition-all duration-300 ease"
              />
            </motion.div>
          </div>
        </motion.div>

        {/* Teks kanan */}
        <motion.div
          className="w-full md:w-1/2 md:pl-12 flex flex-col justify-center"
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold">{t("about.who")}</h2>
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

          <p className="text-gray-700 text-base sm:text-lg md:text-base font-medium mt-8 leading-relaxed text-justify">
            {t("about.me")}
          </p>
        </motion.div>
      </motion.section>

      {/* Pendidikan & Pengalaman Section */}
      <motion.section
        className="min-h-screen px-6 md:px-16 py-16 flex flex-col items-center justify-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl sm:text-4xl font-bold mb-16 text-gray-900 text-center">
          {t('education.title')}
        </h2>
        <div className="relative w-full max-w-5xl mx-auto">
          <div className="absolute top-0 left-4 lg:left-1/2 w-1 h-full bg-gray-300 transform lg:-translate-x-1/2"></div>

          <div className="space-y-16">
            {t('education.timeline', { returnObjects: true }).map((item, index) => (
              <motion.div
                key={index}
                className="relative"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <div className="absolute top-5 left-4 lg:left-1/2 w-6 h-6 bg-black rounded-full border-4 border-gray-100 shadow-lg transform -translate-x-1/2 z-10"></div>

                <div className="lg:flex">
                  {/* SISI KIRI: Keterangan Waktu & Lokasi */}
                  <div className="lg:w-1/2 lg:pr-8">
                    <div className="pl-12 lg:pl-0 lg:flex lg:justify-end">
                      <div className="bg-gradient-to-r from-black to-gray-800 text-white px-4 py-3 rounded-xl shadow-lg border border-gray-600 w-full lg:w-max text-center lg:text-left">
                        <div className="flex items-center justify-center lg:justify-start gap-4">
                          <div className="text-center">
                            <div className="text-sm font-bold">{item.startDate}</div>
                            <div className="text-xs text-gray-300">{t("education.start")}</div>
                          </div>
                          <div className="w-px h-8 bg-gray-400"></div>
                          <div className="text-center">
                            <div className="text-sm font-bold">{item.endDate}</div>
                            <div className="text-xs text-gray-300">{t("education.end")}</div>
                          </div>
                          <div className="w-px h-8 bg-gray-400 hidden sm:block"></div>
                          <div className="text-center hidden sm:block">
                            <div className="text-sm font-bold">{item.location}</div>
                            <div className="text-xs text-gray-300">{t("education.location")}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* SISI KANAN: Konten Pendidikan/Pengalaman */}
                  <div className="lg:w-1/2 lg:pl-8 mt-4 lg:mt-0">
                    <div className="pl-12 lg:pl-0">
                      <div className="bg-white/50 backdrop-blur-sm border border-gray-300/50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                        <div className="mb-4">
                          <h3 className="font-bold text-xl text-black mb-1">{item.title}</h3>
                          <h4 className="font-medium text-lg text-gray-700">
                            {item.institution}
                            <span className="text-sm font-normal text-gray-500 ml-2">• {item.type}</span>
                          </h4>
                        </div>
                        <ul className="text-gray-700 text-justify text-base sm:text-lg md:text-base leading-relaxed mb-4 space-y-2">
                          {item.description.map((point, idx) => (
                            <li key={idx} className="flex items-start">
                              <span className="flex-shrink-0 w-2 h-2 mt-2 mr-3 bg-black rounded-full"></span>
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>


      <motion.section
        className="min-h-screen px-6 md:px-16 py-20 bg-gray-100 flex flex-col items-center justify-start"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        <div className="w-full max-w-6xl mx-auto text-center">
          <motion.h2
            variants={itemVariants}
            className="text-3xl sm:text-4xl font-bold mb-12 text-gray-900"
          >
            {t("skills.title")}
          </motion.h2>

          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4 sm:gap-6">
            {allSkills.map((skill) => (
              <motion.div
                key={skill.name}
                variants={itemVariants}
                whileHover={{ scale: 1.2, rotate: 5 }}
                transition={{ type: "spring", stiffness: 200, damping: 12 }}
                className="relative group flex items-center justify-center"
              >
                {/* Icon */}
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white shadow-md flex items-center justify-center overflow-hidden">
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    title={skill.name}
                    className="w-8 h-8 sm:w-10 sm:h-10 object-contain filter grayscale group-hover:grayscale-0 transition duration-500"
                  />
                </div>

              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Kursus / Pelatihan Section */}
      <motion.section
        className="min-h-screen px-6 md:px-16 py-16 flex flex-col items-center justify-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl sm:text-4xl font-bold mb-16 text-gray-900 text-center">
          {t('training.title')}
        </h2>

        <div className="relative w-full max-w-5xl mx-auto">
          {/* Timeline Vertical Line */}
          <div className="absolute top-0 left-4 lg:left-1/2 w-1 h-full bg-gray-300 transform lg:-translate-x-1/2"></div>

          <div className="space-y-16">
            {t('training.timeline', { returnObjects: true }).map((item, index) => {
              const isLeft = index % 2 === 0;
              return (
                <motion.div
                  key={index}
                  className="relative"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  {/* Dot */}
                  <div className="absolute top-5 left-4 lg:left-1/2 w-6 h-6 bg-black rounded-full border-4 border-gray-100 shadow-lg transform -translate-x-1/2 z-10"></div>

                  <div className={`lg:flex ${isLeft ? '' : 'lg:flex-row-reverse'}`}>
                    {/* Tanggal / Lokasi */}
                    <div className="lg:w-1/2 lg:px-8">
                      <div className={`pl-12 lg:pl-0 lg:flex ${isLeft ? 'lg:justify-end' : 'lg:justify-start'}`}>
                        <div className="bg-gradient-to-r from-black to-gray-800 text-white px-4 py-3 rounded-xl shadow-lg border border-gray-600 w-full lg:w-max text-center lg:text-left">
                          <div className="flex items-center justify-center lg:justify-start gap-4">
                            <div className="text-center">
                              <div className="text-sm font-bold">{item.startDate}</div>
                              <div className="text-xs text-gray-300">{t("training.start")}</div>
                            </div>
                            <div className="w-px h-8 bg-gray-400"></div>
                            <div className="text-center">
                              <div className="text-sm font-bold">{item.endDate}</div>
                              <div className="text-xs text-gray-300">{t("training.end")}</div>
                            </div>
                            <div className="w-px h-8 bg-gray-400 hidden sm:block"></div>
                            <div className="text-center hidden sm:block">
                              <div className="text-sm font-bold">{item.location}</div>
                              <div className="text-xs text-gray-300">{t("training.location")}</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Konten Course */}
                    <div className="lg:w-1/2 lg:px-8 mt-4 lg:mt-0">
                      <div className="pl-12 lg:pl-0">
                        <div className="bg-white/50 backdrop-blur-sm border border-gray-300/50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                          <div className="mb-4">
                            <h3 className="font-bold text-xl text-black mb-1">{item.title}</h3>
                            <h4 className="font-medium text-lg text-gray-700">
                              {item.institution}
                              <span className="text-sm font-normal text-gray-500 ml-2">• {item.type}</span>
                            </h4>
                          </div>
                          <ul className="text-gray-700 text-justify leading-relaxed mb-4 space-y-2">
                            {item.description.map((point, idx) => (
                              <li key={idx} className="flex items-start">
                                <span className="flex-shrink-0 w-2 h-2 mt-2 mr-3 bg-black rounded-full"></span>
                                <span>{point}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.section>

      {/* Other About Section */}
      <motion.section
        className="min-h-screen px-6 md:px-16 py-20 bg-gray-100 flex flex-col items-center justify-center text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={container}
      >

        <motion.div className="text-xl sm:text-2xl md:text-3xl font-medium text-gray-700 leading-relaxed max-w-4xl flex flex-wrap justify-center gap-2">
          {words.map((word, index) => (
            <motion.span key={index} variants={wordVariant}>
              {word}
            </motion.span>
          ))}
        </motion.div>
      </motion.section>

      <BackToTop/>
      <Footer />
    </div>
  );
}
