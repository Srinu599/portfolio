import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  useEffect(() => {
    // Initialize EmailJS with your user ID
    emailjs.init("p5-pu1iEJlpdCMCfQ"); // Replace with your EmailJS user ID
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');

    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_email: 'seenubathula99@gmail.com'
      };

      // Send email using EmailJS
      await emailjs.send(
        'service_n5lv33b', // Replace with your EmailJS service ID
        'template_i3qogf9', // Replace with your EmailJS template ID
        templateParams
      );

      setSubmitSuccess(true);
      setTimeout(() => {
        setSubmitSuccess(false);
        setFormData({ name: '', email: '', message: '' });
      }, 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitError('An unexpected error occurred. Please try again later.');
    }

    setIsSubmitting(false);
  };

  return (
    <section className="py-16 bg-gradient-to-br from-purple-900 to-indigo-900 text-white" id='contact'>
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold text-center mb-8"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Contact Me
        </motion.h2>
        <motion.p
          className="text-center text-xl mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          I'd love to hear from you! Whether you have a question, feedback, or just want to connect, feel free to reach out.
        </motion.p>
        <AnimatePresence>
          {!submitSuccess && (
            <motion.form
              className="max-w-lg mx-auto bg-white/10 backdrop-blur-md p-8 rounded-lg shadow-lg"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5 }}
              onSubmit={handleSubmit}
            >
              <div className="space-y-6">
                <motion.div
                  className="relative"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Name"
                    className="w-full px-4 py-3 bg-transparent border-2 border-pink-500 rounded-md text-white placeholder-pink-300 focus:outline-none focus:border-pink-300 transition-colors"
                    required
                  />
                </motion.div>
                <motion.div
                  className="relative"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                    className="w-full px-4 py-3 bg-transparent border-2 border-pink-500 rounded-md text-white placeholder-pink-300 focus:outline-none focus:border-pink-300 transition-colors"
                    required
                  />
                </motion.div>
                <motion.div
                  className="relative"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Message"
                    rows={4}
                    className="w-full px-4 py-3 bg-transparent border-2 border-pink-500 rounded-md text-white placeholder-pink-300 focus:outline-none focus:border-pink-300 transition-colors"
                    required
                  ></textarea>
                </motion.div>
              </div>
              {submitError && (
                <p className="text-red-500 mt-4">{submitError}</p>
              )}
              <motion.button
                type="submit"
                className="w-full mt-8 py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold rounded-md hover:from-pink-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500 disabled:opacity-50"
                whileHover={{
                  boxShadow: "0 0 15px rgb(236, 72, 153)",
                }}
                whileTap={{ scale: 0.95 }}
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </motion.button>
            </motion.form>
          )}
          {submitSuccess && (
            <motion.div
              className="max-w-lg mx-auto bg-green-500 p-8 rounded-lg shadow-lg text-white text-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-2xl font-bold mb-4">Message Sent Successfully!</h3>
              <p>Thank you for reaching out. I'll get back to you soon.</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ContactSection;
