//Hooks
import { useRef } from "react";
//Styles
import "../Styles/all.scss";
//Icons
import { IoMdCloseCircle } from "react-icons/io";
import { IoMdMenu } from "react-icons/io";

export default function NavMobile() {
  const myRef = useRef(null);
  return (
    <>
      <div ref={myRef} className="navMobileContainer">
        <IoMdCloseCircle
          className="closeIcon"
          onClick={() => {
            myRef.current.style.width = "0";
          }}
        />

        <div className="navMobileContent">
          <ul>
            <li>
              <a
                href="#home"
                onClick={() => {
                  myRef.current.style.width = "0";
                }}
              >
                HOME
              </a>
            </li>
            <li>
              <a
                href="#about"
                onClick={() => {
                  myRef.current.style.width = "0";
                }}
              >
                ABOUT
              </a>
            </li>
            <li>
              <a
                href="#portfolio"
                onClick={() => {
                  myRef.current.style.width = "0";
                }}
              >
                PORFOLIO
              </a>
            </li>
            <li>
              <a
                href="#contact"
                onClick={() => {
                  myRef.current.style.width = "0";
                }}
              >
                CONTACT
              </a>
            </li>
          </ul>
        </div>
      </div>
      <IoMdMenu
        className="openIcon"
        onClick={() => {
          myRef.current.style.width = "100%";
        }}
      />
    </>
  );
}
