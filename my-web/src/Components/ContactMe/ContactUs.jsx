import { motion } from 'framer-motion'
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';


function ContactUs() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_uwg6u9c', 'template_5cfpgeq', form.current, {
        publicKey: 'qiV30UuQyq6fzaS3Q',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
    return (
    
       <section className="bg-white dark:bg-gray-900 flex justify-between">
  <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
      <motion.h2 
      initial={{y : -80, opacity : 0}}
      whileInView={{y : 0, opacity : 1}}
      transition={{duration : 0.8}}
      viewport={{once : true}}
      className="mb-4 text-4xl tracking-tight font-bold text-center text-gray-900 dark:text-white">
        Contact Us
      </motion.h2>
      <motion.p 
      initial={{y : -80, opacity : 0}}
      whileInView={{y : 0, opacity : 1}}
      transition={{duration : 0.9}}
      viewport={{once : true}}
      className="mb-8 lg:mb-16  text-center text-gray-500 dark:text-gray-400 sm:text-xl">Got a technical issue? Want to send feedback about a beta feature? Need details about our Business plan? Let us know.</motion.p>
      <form  ref={form} onSubmit={sendEmail} action="#" className="space-y-8">
          <motion.div
           initial={{y : -90, opacity : 0}}
           whileInView={{y : 0, opacity : 1}}
           transition={{duration : 1}}>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
              <input type="email" id="email" name='user_email' className="shadow-sm outline-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="name@flowbite.com" required />
          </motion.div>
          <motion.div
          initial={{y : -100, opacity : 0}}
          whileInView={{y : 0, opacity : 1}}
          transition={{duration : 1}}
          >
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Subject</label>
              <input type="text" id="subject" name='user_name' className="block outline-none p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Let us know how we can help you" required />
          </motion.div>
          <motion.div className="sm:col-span-2"
          initial={{y : -120, opacity : 0}}
          whileInView={{y : 0, opacity : 1}}
          transition={{duration : 1}}
          >
              <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your message</label>
              <textarea id="message" name="message"  className="block outline-none p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..."></textarea>
          </motion.div>
          <motion.button
          initial={{y : -80, opacity : 0}}
          whileInView={{y : 0, opacity : 1}}
          transition={{duration : 1}}
          href="#"
        className="rounded-full hidden md:block bg-black p-3 text-white font-semibold"
        onClick={() => window.location.assign("/")}
      >
        Send
      </motion.button>
      </form>
  </div>
</section>
    
    )
  }
  
  export default ContactUs