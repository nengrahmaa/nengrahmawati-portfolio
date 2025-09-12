import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="bg-gray-100 min-h-screen px-6 md:px-20 py-26">
      
      {/* Section Header */}
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-5xl font-bold text-black mb-4">About Me</h1>
        <p className="text-gray-700 text-lg">
          Get to know me, my skills, experience, and education.
        </p>
      </motion.div>

      {/* Profile Section */}
      <motion.div
        className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <img
          src="/path/to/about.jpg"
          alt="Profile"
          className="w-64 h-64 object-cover rounded-full grayscale hover:grayscale-0 transition duration-500"
        />
        <div className="md:w-2/3 space-y-4 text-center md:text-left">
          <h2 className="text-3xl font-semibold text-black">Neng Rahmawati</h2>
          <p className="text-gray-700 text-lg">
            Hi! I'm a Full Stack Developer passionate about creating interactive and user-friendly web applications. I love exploring new technologies, AI, and improving my skills every day.
          </p>
          <button className="px-6 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition">
            Download CV
          </button>
        </div>
      </motion.div>

      {/* Skills Section */}
      <motion.div
        className="mb-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <h3 className="text-3xl font-bold text-black mb-6">Skills</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="p-4 bg-white rounded-lg shadow hover:shadow-lg transition">
            <h4 className="font-semibold text-gray-800">JavaScript</h4>
          </div>
          <div className="p-4 bg-white rounded-lg shadow hover:shadow-lg transition">
            <h4 className="font-semibold text-gray-800">React</h4>
          </div>
          <div className="p-4 bg-white rounded-lg shadow hover:shadow-lg transition">
            <h4 className="font-semibold text-gray-800">Node.js</h4>
          </div>
          <div className="p-4 bg-white rounded-lg shadow hover:shadow-lg transition">
            <h4 className="font-semibold text-gray-800">Tailwind CSS</h4>
          </div>
          <div className="p-4 bg-white rounded-lg shadow hover:shadow-lg transition">
            <h4 className="font-semibold text-gray-800">MySQL</h4>
          </div>
          <div className="p-4 bg-white rounded-lg shadow hover:shadow-lg transition">
            <h4 className="font-semibold text-gray-800">Blender 3D</h4>
          </div>
        </div>
      </motion.div>

      {/* Experience Section */}
      <motion.div
        className="mb-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <h3 className="text-3xl font-bold text-black mb-6">Experience</h3>
        <ul className="space-y-4">
          <li className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition">
            <h4 className="font-semibold text-gray-800">Security Officer</h4>
            <p className="text-gray-600">2018 - 2024 | Ensured safety and participated in organized challenges like Safe Fire Challenge.</p>
          </li>
          <li className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition">
            <h4 className="font-semibold text-gray-800">Full Stack Developer Intern</h4>
            <p className="text-gray-600">2023 - Present | Developed web applications using React, Node.js, and integrated APIs.</p>
          </li>
        </ul>
      </motion.div>

      {/* Education Section */}
      <motion.div
        className="mb-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        <h3 className="text-3xl font-bold text-black mb-6">Education</h3>
        <ul className="space-y-4">
          <li className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition">
            <h4 className="font-semibold text-gray-800">Science Major High School</h4>
            <p className="text-gray-600">Graduated 2024 | Focus on Science & Technology</p>
          </li>
        </ul>
      </motion.div>

      {/* Contact Section */}
      <motion.div
        className="mb-12 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 1 }}
      >
        <h3 className="text-3xl font-bold text-black mb-4">Contact Me</h3>
        <p className="text-gray-700 mb-4">Email: neng.rahmawati@example.com</p>
        <p className="text-gray-700 mb-4">Phone: +62 812 3456 7890</p>
        <button className="px-6 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition">
          Send Message
        </button>
      </motion.div>

    </div>
  );
}
