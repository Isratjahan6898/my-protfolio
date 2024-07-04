
import { Link } from 'react-scroll';
import './Navbar.css'


const Navbar = () => {
    return (
        <div>
           <div className="navbar fixed z-10 bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
       
        <p className="mb-[10px] font-bold">About Me</p>
       
        <p className="mb-[10px] font-bold">Skills</p>
       
        <p className="mb-[10px] font-bold">Education</p>
       
        <p className="mb-[10px] font-bold">Project</p>
       
        <p className="mb-[10px] font-bold">Contact Us</p>
       

     
      
      </ul>
    </div>
    <a className="btn btn-ghost text-xl text-gradient font-extrabold text-4xl italic">CodeCraft by Israt</a>
  </div>
  <div className="navbar-end hidden lg:flex">
    <ul className="menu menu-horizontal px-1">

 
    <p className="flex space-x-4 p-4 ">
        <Link to="about"   spy={true} 
        smooth={true} offset={-100} 
        duration={500}
        
        
        className="cursor-pointer mr-[20px] font-bold"
        activeClass="text-[#80277D] text-1xl border-b-2 border-purple-900"
        >
          About
        </Link>
        <Link to="skill"   spy={true} smooth={true} offset={-100} duration={500} className="cursor-pointer mr-[20px] font-bold"
        activeClass="text-[#80277D] text-1xl border-b-2 border-purple-900">
          skills
        </Link>
        <Link to="education"   spy={true} smooth={true} offset={-100} duration={500} className="cursor-pointer mr-[20px] font-bold"
        activeClass="text-[#80277D] text-1xl border-b-2 border-purple-900">
          Education
        </Link>
        <Link to="project"   spy={true} smooth={true} offset={-100} duration={500} className="cursor-pointer mr-[20px] font-bold"
        activeClass="text-[#80277D] text-1xl border-b-2 border-purple-900">
          Projects
        </Link>
        <Link to="contact"   spy={true} smooth={true} offset={-150} duration={500} className=" cursor-pointer mr-[20px] bg-none font-bold"
        activeClass="text-[#80277D] text-1xl border-b-2 border-purple-900">
          Contact Us
        </Link>
      </p>

      
    </ul>
  </div>
 
</div>
        </div>
    );
};

export default Navbar;