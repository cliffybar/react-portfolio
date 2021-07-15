import React from "react";
import Footer from "../Footer";
import angelfish from "../../assets/images/angelfish.png";
import boozey from "../../assets/images/boozey.jpg";
import weatherdashboard from "../../assets/images/weatherdashboard.jpg";
import passwordgenerator from "../../assets/images/passwordgenerator.png";
import horiseon from "../../assets/images/horiseon.png";

const Projects = () => {
    const projects = [
        {
            name: "Angelfish",
            image: angelfish,
            githubLink: "https://github.com/cliffybar/Group-Project-2---Angelfish",
            deploymentLink: "https://angelfish-group.herokuapp.com/",
        },
        {
            name: "Boozey",
            image: boozey,
            githubLink: "https://github.com/cliffybar/Boozey-Project",
            deploymentLink: "https://cliffybar.github.io/Boozey-Project/",
        },
        {
            name: "Weather Dashboard",
            image: weatherdashboard,
            githubLink: "https://github.com/cliffybar/weather-dashboard",
            deploymentLink: "https://cliffybar.github.io/weather-dashboard/",
        },
        {
            name: "Password Generator",
            image: passwordgenerator,
            githubLink: "https://github.com/cliffybar/Password-Generator",
            deploymentLink: "https://cliffybar.github.io/Password-Generator/",
        },
        {
            name: "Horiseon",
            image: horiseon,
            githubLink: "https://github.com/cliffybar/Horiseon-Recon-and-Refactor",
            deploymentLink: "https://cliffybar.github.io/Horiseon-Recon-and-Refactor/",
        }
    ];

    return (
        <>
            <section>
                <div className="container">
                    <div className="row">
                        {projects.map((project) => (
                            <div
                                className="card-group col col-lg-auto col-md-auto col-lg-auto mt-3 mb-3 mx-auto align-self-center"
                                key={project.name}
                            >
                                <div
                                    className="card results-card col-sm-4 py-2 border-secondary"
                                    style={{ width: "26rem", height: "25rem" }}
                                >
                                    <a
                                        href={project.deploymentLink}
                                        className="card-link"
                                        target="blank"
                                    >
                                        <img
                                            src={project.image}
                                            alt="screenshot of application"
                                            className="img-thumbnail card-img-top"
                                        />
                                    </a>
                                    <div className="card-body">
                                        <h2 className="card-title mb-4">{project.name}</h2>
                                        <ul className="list-group list-group-flush mb-4"></ul>
                                        <a
                                            href={project.deploymentLink}
                                            className="card-link"
                                            target="blank"
                                        >
                                            Deployed
                                        </a>{" "}
                                        <a
                                            href={project.githubLink}
                                            className="card-link"
                                            target="blank"
                                        >

                                            GitHub
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default Projects;