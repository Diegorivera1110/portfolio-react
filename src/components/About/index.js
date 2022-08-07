import React from "react";
import profilePic from "../../assets/images/profilePic.jpg";

function About() {
  return (
    <section className="my-5 title">
      <div className="row justify-content-center" id="about-container">
        <div className="mb-5 col-3 profile-picture">
        <img src={profilePic} id="profile-picture" />
        </div>
        <div className="col-9">
        <h3 className="name">Diego Rivera</h3>
        <h4 className="job">Full Stack Software Engineer</h4>
        <p className="education">
          My name is Diego Rivera and I am from Sacramento, California. I am a
          Full-Stack Engineer with skills in using HTML, CSS, JavaScript,
          JQuery, Node.js, MySQL, and OOP. In my spare time I do enjoy reading,
          video games, and developing personal projects. In the top left are
          links to my Github and LinkedIn if you have any other questions or
          inquiries so feel free to reach out anytime. Have a great day!
        </p>
          </div>
      </div>
    </section>
  );
}

export default About;
