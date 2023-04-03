import "../App.css";
// import Skills from "./skills"
// import {Navigate} from "react";
// import { Link } from "react-router-dom";


export default function Navbar(){
    return <>
        <div id="navbar">
         {/* <img src="https://scontent.fpnq1-1.fna.fbcdn.net/v/t39.30808-6/301862796_618648476633074_1728070246609855616_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=-qoBGxv9IUkAX9o0xUm&_nc_ht=scontent.fpnq1-1.fna&oh=00_AfB1fOAbpQHEJtICx_fjJU7k_xh1IcqCPetCGzUAPTiYLw&oe=639EC941" width="200px" height="100px" alt=""> --> */}
        <p>Siddhi</p>
       
        <div id="end-bar">
            <a href="#aboutContainer"  >HOME</a>
            <a href="#details"> ABOUT</a>
             <a href="#skills">SKILLS</a>
        
          <a href="#projects">PROJECTS</a>
           <a href="#contacts">CONTACTS</a>
            
           <div>
            <a class="resume" download href="pdf/Siddhi_Resume.pdf" >Resume<svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="DownloadIcon"><path d="M5 20h14v-2H5v2zM19 9h-4V3H9v6H5l7 7 7-7z"></path></svg></a>
           </div>
          
            

        </div>
 </div>

    </>
}