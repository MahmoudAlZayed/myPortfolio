/* eslint-disable react/prop-types */
//Stlye
import "../Styles/all.scss";

//Icons
import { FaHome } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
import { LiaEye } from "react-icons/lia";
import { SlEnvolope } from "react-icons/sl";

export default function SideBar({ nav1, nav2, nav3, nav4 }) {
  const navBar = [
    {
      id: 1,
      name: (
        <a href="#home">
          <FaHome className="icons" /> {nav1}
        </a>
      ),
    },
    {
      id: 2,
      name: (
        <a href="#about">
          {" "}
          <IoPerson className="icons" /> {nav2}
        </a>
      ),
    },
    {
      id: 3,
      name: (
        <a href="#portfolio">
          <LiaEye className="icons" />
          {nav3}
        </a>
      ),
    },
    {
      id: 4,
      name: (
        <a href="#contact">
          {" "}
          <SlEnvolope className="icons" />
          {nav4}
        </a>
      ),
    },
  ];

  const navBarList = navBar.map((nav, index) => {
    return (
      <>
        <ul className="ulSideBar">
          <li key={index}>{nav.name}</li>
        </ul>
      </>
    );
  });
  return (
    <>
      <div className="sideBarContainer">
        <div className="sideBarContent">{navBarList}</div>
      </div>
    </>
  );
}
