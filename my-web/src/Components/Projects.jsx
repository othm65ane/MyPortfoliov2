import P1 from "../assets/Programming/P1.png"
import P2 from "../assets/Programming/P2.jpg"
import P3 from "../assets/Programming/P3.png"
import P4 from "../assets/Programming/P4.png"
import P5 from "../assets/Programming/P5.jpg"
import P6 from "../assets/Programming/P6.jpeg"
import P7 from "../assets/Programming/P7.jpg"
import P8 from "../assets/Programming/P8.png"
import P9 from "../assets/Programming/P9.jpg"
import white from "../assets/Programming/White.jpeg"
import {motion} from 'framer-motion'
import projects1 from "../assets/Projects/Projects1.png"
import projects2 from "../assets/Projects/projects2.png"
import projects3 from "../assets/Projects/projects3.jpg"
import projects4 from "../assets/Projects/projects4.png"
import projects5 from "../assets/Projects/projects5.jpg"
import projects6 from "../assets/Projects/projects6.jpg"
import { FaGithub } from "react-icons/fa6";

const projects = () => {
   const PROJECTS = [
    {
      title: "Dinner with Lahcen",
      image: projects6,
      description:
       "portfolio website involves showcasing my skills, experiences, and unique attributes in a way that resonates with your target audience" ,
      technologies1: P2,
      technologies2: P3,
      technologies3: P1,
      technologies4: P4,
      technologies5: P5,
      technologies6: P6,
      src : "https://github.com/othm65ane/react-P",
    },
    {
      title: "Portfolio Website",
      image: projects1,
      description:
       "portfolio website involves showcasing my skills, experiences, and unique attributes in a way that resonates with your target audience" ,
      technologies1: P2,
      technologies2: P3,
      technologies3: P1,
      technologies4: P4,
      technologies5: P5,
      technologies6: P6,
      src : "https://github.com/othm65ane/react-P",
    },
    {
      title: "AutomatorDev",
      image: projects2,
      description:
        "Delivering comprehensive web solutions with expertise in full-stack development, from dynamic front-end interfaces to robust back-end systems.",
        technologies1: P2,
        technologies2: P3,
        technologies3: P8,
        technologies4: P4,
        technologies5: P5,
        technologies6: P6,
        src : "https://github.com/othm65ane/AutomatorDev",
    },
    {
      title: "BE THINK INNOVATE !",
      image: projects3,
      description:
      "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles."
      ,
      technologies1:  P2,
      technologies2: P3,
      technologies3: P1,
      technologies4: white,
      technologies5: white,
      technologies6: white,
      src : "https://github.com/othm65ane/PhotoEditor",
    },
    {
      title: "PhoEditor",
      image: projects4,
      description:
       "A fully functional Editor website , to adjust and contrast the pictures , with filter , Make your pic. ",
      technologies1:  P2,
      technologies2: P3,
      technologies3: P1,
      technologies4: white,
      technologies5: white,
      technologies6: white,
      src : "https://github.com/othm65ane/PhotoEditor",
    },
    {
      title: "MyBurger",
      image: projects5,
      description:
        "A fully functional Food website with features like Burger, Big Burger.",
      technologies1 : P9,
      technologies2: P2,
      technologies3: P3,
      technologies4: white,
      technologies5: white,
      technologies6: white,
      src : "https://github.com/othm65ane/PhotoEditor",
    },
  ];
    return (
       <div className="pb-4 text-black ">
        <motion.h2
        initial = {{y : -100 , opacity : 0}}
        whileInView={{y : 0 , opacity : 1}}
        transition={{duration : 0.8}}
        viewport={{once : true}}
        className="my-20 text-center text-4xl">
            Recent Projects
        </motion.h2>
        <div>{PROJECTS.map((projects , index) => (
<div key={index} className='mb-8 flex flex-wrap lg:justify-center'>
    <motion.div 
    initial={{opacity : 0 , x : -100}}
    whileInView={{opacity : 1 , x : 0}}
    transition={{duration : 0.7}}
    viewport={{once : true}}

    className='w-full lg:w-1/4 '>
    <img 
    src={projects.image} 
    alt={projects.title}
    height={200}
    width={250}
    className='mb-6 rounded ml-[15px]'
    />
    </motion.div>
    <motion.div
    initial={{opacity : 0 , x : 100}}
    whileInView={{opacity : 1 , x : 0}}
    transition={{duration : 0.7}}
    viewport={{once : true}}
    className='w-full max-w-xl lg:3/4 ml-[15px]'>
        <h6 className='mb-2 text-2xl flex justify-between '>{projects.title} <a href={projects.src}><FaGithub className="text-xl"/></a></h6>
        <h6 className='mb-4 text-neutral-400'>{projects.description}</h6>
        <div className="flex">
        <img src={projects.technologies1}
        width={25}
        />
        <img src={projects.technologies2}
        width={25}
        className="ml-4"
        />
        <img src={projects.technologies3}
        width={25}
        className=" ml-4"
        /><img src={projects.technologies4}
        width={25}
        className=" ml-4"
        /><img src={projects.technologies5}
        width={30}
        height={20}
        className=" ml-4"
        /><img src={projects.technologies6}
        width={25}
        className=" ml-4"
        />
        </div>
    </motion.div>
</div>

        ))}
        </div>
        <motion.h2
        initial = {{y : -100 , opacity : 0}}
        whileInView={{y : 0 , opacity : 1}}
        transition={{duration : 0.8}}
        viewport={{once : true}}
        className="my-20 text-center text-4xl">
            Other Projects
        </motion.h2>
        <div className="text-center">
        <h1 className="mb-2 text-2xl">
          Tic-Tac-Toe Game
          <a href="https://github.com/othm65ane/Tic-Tac-Toe-Game-"><FaGithub/></a>
        </h1>
        <p className="mb-4 text-neutral-400">
        This is a simple implementation of the classic game Tic Tac Toe, written in C. The game allows two players to play against each other on a 3x3 grid, taking turns to place their marks (X or O) until one player wins or the game ends in a draw.
        </p>
        <div className="ml-[70vh]">
        <img src={P7} 
        width={25}
        alt="" />
        </div>
        </div>
       </div>
    )
}

export default projects
