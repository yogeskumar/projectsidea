import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import './styles.css'

export default class MentorsFromIndustory extends Component {
  render() {
    return (
      <Carousel
        showArrows={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        interval={6100}
      >
        <div>
          <img src="https://firebasestorage.googleapis.com/v0/b/projectsidea-5ac2a.appspot.com/o/data%20scientist%20dev.png?alt=media&token=c1fbcefe-71d3-478b-80c6-ece262cec739" />
          <div className="myCarousel">
            <h3>Dev</h3>
            <h4>Data Scientist</h4>
            <p>
            I am a seasoned data scientist and exceptional mentor, guiding aspiring professionals towards success.
            </p>
          </div>
        </div>

        <div>
          <img src="https://firebasestorage.googleapis.com/v0/b/projectsidea-5ac2a.appspot.com/o/sourabh.png?alt=media&token=92857bdc-a2d2-4a07-bb2d-3687e89958ec" />
          <div className="myCarousel">
            <h3>Sourabh</h3>
            <h4>Full Stack Web Developer</h4>
            <p>
            I am an exceptional mentor, guiding and inspiring aspiring individuals to reach their full potential.
            </p>
          </div>
        </div>

        <div>
          <img src="https://firebasestorage.googleapis.com/v0/b/projectsidea-5ac2a.appspot.com/o/aaron.png?alt=media&token=5a4aa130-82d9-432a-bc85-e5fb0d772e6b" />
          <div className="myCarousel">
            <h3>Aron</h3>
            <h4>Python Developer</h4>
            <p>
            Experienced Python mentor igniting passion and expertise in learners through personalized guidance and hands-on projects.
            </p>
          </div>
        
        </div><div>
          <img src="https://firebasestorage.googleapis.com/v0/b/projectsidea-5ac2a.appspot.com/o/uday.png?alt=media&token=544d258d-5dcd-4d21-8b28-384a59a1a760" />
          <div className="myCarousel">
            <h3>Uday</h3>
            <h4>Full Stack Developer</h4>
            <p>
            Talented full-stack developer and exceptional mentor, providing expert guidance to learners, fostering growth, and delivering top-notch solutions.
            </p>
          </div></div>
      </Carousel>
    );
  }
}