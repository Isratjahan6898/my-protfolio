import AboutMe from "../AboutMe/AboutMe";
import Banner from "../Banner/Banner";
import Contact from "../Contact/Contact";
import Education from "../Education/Education";
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
        </div>
    );
};

export default Home;