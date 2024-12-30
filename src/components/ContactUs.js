import React from "react";
import emailjs from "emailjs-com";
import '../App.css';

const ContactUs = () => {
  const sendEmail = (e) => {
    e.preventDefault(); // Email gönderimini durdurur
    emailjs
      .sendForm('service_shwe9ja', 'template_25rmqip', e.target, 'WaHQ-q9LUt-ib8Vgc')
      .then(
        (result) => {
          console.log("Success:", result.text);
          window.location.reload();
        },
        (error) => {
          console.error("Error:", error.text);
        }
      );
  };

  return (
    <form 
    className="contact-form flex flex-col gap-4 p-6 bg-[#11524b] rounded-lg shadow-md max-w-md mx-auto" 
    onSubmit={sendEmail}
  >
    <input type="hidden" name="contact_number" />
    
    <label className="text-white font-semibold">Name</label>
    <input 
      type="text" 
      name="from_name" 
      className="p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
      placeholder="Your Name"
    />
  
    <label className="text-white font-semibold">Email</label>
    <input 
      type="email" 
      name="from_email" 
      className="p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
      placeholder="Your Email"
    />
  
    <label className="text-white font-semibold">Subject</label>
    <input 
      type="text" 
      name="subject" 
      className="p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
      placeholder="Subject"
    />
  
    <label className="text-white font-semibold">Message</label>
    <textarea 
      name="message" 
      className="p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 h-32 resize-none"
      placeholder="Your Message"
    />
  
    <input 
      type="submit" 
      value="Send" 
      className="mt-4 p-2 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 transition"
    />
  </form>
  

  );
};

export default ContactUs;