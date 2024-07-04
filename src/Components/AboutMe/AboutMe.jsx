import img2 from '../../assets/Images/about.gif'
import { Fade } from "react-awesome-reveal";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import './AboutMe.css'

const AboutMe = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);
    return (
        <div id='about' className="mt-[100px] lg:mx-[250px]">
            <div>
            <Fade direction={'up'}>
            <h1 className="text-center  font-bold text-3xl text-gradient ">About Me</h1>
          </Fade>
            
            {/* <h1 className="text-center  font-bold text-3xl">About Me</h1> */}
            <hr className='w-[160px] border-b-4 ml-[80px] border-purple-800 lg:ml-[300px] hover:border-double' />
            </div>
            <div className="hero min-h-screen">
  <div className="hero-content flex-col lg:flex-row">
    <img
      src={img2}
      className="max-w-sm rounded-lg shadow-2xl" />
    <div data-aos="fade-up">
     
      <p className="py-6 pl-[20px]">
     I am <span className='font-bold italic text-gradient'>Israt Jahn</span>, I am a dedicated web developer specializing in crafting dynamic and user-centric web applications. With a strong command of technologies such as React, Node.js, Express.js, HTML, CSS, Tailwind, and JavaScript, she excels in building responsive and visually engaging websites. Her expertise spans both front-end and back-end development, ensuring seamless and efficient user experiences. My attention to detail and commitment to excellence make her a valuable asset in any web development project.
      </p>
     
    </div>
  </div>
</div>
        </div>
    );
};

export default AboutMe;