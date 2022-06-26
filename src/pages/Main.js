import React from "react";
import "./Main.css";
import Carousel from "../Components/Carousel";
import ScrollAnimation from "react-animate-on-scroll";

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

          <ScrollAnimation animateIn="animate__fadeInUp">
            <section id="project">
              <h2 className="project-title noCopy">Project</h2>
              <Carousel />
              {/* <div class="container noCopy">
                <div
                  class="card2 weather"
                  onClick={openProject("https://djong-weather.vercel.app/")}
                >
                  <h4 class="title-card">Djongers Weather</h4>
                </div>
                <div
                  class="card2 seiyou"
                  onClick={openProject("https://sei-you.vercel.app/welcome")}
                >
                  <h4 class="title-card">Seiyou</h4>
                </div>
                <div class="card2">
                <h3 class="title">Card 3</h3>
              </div>
              <div class="card2">
                <h3 class="title">Card 4</h3>
              </div>
              </div> */}
            </section>
          </ScrollAnimation>
        </div>
      </div>
    </>
  );
}

export default Main;
