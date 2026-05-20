import React from "react";
import { motion } from "framer-motion";
import { assets } from "../assets/assets";
const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      id="about"
      className="py-10 bg-dark-200"
    >
      <div className="container mx-auto px-6">
        {/*Heading*/}
        <h2 className="text-3xl font-bold text-center mb-2">
          About
          <span className="text-purple">Me</span>
        </h2>
        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-4">
          Get to know more about my background and passion
        </p>

        {/*Image + my journey */}
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/*image */}
          <div className="md:w-1/2  max-w-sm mx-auto rounded-2xl overflow-hidden ">
            <motion.img
              src={assets.profileImg}
              alt="profile"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              viewport={{ once: false, amount: 0.2 }}
              className="w-full h-full object-cover"
            />
          </div>
          {/* text-content*/}
          <motion.div
            className="md:w-1/2"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.2 }}
          >
            <div className="rounded-2xl p-8">
              <h3 className="text-2xl font-semibold mb-3">My Journey</h3>
              <p className="text-gray-300 mb-3">
                I'm a final-year B.Tech CS student and full-stack developer
                passionate about building fast, functional, and user-friendly
                web applications. From designing database schemas to crafting
                clean UIs, I enjoy working across the entire stack.
              </p>
              <p className="text-gray-300 mb-3">
                I love learning by building real-world projects and am always
                exploring new technologies through personal projects and
                certifications.
              </p>
              <p className="text-gray-300 mb-3">
                Outside of coding, you'll find me reading books, cycling, or
                trekking sometimes. I'm a big fan of sitcoms and sci-fi and
                mystery films, and I recharge by spending time with friends and
                family.
              </p>
              <p className="text-gray-300 mb-3">
                Currently looking for opportunities to contribute and grow.
                Let's connect!
              </p>

              <div className="flex gap-4">
                <a
                  href="https://drive.google.com/file/d/16pgafgwXF8Fd1xh-s9x0BiQQ-SZwaS_l/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-purple rounded-lg font-medium hover:bg-purple/80 transition duration-300"
                >
                  📄 View My Resume
                </a>
                <a
                  href="#contact"
                  className="px-6 py-3 border border-purple rounded-lg font-medium hover:bg-purple/20 transition duration-300"
                >
                  💬 Contact Me
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
