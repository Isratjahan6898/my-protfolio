import { NavLink } from "react-router-dom";
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
        <NavLink>
        <p className="mb-[10px] font-bold">About Me</p>
        </NavLink>

        <NavLink>
        <p className="mb-[10px] font-bold">Skills</p>
        </NavLink>
        <NavLink>
        <p className="mb-[10px] font-bold">Education</p>
        </NavLink>

        <NavLink>
        <p className="mb-[10px] font-bold">Project</p>
        </NavLink>
        <NavLink>
        <p className="mb-[10px] font-bold">Contact Us</p>
        </NavLink>

     
      
      </ul>
    </div>
    <a className="btn btn-ghost text-xl text-gradient font-extrabold text-4xl italic">CodeCraft by Israt</a>
  </div>
  <div className="navbar-end hidden lg:flex">
    <ul className="menu menu-horizontal px-1">

      
      <NavLink to='about'>
      <p className="mr-[20px] font-bold">About Me</p>
      </NavLink>
      <NavLink>

      </NavLink>
      <NavLink>
      <p className="mr-[20px] font-bold">Education</p>
      </NavLink>
     <NavLink>
     <p className="mr-[20px] font-bold">Project</p>
     </NavLink>
      <NavLink>
      <p className="mr-[20px] font-bold">Contact Us</p>
      </NavLink>
    </ul>
  </div>
 
</div>
        </div>
    );
};

export default Navbar;