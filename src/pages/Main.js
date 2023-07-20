import React from "react";
import "./Main.css";
import Carousel from "../Components/Carousel";
import Carousel2 from "../Components/Carousel2";
import ScrollAnimation from "react-animate-on-scroll";
import sandwich1 from "../images/sandYay1.png";
import sandwich2 from "../images/sandYay2.png";
import sandwich3 from "../images/sandYay3.png";
import sandwich4 from "../images/sandYay4.png";

function Main() {
  // const openProject = (link) => () => {
  //   window.open(link, "_blank");
  // };

  return (
    <>
      <div className="wrapper">
        <div className="blank-"></div>
        <div className="main">
          <section id="about">
            <h2 className="title noCopy">
              <b>Hi, I'm Felix!</b>
            </h2>
            <p className="intro noCopy">
              I lived in Tangerang, Banten, Indonesia. I'm a student of
              Multimedia Nusantara University, who is looking for opportunities
              and work experience on Websites Development or Application
              Development. Experienced working in the field of website
              development and mobile application development especially frontend
              and a little bit of backend.
            </p>
            <br />
            <br />

            <h3 className="skill-title noCopy">Skills</h3>
            <div className="card webP noCopy">
              <h4>Website Development</h4>
              <p className="skill-desc">
                I work in developing websites of various projects. I focus on
                Frontend development, but can also work a little on Backend
                development. Some of the programming languages that I use are
                HTML, CSS, Javascript, Typescript, SQL, and PHP. For framework,
                i'm using ReactJS, CodeIgniter4, and Ionic React.
              </p>
            </div>
            <div className="card mobileP noCopy">
              <h4>Mobile Application Development</h4>
              <p className="skill-desc">
                I work in developing mobile application from few projects. I
                focus on Frontend development, but can also work a little on
                Backend development. Programming languages that i use are Java,
                for framework i'm using Ionic React.
              </p>
            </div>
          </section>

          <br />
          <br />

          <section id="programming">
            {/* <ScrollAnimation animateIn="animate__backInLeft"> */}
            <h2 className="project-title noCopy">Programming Languages</h2>
            {/* </ScrollAnimation> */}
            <ScrollAnimation animateIn="animate__jackInTheBox">
              <div>
                <ul class="check-list">
                  <li>C</li>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>Javascript</li>
                  <li>Typescript</li>
                  <li>SQL</li>
                  <li>PHP</li>
                  <li>Java</li>
                  <li>C#</li>
                  <li>Python</li>
                </ul>
              </div>
            </ScrollAnimation>
          </section>

          <section id="project">
            {/* <ScrollAnimation animateIn="animate__backInLeft"> */}
            <h2 className="project-title noCopy">Project</h2>
            {/* </ScrollAnimation> */}
            <ScrollAnimation animateIn="animate__jackInTheBox">
              <Carousel />
            </ScrollAnimation>
          </section>

          <section id="other">
            {/* <ScrollAnimation animateIn="animate__backInLeft"> */}
            <h2 className="project-title noCopy">Other Project</h2>
            {/* </ScrollAnimation> */}
            <ScrollAnimation animateIn="animate__bounceIn">
              <h4 className="gApp noCopy">Gebet App</h4>
            </ScrollAnimation>
            <ScrollAnimation animateIn="animate__zoomInUp">
              <Carousel2 />
            </ScrollAnimation>
            <ScrollAnimation animateIn="animate__bounceIn">
              <h4 className="gApp noCopy">SandwichYay</h4>
            </ScrollAnimation>
            <div className="img-container">
              <ScrollAnimation animateIn="animate__bounceInLeft">
                <img className="sandyay-photo" src={sandwich1} alt="" />
              </ScrollAnimation>
              <ScrollAnimation animateIn="animate__bounceInLeft">
                <img className="sandyay-photo" src={sandwich2} alt="" />
              </ScrollAnimation>
              <ScrollAnimation animateIn="animate__bounceInLeft">
                <img className="sandyay-photo" src={sandwich3} alt="" />
              </ScrollAnimation>
              <ScrollAnimation animateIn="animate__bounceInLeft">
                <img className="sandyay-photo" src={sandwich4} alt="" />
              </ScrollAnimation>
            </div>
          </section>

          <section id="experiences">
            {/* <ScrollAnimation animateIn="animate__backInLeft"> */}
            <h2 className="project-title noCopy">Work Experiences</h2>
            {/* </ScrollAnimation> */}
            <ScrollAnimation animateIn="animate__jackInTheBox">
              <div>
                <ul class="check-list">
                  <li>IT & WEB Crew | UMN TV | March 2021 – March 2022</li>
                  <li>
                    Website division | UMN Festival 2021 | Mei 2021 – December
                    2021
                  </li>
                  <li>
                    IT & WEB Division | TVONAIR 7.0 | November 2021 – April 2022
                  </li>
                  <li>
                    Mobile Developer Intern | PT Central Artificial Intelligence
                    | August 2022 – December 2022
                  </li>
                </ul>
              </div>
            </ScrollAnimation>
          </section>
        </div>
      </div>
    </>
  );
}

export default Main;
