import React from "react";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaHackerrank,
  FaLinkedin,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa6";
const Contact = () => {
  const formRef = useRef();
  const [status, setStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      )
      .then(() => {
        setStatus("Message sent successfully!");
        formRef.current.reset();
      })
      .catch(() => {
        setStatus("Something went wrong. Please try again.");
      });
  };
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.2 }}
      id="contact"
      className="py-20 bg-dark-200"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-4">
          Get In
          <span className="text-purple">Touch</span>
        </h2>
        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
          Have a project in mind or want to collaborate? Let's talk!
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/*Contact Form */}
          <div>
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-300 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  name="fromname"
                  className="w-full bg-dark-300 border border-dark-400 rounded-lg px-4 py-3 outline-none"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-300 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  name="fromemail"
                  className="w-full bg-dark-300 border border-dark-400 rounded-lg px-4 py-3 outline-none"
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-gray-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  className="w-full bg-dark-300 border border-dark-400 rounded-lg px-4 py-3 outline-none"
                />
              </div>
              <div>
                <label htmlFor="Message" className="block text-gray-300 mb-2">
                  Your Message
                </label>
                <textarea
                  type="text"
                  name="message"
                  className="w-full bg-dark-300  h-40 border border-dark-400 rounded-lg px-4 py-3 outline-none"
                />
              </div>
              <button
                type="submit"
                className="w-full px-6 py-3 bg-purple rounded-lg font-medium hover:bg-purple/60 transition duration-300"
              >
                Send Message
              </button>
              {status && <p className="text-purple mt-2">{status}</p>}
            </form>
          </div>
          {/*Contact information*/}
          <div className="space-y-8">
            <div className="flex items-start">
              <div className="text-purple text-2xl mr-4">
                <FaEnvelope />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Email</h3>
                <a
                  href="mailto:niveditabedarkar@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple underline hover:text-purple/70 transition duration-300"
                >
                  niveditabedarkar@gmail.com
                </a>
              </div>
            </div>
            <div className="flex items-start">
              <div className="text-purple text-2xl mr-4">
                <FaGithub />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Github</h3>
                <a
                  href="https://github.com/devxniv"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple underline hover:text-purple/70 transition duration-300"
                >
                  github.com/devxniv
                </a>
              </div>
            </div>
            <div className="flex items-start">
              <div className="text-purple text-2xl mr-4">
                <FaLinkedin />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">LinkedIn</h3>
                <a
                  href="https://linkedin.com/in/niv-bedarkar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple underline hover:text-purple/70 transition duration-300"
                >
                  linkedin.com/in/niv-bedarkar
                </a>
              </div>
            </div>
            <div className="flex items-start">
              <div className="text-purple text-2xl mr-4">
                <FaHackerrank />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Hackerrank</h3>
                <a
                  href="https://www.hackerrank.com/profile/niveditabedarkar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple underline hover:text-purple/70 transition duration-300"
                >
                  hackerrank.com/niveditabedarkar
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
