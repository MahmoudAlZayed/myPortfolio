// /* eslint-disable react/prop-types */

//Components
import NavMobile from "./NavMobile";
import Home from "./Home";
import SideBar from "./SideBar";
import Work from "./Work";
import Contact from "./Contact";

export default function All() {
  return (
    <>
      <NavMobile />
      <Home />
      <SideBar nav1="HOME" nav2="ABOUT" nav3="PORTFOLIO" nav4="CONTACT" />
      <Work />
      <Contact />
    </>
  );
}
