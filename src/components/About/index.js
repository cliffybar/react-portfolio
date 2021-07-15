import React from "react";
import myphoto from "../../assets/images/myphoto.jpg";
import Footer from "../Footer";

function About() {
    return (
        <section className="my-5">
            <div className="container d-flex flex-column text-center">
                <div className="p-2">
                    <h1 id="about">Hi, I'm Clifford.</h1>
                    <img
                        src={myphoto}
                        className="my-2"
                        style={{ width: "100%" }}
                        alt="Clifford"
                    />
                </div>
                <div className="p-2">
                    <p className="aboutMe">
                        Hello! I'm Clifford (David to some) and I am an aspiring software developer! 
                        I graduated from The University of Texas at Austin in May of 2019 with a 
                        Bachelor's in Economics. Upon graduation, I joined EY as a State & Local Tax 
                        Analyst. Besides performing the standard objectives alluded by my job title, 
                        I have also been tasked with helping develop tax automation softwares to promote 
                        efficiency in my day-to-day activities. Learning and having exposure to a vastly 
                        different skillset required for software developing sparked my curiosity in tech. 
                        This curiosity led me to my alma matter's Coding Boot Camp where I am particpating 
                        in the Full Stack Program to gain proficiency in languages such as JavaScript, HTML, 
                        CSS, and many more. Soon, I will be developing beyond tax automotation softwares and 
                        hopefully, building something with you.
                    </p>
                </div>
            </div>
            <div>
                <Footer />
            </div>
        </section>
    );
}

export default About;
