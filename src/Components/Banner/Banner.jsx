
import img1 from '../../assets/Image/israt.jpg'
const Banner = () => {
    return (
        <div>
            <div className="hero h-[500px]">
  <div className="hero-content flex-col lg:flex-row-reverse px-[150px] gap-[60px]">
    <img
      src={img1}
      className="max-w-sm rounded-full  h-[250px] w-[350px] shadow-2xl" />
    <div>
      <h1 className="text-3xl font-bold">Hi, I am Israt Jahan</h1>
      <h1 className="text-3xl font-bold">Web Developer</h1>
      <p className="py-6">
      I am a front-end developer specializing in creating responsive, user-friendly interfaces with HTML, CSS, and JavaScript for optimal user experiences
      </p>

      <div>
        <button className='btn'> download resume</button>
      </div>
     
    </div>
  </div>
</div>
        </div>
    );
};

export default Banner;