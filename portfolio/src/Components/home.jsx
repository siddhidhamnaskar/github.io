import Photo from "../media/photo.jpeg";
import github from "../media/github.png";

export default function Home(){
    return <>
       
 <div id="aboutContainer">
    <div id="about">
        <div>
            <h1 >Hi, I'm Siddhi Dhamnaskar.</h1>
            <p>I am Full Stack Web Developer and i have knowledge in HTML, CSS, JS, REACT and i make user-friendly websites.</p>
    
           <a href="https://github.com/siddhidhamnaskar"><img src={github} alt=""/></a> 
            {/* <!-- <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeLarge css-6flbmm" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="LinkedInIcon"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"></path></svg> --> */}
        </div>
        <img src={Photo} alt=""/>
    
    </div>

 </div>
<div id="details">
    <div class="personal">
         <h2>Personal Details</h2>
         <hr/>
         <div>
            <p>Email: </p>
            <p>  siddhidhamnaskar64@gmail.com</p>

         </div>
       <div>
        <p>Language:</p>
        <p>English</p>
       </div>
       <div>
        <p>Nationality:</p>
        <p>Indian</p>
       </div>
       
    </div>
     <div>
         <h2>I am Full Stack Web Developer</h2>
         <p>My name is Siddhi Dhamnaskar, I am from Talavali, Maharashtra. Passionate Full Stack Web Developer with skills in the MERN stack, I have learned Full Stack Web Development in Masai school. Skilled in problem- solving and execution of software tasks from start to finish. I look forward to joining a company where I can contribute to individual and company growth..</p>
     </div>
    </div>
       
    </>
}