
import img1 from '../../assets/Image/israt.jpg'

import resume from '../../assets/resume/israt jahan resume.pdf'
import './Banner.css'
import Typewriter from 'typewriter-effect';
const Banner = () => {
    return (
        <div>
            <div className="hero h-[500px]">
  <div className="hero-content flex-col lg:flex-row-reverse lg:px-[150px] gap-[60px]">
    <img
      src={img1}
      className="max-w-sm rounded-full  h-[250px] w-[350px] shadow-2xl" />
    <div>
      <h1 className="text-3xl font-bold">Hi,I am <span className='text-gradient'>Israt Jahan</span>  </h1>
      <h1 className="text-3xl font-bold">
      <Typewriter
        options={{
          strings: [ 'Web Developer.....', 'Front-End-Developer....'],
          autoStart: true,
          loop: true,
        }}
      />
      </h1>
      <p className="lg:py-6">
      I am a front-end developer specializing in creating responsive, <br></br>user-friendly interfaces with HTML, CSS, and JavaScript for optimal user experiences
      </p>

      <div>

        <a href={resume} download=''>
        <button className='btn bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white font-bold'> download resume</button>
        </a>
        {/* <button className='btn'> download resume</button> */}
      </div>
     
    </div>
  </div>
</div>
        </div>
    );
};

export default Banner;