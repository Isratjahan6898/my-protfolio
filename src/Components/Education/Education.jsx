import { Fade } from "react-awesome-reveal";


const Education = () => {
    return (
        <div id="education" className="lg:mx-[200px] mt-[100px]">
           <div className="mb-[60px]">
            <Fade direction={'down'}>
            <h1 className="text-center  font-bold text-3xl text-gradient">Education</h1>
          </Fade>
            
            {/* <h1 className="text-center  font-bold text-3xl">About Me</h1> */}
            <hr className='w-[250px] border-b-4 ml-[40px] border-purple-800 lg:ml-[300px] hover:border-double' />
            </div>

            <div className="flex flex-col lg:flex-row gap-[30px]">
                <div>
                <Fade direction={'left'}>
                <div className="card bg-base-100 w-96 shadow-xl">
  <div className="card-body">
   
   <h2 className="card-title">Secondary School Certificate (SSC)</h2>
   <ul>
    <li><span>Institution: </span>Mirpur Bangla School & College</li>
    <li><span>Field of Study: </span>Science</li>
    <li><span>GPA: </span>5</li>
    <li><span>Year of Completion: </span>2014</li>
   </ul>
  
   
  </div>
</div>
</Fade>
                </div>

                <div>
                <Fade direction={'right'}>
                <div className="card bg-base-100 w-96 shadow-xl">
  <div className="card-body">
    <h2 className="card-title">Higher Secondary Certificate (HSC)</h2>
    <ul>
    <li><span>Institution:Dhaka City College </span></li>
    <li><span>Field of Study: </span>Science</li>
    <li><span>GPA: </span>5</li>
    <li><span>Year of Completion: </span>2016</li>
   </ul>
    
   
  </div>
</div>
</Fade>
                </div>
                
            </div>


            <div className="flex text-center items-center justify-center mt-[40px]">
            <Fade direction={'down'}>
            <div className="card bg-base-100 w-96 shadow-xl">
  <div className="card-body">
    <h2 className="card-title">Bachelor of Science in Computer Science and Engineering (BSc in CSE)</h2>
    <ul>
    <li><span>Institution: </span>Dhaka City Colege</li>
    
    <li><span>CGPA: </span>3.50</li>
    <li><span>Year of Completion: </span>2022</li>
   </ul>
  
  </div>
</div>
</Fade>

            </div>

        </div>
    );
};

export default Education;