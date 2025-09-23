import { motion } from "framer-motion";
import { X, CheckCircle } from "lucide-react";

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const modalVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } },
  exit: { opacity: 0, y: 50 },
};

export default function ProjectModal({ project, onClose }) {
  return (
    <motion.div
      className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50 p-4"
      variants={backdropVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
      onClick={onClose}
    >
      <motion.div
        className="bg-white rounded-lg shadow-2xl max-w-3xl w-full overflow-hidden"
        variants={modalVariants}
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking on modal content
      >
        <div className="relative">
          <img src={project.imageUrl} alt={project.title} className="w-full h-64 object-cover"/>
          <button onClick={onClose} className="absolute top-4 right-4 bg-white/50 text-gray-800 rounded-full p-2 hover:bg-white transition-all">
            <X size={24}/>
          </button>
        </div>
        
        <div className="p-8">
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">{project.title}</h2>
              <p className="text-gray-500 mt-1">{project.year}</p>
            </div>
            <div className="flex flex-wrap gap-2 justify-end max-w-xs">
              {project.techStack.map((tech) => (
                <span key={tech} className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-1 rounded-full">
                  {tech}
                </span>
              ))}
            </div>
          </div>
          
          <div className="mt-6 border-t pt-6">
            <ul className="space-y-4">
              {project.details.map((detail, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="flex-shrink-0 w-5 h-5 text-green-600 mr-3 mt-1" />
                  <span className="text-gray-700">{detail}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}