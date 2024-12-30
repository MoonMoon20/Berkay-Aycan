import {React, useState, onMouseMove, handleMouseMove,ReactNode, MouseEvent} from "react";
import './App.css';
import ContactUs from "./components/ContactUs.js";
import backgroundImage from './assets/138800733_22d0adf9-ebbf-4410-8f71-382b99fef230.jpg';

const App = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (

    

    <div
    style={{
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: "cover", // Resmi tamamen sığdırır
      backgroundPosition: "center", // Ortalar
      backgroundRepeat: "no-repeat", // Tekrar etmesini engeller
      margin: "0",
      padding: "0",
      overflow: "auto", // Scroll için
      minHeight: "100vh", // Sayfa boyutunda olacak şekilde
    }}
    > 

    
      
      
      {/* Navbar */}
      <nav
        className="fixed top-0 left-0 w-full bg-[#11524b] p-[10px_20px] z-[1000] flex shadow-lg"
      >
        <a
          href="#section1"
          style={{
            margin: "0 15px",
            color: "white",
            textDecoration: "none",
            fontWeight: "bold",
            cursor: "pointer",
            fontWeight:"lato",
          }}
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("section1");
          }}
        >
          About
        </a>
        <a
          href="#section2"
          style={{
            margin: "0 15px",
            color: "white",
            textDecoration: "none",
            fontWeight: "bold",
            cursor: "pointer",
            fontWeight:"lato",
          }}
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("section2");
          }}
        >
          
          My Knowledge
        </a>
        <a
          href="#section3"
          style={{
            margin: "0 15px",
            color: "white",
            textDecoration: "none",
            fontWeight: "bold",
            cursor: "pointer",
            fontWeight:"lato",
          }}
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("section3");
          }}
        >
          Contact
        </a >

        <a 
        href={`${process.env.REACT_APP_PUBLIC_URL}/assets/BERKAY%20AYCAN%20ING.pdf`}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          margin: "0 15px",
          color: "white",
          textDecoration: "none",
          fontWeight: "bold",
          cursor: "pointer",
          fontWeight:"lato",
        }}
        >
          CV
        </a>
        
      </nav>
      

      {/* Bölüm 1 */}
      <div
        id="section1"
        className="min-h-[30vh] flex items-center justify-center text-white font-[Lato] bg-black bg-opacity-50"
      >
       <div className="flex flex-col items-center justify-center min-h-screen">
       <h1 className="text-center text-white font-bold mb-10 text-xl ">About</h1>
  <div className="relative max-w-xs overflow-hidden bg-cover bg-no-repeat">
  <img
  src={require('./assets/WhatsApp%20Image%202024-12-23%20at%2017.22.54.jpeg')}
  className="max-w-xs transition duration-300 ease-in-out hover:scale-110 ml-200"
  alt="Louvre"
  height={300}
  width={300}
/>

  </div>
  <p className="text-center text-white mb-10 flex justify-center items-center mt-20">Hi my name is Berkay Aycan, i graduated at Afyon Kocatepe Univercity on 2024 as a mechatronics engineer
         and now im currently working on devoloping my software skills. You can scroll down and see my progress and my experiences.
          In this time period i will update my projects and my developments from here.
         </p>
</div>
      </div>
      


      {/* Bölüm 2 */}
      <div
        id="section2"
        className="min-h-[30vh] flex items-center justify-center text-white font-lato] bg-black bg-opacity-50"
      >
          <div className="text-white font-bold text-xl font-[lato]">
        <h1>My Knowledge</h1>
        
