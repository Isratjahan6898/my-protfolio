

const Education = () => {
    return (
        <div className="mx-[200px] mt-[100px]">
            <h1 className="text-center mt-[100px] mb-[80px]">Education</h1>

            <div className="flex gap-[30px]">
                <div>
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
                </div>

                <div>
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
                </div>
            </div>


            <div className="flex text-center items-center justify-center mt-[40px]">
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
            </div>

        </div>
    );
};

export default Education;