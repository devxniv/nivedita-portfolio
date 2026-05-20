import React from "react";
import { motion } from "framer-motion";
import { certifications } from "../assets/assets";
import { FaExternalLinkAlt } from "react-icons/fa";

const Certifications = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      id="certifications"
      className="py-20 bg-dark-200"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-4">
          My <span className="text-purple">Certifications</span>
        </h2>
        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
          Credentials and achievements I've earned along the way
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-dark-300 rounded-2xl p-6 hover:-translate-y-1 transition duration-300 flex flex-col justify-between"
            >
              <div>
                <p className="text-purple text-sm font-medium mb-2">
                  {cert.from}
                </p>
                <h3 className="text-lg font-semibold mb-4">{cert.name}</h3>
              </div>
              <a
                href={cert.credential}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-purple underline hover:text-purple/70 transition duration-300"
              >
                View Credential <FaExternalLinkAlt className="text-xs" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Certifications;
