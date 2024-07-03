import img2 from '../../assets/Images/about.gif'

const AboutMe = () => {
    return (
        <div className="mt-[100px] mx-[250px]">
            <h1 className="text-center">About Me</h1>
            <div className="hero  min-h-screen">
  <div className="hero-content flex-col  lg:flex-row">
    <img
      src={img2}
      className="max-w-sm rounded-lg shadow-2xl" />
    <div>
     
      <p className="py-6 pl-[20px]">
      Israt Jahan is a dedicated web developer specializing in crafting dynamic and user-centric web applications. With a strong command of technologies such as React, Node.js, Express.js, HTML, CSS, Tailwind, and JavaScript, she excels in building responsive and visually engaging websites. Her expertise spans both front-end and back-end development, ensuring seamless and efficient user experiences. Israt's attention to detail and commitment to excellence make her a valuable asset in any web development project.
      </p>
     
    </div>
  </div>
</div>
        </div>
    );
};

export default AboutMe;