import React from "react";
import { motion } from "framer-motion";
import { education } from "../assets/assets";
const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.2 }}
      id="education"
      className="py-20 bg-dark-100"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-4">
          My <span className="text-purple">Education</span>
        </h2>
        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
          My academic background and qualifications
        </p>

        {/* Timeline */}
        <div className="relative max-w-3xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-purple/30"></div>

          {education.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`relative flex items-center mb-12 ${
                index % 2 === 0 ? "flex-row" : "flex-row-reverse"
              }`}
            >
              {/* Content */}
              <div className="w-5/12">
                <div className="bg-dark-300 rounded-2xl p-6 hover:-translate-y-1 transition duration-300">
                  <span className="text-purple text-sm font-medium">
                    {item.year}
                  </span>
                  <h3 className="text-lg font-semibold mt-1 mb-2">
                    {item.degree}
                  </h3>
                  <p className="text-gray-400 text-sm">{item.institute}</p>
                </div>
              </div>

              {/* Dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-purple rounded-full border-4 border-dark-100"></div>

              {/* Empty space for opposite side */}
              <div className="w-5/12"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Education;
