import React from "react";
import profilePic from "../../assets/images/profilePic.jpg";

function About() {
  return (
    <section className="my-5">
      <div className="row justify-content-center">
        <img src={profilePic} className="profiel-picture" />
        <h3>Diego Rivera</h3>
        <h4>Full Stack Software Engineer</h4>
        <p>
          My name is Diego Rivera and I am from Sacramento, California. I am a
          Full-Stack Engineer with skills in using HTML, CSS, JavaScript,
          JQuery, Node.js, MySQL, and ORM. In my spare time I do enjoy reading,
          video games, and developing personal projects. In the top left are
          links to my Github and LinkedIn if you have any other questions or
          inquiries so feel free to reach out anytime. Have a great day!
        </p>
      </div>
    </section>
  );
}

export default About;
