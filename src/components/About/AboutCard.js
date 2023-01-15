import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Buse Ozkan </span>
            from <span className="purple"> Famagusta, Cyprus.</span>
            <br />A Junior Developer with knowledge and experience across the
            full-stack, looking to specialise and further developer my knowledge
            in the field. From the education and experiences gained the
            abilities to maintain and plan the most sustainable and financial
            way of designing websites and applications, as well as working on
            how to improve their performance and quality. Able to choose the
            most appropriate user-friendly techniques and processes to provide
            high quality service and support to every client with the most
            efficient way so that their needs are met. I have the research
            abilities to develop myself. Gained the experience and abilities to
            developing tests, analysing, and assessing the product. In additions
            to these abilities had been gained to be patient, dealing with
            complex problems and being creative, which are the things besides
            having very well teamwork skills, strong leadership skills, friendly
            communication skills and conflict resolution skills. Enthusiastic
            about learning, developing myself and improving the knowledge she
            has to.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Sports
            </li>
            <li className="about-activity">
              <ImPointRight /> Writting Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ marginBlockEnd: 0, color: "rgb(155 126 172)" }}>
            "Let's Break The Glass Ceilings"{" "}
          </p>
          <footer className="blockquote-footer">Buse Ozkan</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
