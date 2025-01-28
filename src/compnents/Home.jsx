//Style
import "../Styles/all.scss";
//Images
import me1 from "../images/me1.jpg";
//Icons
import { FaDownload } from "react-icons/fa";
//cv
import cv from "../cv/CV.pdf";

export default function Home() {
  return (
    <>
      <div className="header">
        <h1 id="home">I&apos;m MZ</h1>
        <p>Junior Frontend Developer</p>
      </div>

      <img className="myImage" src={me1} />

      <div className="aboutMe">
        <h2 id="about">About me</h2>

        <hr />

        <p>
          I have a background in information technology , with a focus on
          frontend devlopment. I am the type of person who seizes every
          oppotrunity to learn something new. That is why I enjoy
          challenges.From there, I am under pressure to learn quickly and gain a
          lot of new experience.
        </p>
      </div>

      <div className="skills">
        <h3>My Skills</h3>

        <p>Html & Css & Sass</p>
        <div className="htmlAndCssAndSassAndGit">
          <div className="eightyPerCent"></div>
          <div className="twentyPerCent">.</div>
        </div>

        <p>JavaScript</p>

        <div className="javaScriptAndReact">
          <div className="seventyPerCent"></div>
          <div className="thirtyPerCent">.</div>
        </div>
        <p>React</p>

        <div className="javaScriptAndReact">
          <div className="seventyPerCent"></div>
          <div className="thirtyPerCent">.</div>
        </div>

        <p>Git & GitHub</p>
        <div className="htmlAndCssAndSassAndGit">
          <div className="eightyPerCent"></div>
          <div className="twentyPerCent">.</div>
        </div>
      </div>
      <div className="cv">
        <a href={cv} download="cv">
          <FaDownload className="downloadIcon" /> Download Resume
        </a>
      </div>
      <div className="portfolio">
        <h2 id="portfolio">My Portfolio</h2>
        <hr />
      </div>
    </>
  );
}
