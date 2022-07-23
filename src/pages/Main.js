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
                <img className="sandyay-photo" src={sandwich1} />
              </ScrollAnimation>
              <ScrollAnimation animateIn="animate__bounceInLeft">
                <img className="sandyay-photo" src={sandwich2} />
              </ScrollAnimation>
              <ScrollAnimation animateIn="animate__bounceInLeft">
                <img className="sandyay-photo" src={sandwich3} />
              </ScrollAnimation>
              <ScrollAnimation animateIn="animate__bounceInLeft">
                <img className="sandyay-photo" src={sandwich4} />
              </ScrollAnimation>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default Main;
