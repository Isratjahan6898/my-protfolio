import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
import AOS from "aos";
import { useEffect } from "react";
import { useState } from "react";
import toast from "react-hot-toast";
import { CiMail } from "react-icons/ci";
import { FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import { Button, TextField } from "@mui/material";
import './Contact.css'


const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        // EmailJs service ID, template ID, public key
        const serviceId = "service_ga4au47";
        const templateId = "template_0zfi2em";
        const publicKey = "5o6ZZatYE4dvpo-Yz";
    
        // new object
        const templateParams = {
          from_name: name,
          from_email: email,
          to_name: "IsraT Jahan",
          message: message,
        };
    
        console.log(templateParams);
    
        // send email to emailjs
        emailjs
          .send(serviceId, templateId, templateParams, publicKey)
          .then((res) => {
            console.log("email sent", res);
            toast.success("email send");
            setName("");
            setEmail("");
            setMessage("");
          })
          .catch((err) => {
            console.log("error sending mail", err);
          });
      };
    
      useEffect(() => {
        AOS.init();
        AOS.refresh();
    
        return () => {
          AOS.refresh();
        };
      }, []);
    return (
        <div id="contact" className="mt-[100px] ">
          
          

          <h1 data-aos="fade-up" className="text-center  font-bold text-3xl text-gradient">
        Contact Me
      </h1>
      <hr className='w-[200px] border-b-4 ml-[80px] border-purple-800 lg:ml-[530px] hover:border-double' />
          

            <div>

           
            <section
      
      className="flex flex-col w-full justify-center items-center m-auto pt-20 text-gray-800"
    >
  
      <div className="grid grid-cols-1 md:grid-cols-2 items-center lg:space-x-6 space-y-6 lg:space-y-0 w-full max-w-7xl p-8 sm:p-12 rounded-3xl shadow-lg overflow-hidden bg-brown-50">
        <div className="space-y-20">
          <div>
            <h1 className="text-4xl font-bold mb-2 text-gradient">Get In Touch</h1>
            <p>
              Would you like to communicate with me? If so, please send me a
              note. I like hearing from you!
            </p>
          </div>
          <div className="space-y-3 text-xl">
            <div className="flex gap-2 items-center">
              <FaPhone /> +8801713870700
            </div>
            <div className="flex gap-2 items-center">
              <CiMail />israt6898@gmail.com
            </div>
            <div className="flex gap-2 items-center">
              <FaMapMarkerAlt /> Dhaka, Bangladesh
            </div>
          </div>
        </div>
        <div
          data-aos="zoom-in-up"
          data-aos-duration="1000"
          data-aos-easing="ease-in-sine"
        >
          <form
            onSubmit={handleSubmit}
            className=" flex flex-col gap-5 rounded-3xl p-10 bg-white bg-opacity-30 shadow-lg"
          >
            <TextField
              id="name"
              label="Name"
              type="name"
              autoComplete="name"
              fullWidth
              margin="normal"
              value={name}
              onChange={(e) => setName(e.target.value)}
              sx={{
                "& .MuiOutlinedInput-root": {
                  "&.Mui-focused fieldset": {
                    borderColor: "black",
                  },
                },
                width: "100%",
              }}
            />
            <TextField
              id="email"
              label="Email"
              type="email"
              autoComplete="email"
              fullWidth
              margin="normal"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              sx={{
                "& .MuiOutlinedInput-root": {
                  "&.Mui-focused fieldset": {
                    borderColor: "black",
                  },
                },
                width: "100%",
              }}
            />
            <TextField
              id="outlined-multiline-static"
              label="Message"
              multiline
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              sx={{
                "& .MuiOutlinedInput-root": {
                  "&.Mui-focused fieldset": {
                    borderColor: "black",
                  },
                },
                width: "100%",
              }}
            />
            <Button
              type="submit"
              variant="contained"
              fullWidth
              sx={{
                mt: 2,
                py: 1.5,
                background: "linear-gradient(to right, #CF40CA, #7642CF)",
                color: "white",
                "&:hover": {
                  background: "linear-gradient(to right, #7642CF, #CF40CA)",
                  color: "white",
                },
              }}
            >
              Send
            </Button>
          </form>
        </div>
      </div>
    </section>
            </div>


        </div>
    );
};

export default Contact;