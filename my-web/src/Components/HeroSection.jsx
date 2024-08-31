import { motion } from "framer-motion";
import P1 from "../assets/Programming/P1.png"
import P2 from "../assets/Programming/P2.jpg"
import P3 from "../assets/Programming/P3.png"
import P4 from "../assets/Programming/P4.png"
import P5 from "../assets/Programming/P5.jpg"
import P6 from "../assets/Programming/P6.jpeg"
import P7 from "../assets/Programming/P7.jpg"
import P8 from "../assets/Programming/P8.png"
import P9 from "../assets/Programming/P9.jpg"
import P10 from "../assets/Programming/P10.png"
import P11 from "../assets/Programming/P11.jpeg"
import P12 from "../assets/Programming/P12.jpg"
import P13 from "../assets/Programming/P13.jpg"
import P from "../Components/P.png";
import mouse from "../Components/mouse.jpeg";
import Marquee  from "react-fast-marquee";


 const Hero = () => {

  return (
    <div >
      <div className=" h-[100vh] flex justify-center items-center flex-col ">
      <p className="text-xl font-light">Othmane Charfaoui</p>
        <motion.h1
        initial = {{opacity : 0}}
        whileInView={{opacity : 1}}
        transition={{duration : 1.2}}
        className="text-8xl font-bold">Ui Desiegner , </motion.h1>
        <motion.h1 
         initial = {{opacity : 0}}
         whileInView={{opacity : 1}}
         transition={{duration : 1.2}}
        className="ml-[250px] text-8xl font-bold bg-black text-white ">Developer .</motion.h1>
        <img src={mouse}
        width={25}
        className="mt-[200px]"
        />
      </div>
      <motion.div
       initial = {{y : -100 , opacity : 0}}
       whileInView={{y : 0 , opacity : 1}}
       transition={{duration : 0.8}}
       viewport={{once : true}}
      className="h-[105vh] flex justify-center items-center">
        <img src={P} 
        initial = {{opacity : 0}}
        whileInView={{opacity : 1}}
        transition={{duration : 1.2}}
        width={700}
        alt="" />
      </motion.div>
      <div className="h-[250px]">
      <motion.h2
        initial = {{y : -100 , opacity : 0}}
        whileInView={{y : 0 , opacity : 1}}
        transition={{duration : 0.8}}
        viewport={{once : true}}
        className="my-20 text-center text-4xl">
            Skills
        </motion.h2>
        <div>
          <Marquee>
            <div>
              <img src={P1}
              width={50}
              className="ml-[50px]"

              />
            </div>
            <div>
              <img src={P2}
              width={50}
              className="ml-[50px]"
              />
            </div><div>
              <img src={P3}
              width={45}
              className="ml-[50px]"

              />
            </div><div>
              <img src={P4}
              className="ml-[50px]"
              width={50}
              />
            </div><div>
              <img src={P5}
              className="ml-[50px]"
              width={50}
              />
            </div><div>
              <img src={P6}
              className="ml-[50px]"
              width={50}
              />
            </div><div>
              <img src={P7}
              className="ml-[50px]"
              width={50}
              />
            </div><div>
              <img src={P8}
              className="ml-[50px]"
              width={50}
              />
            </div><div>
              <img src={P9}
              className="ml-[50px]"
              width={35}
              />
            </div><div>
              <img src={P10}
              className="ml-[50px]"
              width={50}
              />
            </div><div>
              <img src={P11}
              className="ml-[50px]"
              width={50}
              />
              </div><div>
              <img src={P12}
              className="ml-[50px]"
              width={50}
              />
            </div><div>
              <img src={P13}
              className="ml-[50px]"
              width={50}
              />
            </div>
          </Marquee>
        </div>
      </div>
    </div>
  )
}

export default Hero