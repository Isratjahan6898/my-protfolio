

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
    <li><span>Institution: </span></li>
    <li><span>Field of Study </span></li>
    <li><span>GPA: </span></li>
    <li><span>Year of Completion </span></li>
   </ul>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
                </div>

                <div>
                <div className="card bg-base-100 w-96 shadow-xl">
  <div className="card-body">
    <h2 className="card-title">Higher Secondary Certificate (HSC)</h2>
    <ul>
    <li><span>Institution: </span></li>
    <li><span>Field of Study </span></li>
    <li><span>GPA: </span></li>
    <li><span>Year of Completion </span></li>
   </ul>
    
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
                </div>
            </div>


            <div className="flex text-center items-center justify-center mt-[40px]">
            <div className="card bg-base-100 w-96 shadow-xl">
  <div className="card-body">
    <h2 className="card-title">Bachelor of Science in Computer Science and Engineering (BSc in CSE)</h2>
    <ul>
    <li><span>Institution: </span></li>
    
    <li><span>CGPA: </span></li>
    <li><span>Year of Completion </span></li>
   </ul>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
            </div>

        </div>
    );
};

export default Education;