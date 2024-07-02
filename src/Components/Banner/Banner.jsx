
import img1 from '../../assets/Image/israt.jpg'
const Banner = () => {
    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img
      src={img1}
      className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-3xl font-bold">Hi, I am Israt Jahan</h1>
      <h1 className="text-3xl font-bold">Web Developer</h1>
      <p className="py-6">
      I am a front-end developer specializing in creating responsive, user-friendly interfaces with HTML, CSS, and JavaScript for optimal user experiences
      </p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Banner;