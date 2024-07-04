import { FaGithub, FaLinkedin } from "react-icons/fa";



const Footer = () => {
    return (
        <div className="mt-[50px]">
            <section className="px-6 md:px-16 lg:px-40 py-6 md:py-10 flex flex-col md:flex-row justify-between items-center text-gray-800">
      <div className="flex flex-col md:flex-row items-center gap-4">
        <h1>Israt Jahan</h1>
      
        <h1 className="text-xs md:text-sm md:border-s-2 ps-2">
           Copyright © 2024 - All rights reserved
        </h1>
      </div>
      <p className="flex text-xl md:text-3xl gap-4 mt-4 md:mt-0">
        <a href="https://github.com/Isratjahan6898">
          <FaGithub></FaGithub>
        </a>
        <a href="https://www.linkedin.com/in/israt-jahan-9a68b923a/">
          <FaLinkedin></FaLinkedin>
        </a>
      </p>
    </section>
        </div>
    );
};

export default Footer;