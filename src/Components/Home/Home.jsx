import AboutMe from "../AboutMe/AboutMe";
import Banner from "../Banner/Banner";
import Education from "../Education/Education";
import Navbar from "../Navbar/Navbar";
import Skills from "../Skills/Skills";


const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
    <Banner></Banner>
    <AboutMe></AboutMe>
    <Skills></Skills>

    <Education></Education>
        </div>
    );
};

export default Home;