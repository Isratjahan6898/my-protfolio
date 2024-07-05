import html5 from '../../assets/Image/HTML.png'
import css from '../../assets/Image/css.png'
import js from '../../assets/Image/JavaScript.png'
import react from '../../assets/Image/react.png'
import tailwind from '../../assets/Image/tailwind.png'
import bostrap from '../../assets/Image/Bootsrap.png'
import firebase from '../../assets/Image/firebase.png'
import mongodb from '../../assets/Image/mongo.png'
import node from '../../assets/Image/node (1).png'
import exprss from '../../assets/Image/express.png'
import { Fade } from 'react-awesome-reveal'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react'
import './Skill.css'

const Skills = () => {

  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);
    return (
        <div id='skill' className="mt-[60px] lg:mx-[200px]">
           <div>
            <Fade direction={'down'}>
            <h1 className="text-center  font-bold text-3xl text-gradient">Skills I Have</h1>
          </Fade>
            
            {/* <h1 className="text-center  font-bold text-3xl">About Me</h1> */}
            <hr className='w-[250px] border-b-4 ml-[40px] border-purple-800 lg:ml-[300px] hover:border-double' />
            </div>
            <div data-aos="zoom-in"  className='text-center grid grid-cols-2 lg:grid-cols-3 gap-[30px] justify-center items-center'>
            <div className="flex mt-[40px] items-center gap-4  rounded-sm px-1 m-[2px]">
              <img src={html5}  />
              <h3 className="font-semibold">HTML5</h3>
            </div>

            <div className="flex mt-[40px] items-center gap-4  rounded-sm px-1 m-[2px]">
              <img src={css}  />
              <h3 className="font-semibold">CSS</h3>
            </div>
            <div className="flex mt-[40px] items-center gap-4  rounded-sm px-1 m-[2px]">
              <img src={js}  />
              <h3 className="font-semibold">JavaScript</h3>
            </div>

            <div className="flex mt-[40px] items-center gap-4  rounded-sm px-1 m-[2px]">
              <img src={react}  />
              <h3 className="font-semibold">React.Js</h3>
            </div>

            <div className="flex mt-[40px] items-center gap-4  rounded-sm px-1 m-[2px]">
              <img src={tailwind}  />
              <h3 className="font-semibold">Tailwind CSS</h3>
            </div>

            <div className="flex mt-[40px] items-center gap-4  rounded-sm px-1 m-[2px]">
              <img src={bostrap}  />
              <h3 className="font-semibold">Bootstarp</h3>
            </div>

            <div className="flex mt-[40px] items-center gap-4  rounded-sm px-1 m-[2px]">
              <img src={firebase}  />
              <h3 className="font-semibold">Firebase</h3>
            </div>

            <div className="flex mt-[40px] items-center gap-4  rounded-sm px-1 m-[2px]">
              <img src={mongodb}  />
              <h3 className="font-semibold">Mongodb</h3>
            </div>

            <div className="flex mt-[40px] items-center gap-4  rounded-sm px-1 m-[2px]">
              <img src={exprss}  />
              <h3 className="font-semibold">Express.js</h3>
            </div>

            <div className="flex mt-[40px] items-center gap-4  rounded-sm px-1 m-[2px]">
              <img src={node}  />
              <h3 className="font-semibold">node.js</h3>
            </div>
            </div>
        </div>
    );
};

export default Skills;