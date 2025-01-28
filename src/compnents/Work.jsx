//Style
import "../Styles/all.scss";
//Images
import Project1 from "../images/Project1.png";
import Project2 from "../images/Project2.png";
import Project3 from "../images/Project3.png";
import Project4 from "../images/Project4.png";
import mainProject from "../images/mainProject.png";
import TicTacToe from "../images/TicTacToe.png";

export default function Work() {
  const projects = [
    {
      id: 1,
      title: <h1>Magic Match</h1>,
      image: (
        <a
          href="https://magic-match-mg.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={mainProject}
            alt="magic-match"
            className="mainProjectImage"
          />
        </a>
      ),
      description: (
        <p className="projectDescription">
          This project was a group project at school ,where I took care of and
          coded the part related to React
          {/* where I studied front-end
          development. My three classmates and I designed and coded this game,
          with each student working on a specific part of it */}
        </p>
      ),
    },
    {
      id: 2,
      title: <h1>TicTacToe</h1>,
      image: (
        <a
          href="https://tictactoe222.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={TicTacToe}
            alt="TicTacToeImage"
            className="TicTacToeImage"
          />
        </a>
      ),
      description: (
        <p className="projectDescription">
          This project is one of the games I coded using React.
        </p>
      ),
    },
    {
      id: 3,
      title: <h1>BHRAOMAON</h1>,
      image: (
        <a
          href="https://mahmoudalzayed.github.io/Travel/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={Project1} alt="BHRAOMAONImage" className="project1Image" />
        </a>
      ),
      description: (
        <p className="projectDescription">
          This project is one of the designs available in Figma, and I have
          coded it with Html,Css and JavaScript
        </p>
      ),
    },
    {
      id: 4,
      title: <h1>TYPING GAME</h1>,

      image: (
        <a
          href="https://mahmoudalzayed.github.io/TypingGame/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={Project2} alt="TypingGameImage" className="project2Image" />
        </a>
      ),
      description: (
        <p className="projectDescription">
          This project is one of the assignments I got at school where I coded
          the Java Script part.
        </p>
      ),
    },
    {
      id: 5,
      title: <h1>MUSICIAN</h1>,
      image: (
        <a
          href="https://mahmoudalzayed.github.io/Music/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={Project3} alt="MusicianImage" className="project3Image" />
        </a>
      ),
      description: (
        <p className="projectDescription">
          This project is one of the designs available in Figma, and I have
          coded it with Html,Css and JavaScript
        </p>
      ),
    },
    {
      id: 6,
      title: <h1>MZMUSICGUITAR</h1>,
      image: (
        <a
          href="https://mahmoudalzayed.github.io/MusicGuitar/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={Project4}
            alt="MusicGuitarImage"
            className="project4Image"
          />
        </a>
      ),
      description: (
        <p className="projectDescription">
          I have coded this project with Html,Css and Bootstrap.
        </p>
      ),
    },
  ];

  const projectsList = projects.map((project, index) => {
    return (
      <>
        <div className="ProjectContainer" key={index}>
          {project.title}
          {project.image}
          {project.description}
        </div>
      </>
    );
  });

  return (
    <>
      <div className="content">
        {/* <h1>My Portfolio</h1> */}

        {/* <hr /> */}

        <div id="portfolio" className="peojectsContainer">
          {projectsList}
        </div>
      </div>
    </>
  );
}