</div>
</div>
<div
      className="flex justify-center gap-5 p-5 "
    >
      {/* Kutu 1 */}
      <div
       className="bg-[#11524b] p-5 rounded-lg w-[calc(50%-20px)] max-w-[200px] min-w-[40px] min-h-[40px] text-center text-white flex-grow
       transform h-64 bg-[#11524b]-400 w-80 hover:bg-indigo-600 transition duration-500 hover:scale-125"
      >
        <h2 class="text-white mb-10 break-words whitespace-normal text-xl font-[lato] font-bold">HTML/CSS(Tailwind)</h2>
        <p class="text-white text-sm">Progress: %100</p>
        <p class="text-white text-sm">Experience: 1 Year</p>
      </div>

      {/* Kutu 2 */}
      <div
       className="bg-[#11524b] p-5 rounded-lg w-[calc(50%-20px)] max-w-[200px] min-w-[40px] min-h-[40px] text-center text-white flex-grow
       transform h-64 bg-[#11524b]-400 w-80 hover:bg-indigo-600 transition duration-500 hover:scale-125"
      >
        <h2 class="text-white mb-10 break-words whitespace-normal text-xl font-[lato] font-bold">JavaScript</h2>
        <p class="text-white text-sm text-center">Progress: %80</p>
        <p class="text-white text-sm">Experience: 1 Year</p>
        
      </div>

      {/* Kutu 3 */}
      <div
        className="bg-[#11524b] p-5 rounded-lg w-[calc(50%-20px)] max-w-[200px] min-w-[40px] min-h-[40px] text-center text-white flex-grow
       transform h-64 bg-[#11524b]-400 w-80 hover:bg-indigo-600 transition duration-500 hover:scale-125"
      >
        <h2 class="text-white mb-10 break-words whitespace-normal text-xl font-[lato] font-bold">React.js</h2>
        <p className="text-white text-sm">Progress: %70</p>
        <p className="text-white text-sm">Experience: 1 Year</p>
      </div>

      {/* Kutu 4 */}
      <div
       className="bg-[#11524b] p-5 rounded-lg w-[calc(50%-20px)] max-w-[200px] min-w-[40px] min-h-[40px] text-center text-white flex-grow
       transform h-64 bg-[#11524b]-400 w-80 hover:bg-indigo-600 transition duration-500 hover:scale-125"
      >
        <h2 class="text-white mb-10 break-words whitespace-normal text-xl font-[lato] font-bold">Node.js</h2>
        <p class="text-white text-sm">Progress: %70</p>
        <p class="text-white text-sm">Experience: 1 Year</p>
      </div>

      {/* Kutu 5 */}
      <div
        className="bg-[#11524b] p-5 rounded-lg w-[calc(50%-20px)] max-w-[200px] min-w-[40px] min-h-[40px] text-center text-white flex-grow
       transform h-64 bg-[#11524b]-400 w-80 hover:bg-indigo-600 transition duration-500 hover:scale-125"
      >
        <h2 class="text-white mb-10 break-words whitespace-normal text-xl font-[lato] font-bold">Python</h2>
        <p class="text-white text-sm">Progress: %30</p>
        <p class="text-white text-sm">Experience: 0 Year</p>
      </div>

      {/* Kutu 6 */}
      <div
        className="bg-[#11524b] p-5 rounded-lg w-[calc(50%-20px)] max-w-[200px] min-w-[40px] min-h-[40px] text-center text-white flex-grow
       transform h-64 bg-[#11524b]-400 w-80 hover:bg-indigo-600 transition duration-500 hover:scale-125"
      >
        <h2 class="text-white mb-10 break-words whitespace-normal text-xl font-[lato] font-bold">React Native</h2>
        <p class="text-white text-sm">Progress: %70</p>
        <p class="text-white text-sm">Experience: 1 Year</p>
      </div>
    </div>

    <div
      className="flex justify-center gap-5 p-5"
    >
      {/* Kutu 7 */}
      <div
      className="bg-[#11524b] p-5 rounded-lg w-[calc(50%-20px)] max-w-[200px] min-w-[40px] min-h-[40px] text-center text-white flex-grow
       transform h-64 bg-[#11524b]-400 w-80 hover:bg-indigo-600 transition duration-500 hover:scale-125"
      >
        <h2 class="text-white mb-10 break-words whitespace-normal text-xl font-[lato] font-bold">SolidWorks</h2>
        <p class="text-white text-sm">Progress: %70</p>
        <p class="text-white text-sm">Experience: 2 Year</p>
      </div>

      {/* Kutu 8 */}
      <div
        className="bg-[#11524b] p-5 rounded-lg w-[calc(50%-20px)] max-w-[200px] min-w-[40px] min-h-[40px] text-center text-white flex-grow
       transform h-64 bg-[#11524b]-400 w-80 hover:bg-indigo-600 transition duration-500 hover:scale-125"
      >
        <h2 class="text-white mb-10 break-words whitespace-normal text-xl font-[lato] font-bold">C</h2>
        <p class="text-white text-sm">Progress: %40</p>
        <p class="text-white text-sm">Experience: 1 Year</p>
      </div>

      {/* Kutu 9 */}
      <div
        className="bg-[#11524b] p-5 rounded-lg w-[calc(50%-20px)] max-w-[200px] min-w-[40px] min-h-[40px] text-center text-white flex-grow
       transform h-64 bg-[#11524b]-400 w-80 hover:bg-indigo-600 transition duration-500 hover:scale-125"
      >
        <h2 class="text-white mb-10 break-words whitespace-normal text-xl font-[lato] font-bold mb-5">Siemens s300 Programming</h2>
        <p class="text-white text-sm">Progress: %60</p>
        <p class="text-white text-sm">Experience: 2 Year</p>
      </div>

      {/* Kutu 10 */}
      <div
       className="bg-[#11524b] p-5 rounded-lg w-[calc(50%-20px)] max-w-[200px] min-w-[40px] min-h-[40px] text-center text-white flex-grow
       transform h-64 bg-[#11524b]-400 w-80 hover:bg-indigo-600 transition duration-500 hover:scale-125"
      >
        <h2 class="text-white mb-10 break-words whitespace-normal text-xl font-[lato] font-bold">MYSQL</h2>
        <p class="text-white text-sm">Progress: %20</p>
        <p class="text-white text-sm">Experience: 0 Year</p>
      </div>

      {/* Kutu 11 */}
      <div
        className="bg-[#11524b] p-5 rounded-lg w-[calc(50%-20px)] max-w-[200px] min-w-[40px] min-h-[40px] text-center text-white flex-grow
       transform h-64 bg-[#11524b]-400 w-80 hover:bg-indigo-600 transition duration-500 hover:scale-125"
      >
        <h2 class="text-white mb-10 break-words whitespace-normal text-xl font-[lato] font-bold">Proteus</h2>
        <p class="text-white text-sm">Progress: %70</p>
        <p class="text-white text-sm">Experience: 2 Year</p>
      </div>

      {/* Kutu 12 */}
      <div
        className="bg-[#11524b] p-5 rounded-lg w-[calc(50%-20px)] max-w-[200px] min-w-[40px] min-h-[40px] text-center text-white flex-grow
       transform h-64 bg-[#11524b]-400 w-80 hover:bg-indigo-600 transition duration-500 hover:scale-125 hover:overflow-x-visible"
      >
        <h2 class="text-white mb-10 break-words whitespace-normal text-xl font-[lato] font-bold">Flutter</h2>
        <p class="text-white text-sm">Progress: %0</p>
        <p class="text-white text-sm">Experience: 0 Year</p>
      </div>
    </div>
    
        



      {/* Bölüm 3 */}
      <div
        id="section3"
       className="min-h-[30vh] flex items-center justify-center text-white font-[Lato] bg-black bg-opacity-50"
      >
        <h1 className="text-center text-white font-bold mb-10 text-xl font-[lato]">Contact</h1>
      </div>
      <div class="p-5 leading-6 text-base text-white justify:center">
      <p><strong>Phone:</strong> 05050683599</p>
      <p><strong>E-Mail:</strong> <a href="mailto:berkay.aycan@hotmail.com" style={{ color: "#11524b", textDecoration: "none" }}>berkay.aycan@hotmail.com</a></p>
      <p><strong>Address:</strong> Yeşilbahçe Mahallesi Çınarlı Caddesi Eyiler 6 Apartmanı<br />
        No: 8/11 Kat: 5 MURATPAŞA/ANTALYA
      </p>
      <p><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/berkay-aycan-817364202/" target="_blank" rel="noopener noreferrer" style={{ color: "#11524b", textDecoration: "none" }}>https://www.linkedin.com/in/berkay-aycan-817364202/</a></p>
      <p><strong>GitHub:</strong> <a href="https://github.com/MoonMoon20" target="_blank" rel="noopener noreferrer" style={{ color: "#11524b", textDecoration: "none" }}>https://github.com/MoonMoon20</a></p>
    </div>

<div className="justify-center mb-20 color-white">
  
    <ContactUs />

    </div>

    <footer
      className="bg-[#11525b] text-center dark:bg-neutral-700 lg:text-left">
      <div className="p-4 text-center text-neutral-700 dark:text-neutral-200">
        © 2024 Copyright:
        <a
          className="text-neutral-800 dark:text-neutral-400"
          href="#"
        >Berkay Aycan</a>
      </div>
    </footer>



    </div>

  );
};


export default App;
