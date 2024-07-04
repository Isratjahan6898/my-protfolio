import AboutMe from "../AboutMe/AboutMe";
import Banner from "../Banner/Banner";
import Contact from "../Contact/Contact";
import Education from "../Education/Education";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import Project from "../Project/Project";
import Skills from "../Skills/Skills";


const Home = () => {
    return (
        <div>
   <Navbar></Navbar>
    <Banner></Banner>
    <AboutMe></AboutMe>
    <Skills></Skills>

    <Education></Education>

    <Project></Project>
    <Contact></Contact>
    <Footer></Footer>
        </div>
    );
};

export default Home;