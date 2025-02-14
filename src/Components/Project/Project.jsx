import blood4life from '../../assets/Project/screencapture-blood-donetion-web-app-2024-07-03-23_03_42.png'

import glowbloom from '../../assets/Project/screencapture-glowbloom-project-web-app-2024-07-03-23_09_22 (1).png'

import devaintart from '../../assets/Project/screencapture-deviantart-project-web-app-2024-07-03-23_09_10.png'
import { Fade } from 'react-awesome-reveal';
const Project = () => {
    return (
        <div id='project' className="mt-[150px] mx-[50px]  lg:mx-[100px] mb-[50px]">
              <div className="mb-[60px]">
            <Fade direction={'down'}>
            <h1 className="text-center  font-bold text-3xl text-gradient">My Projects</h1>
          </Fade>
            
            {/* <h1 className="text-center  font-bold text-3xl">About Me</h1> */}
            <hr className='w-[250px] border-b-4 ml-[0px] border-purple-800 lg:ml-[400px] hover:border-double' />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-[20px]">
             <div>
                {/* project 1 */}
                <Fade direction={'left'}>

                <div className="hero h-full lg:h-[490px] border ">
  <div className="hero-content flex-col  lg:flex-row">
    <img
      src={blood4life}
      className="w-[100px] rounded-lg shadow-2xl" />
    <div className='ml-[20px]'>
      <h1 className="text-3xl font-bold text-gradient">Blood4Life</h1>
      <p className="py-6">
        <span>Features:</span>
        <ul className='list-disc'>
            <li>Integrated with Stripe for secure payment processing.</li>
            <li>Comprehensive dashboard for admins to manage donations and users.</li>
            <li>Real-time updates of donation data to keep you informed.</li>
        </ul>
      </p>
      <p className="py-6">
        <span>Technology: Html, Css, tailwind, react.js, firebase, mongodb, node.js, express.js, stripe</span>
      </p>
      <a href="https://github.com/Isratjahan6898/blood-for-life-client">
       <button className='btn bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white font-bold'>Github Link</button>
      </a>

      <a href="https://blood-donetion.web.app/">
       <button className='btn bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white font-bold'>Live Link</button>
      </a>

    </div>
  </div>
</div>
</Fade>
             </div>

             <div>
                {/* project-2 */}
                <Fade direction={'left'}>

                <div className="hero h-full lg:h-[490px] border">
  <div className="hero-content flex-col lg:flex-row">
    <img
      src={glowbloom}
      className="w-[100px] rounded-lg shadow-2xl" />
    <div className='ml-[20px]'>
      <h1 className="text-3xl font-bold text-gradient">GlowBloom</h1>
      <p className="py-6">
        <span>Features:</span>
        <ul className='list-disc'>
            <li>Explore a vast library of articles, tutorials, and resources covering a wide range of topics.</li>
            <li>Engage in live workshops and webinars led by industry experts, fostering hands-on learning experiences.</li>
            <li>Connect with like-minded individuals, ask questions, share insights, and collaborate on projects.</li>
        </ul>
      </p>
      <p className="py-6">
        <span>Technology:</span>
        Html, Css, tailwind, react.js, firebase, mongodb, node.js, express.js
      </p>
      <a href="https://github.com/Isratjahan6898/glowBloom-client">
       <button className='btn bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white font-bold'>Github Link</button>
      </a>

      <a href="https://glowbloom-project.web.app/">
       <button className='btn bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white font-bold'>Live Link</button>
      </a>

    </div>
  </div>
</div>
</Fade>
             </div>

             
            </div>


            <div className="flex justify-center items-center">
            <Fade direction={'left'}>
            <div className="hero h-full lg:h-[490px] border mt-[40px] w-[550px]">
  <div className="hero-content flex-col lg:flex-row">
    <img
      src={devaintart}
      className="w-[100px] rounded-lg shadow-2xl" />
    <div className='ml-[20px]'>
      <h1 className="text-3xl font-bold text-gradient">DeviantArt</h1>
      <p className="py-6">
        <span>Features:</span>
        <ul className='list-disc'>
            <li>Showcase your digital artwork in a visually appealing gallery format.</li>
            <li>Personalize your profile with a unique avatar, banner, and bio to reflect your style and personality.</li>
            <li>Engage with your audience by allowing comments and feedback on your artwork, fostering a sense of community.</li>
        </ul>
      </p>
      <p className="py-6">
        <span>Technology: Html, Css, tailwind, react.js, firebase, mongodb, node.js, express.js</span>
      </p>

      <a href="https://github.com/Isratjahan6898/deviantArt-client">
       <button className='btn bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white font-bold'>Github Link</button>
      </a>

      <a href="https://deviantart-project.web.app/">
       <button className='btn bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white font-bold'>Live Link</button>
      </a>

     
      
    </div>
  </div>
</div>
</Fade>
            </div>
        </div>
    );
};

export default Project;