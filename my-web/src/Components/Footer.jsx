import { useInView , motion } from "framer-motion"
import { useRef } from "react";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";

export default function Footer() {
  const ref = useRef(null)
  const isInView = useInView(ref)

  const variants = {
    hidden: { opacity: 0, y: 15 },
    show: { opacity: 1, y: 0, transition: { type: "Inertia" , delay:0.2} },
  }


  return (
    <div className=" bg-[#F2F2F2] border-t border-zinc-200">

        <section className="container px-5 sm:px-7 py-8 sm:py-10 mx-auto lg:max-w-[1280px]">
          <motion.div 
            ref={ref}
            animate={isInView ? "show" : "hidden"}
            variants={variants}
            className="flex flex-col sm:flex-row gap-y-5 items-center justify-between "
          >
            <div className=" text-xs text-center order-1 sm:order-none  ">© {new Date().getFullYear()} Othmane Charfaoui. All rights reserved.</div>
            <div className=" text-xs text-center ">Made with <span className="text-[10px]">🖤</span> and <span className="text-[10px]">☕️</span> by <a href="#">Othmane</a></div>
            <div className="flex">
              <a href="https://github.com/othm65ane" className="ml-2 text-2xl"><FaGithub /></a>
              <a href="" className="ml-2 text-2xl"><FaInstagram /></a>
              <a href="https://www.linkedin.com/in/othmane-charfaoui-3b2511284/" className="ml-2 text-2xl"><FaLinkedin /></a>
            </div>
          </motion.div>
        </section>

    </div>
  )    
}