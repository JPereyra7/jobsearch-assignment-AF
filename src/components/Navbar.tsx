import {
  DigiLayoutMediaObject,
  DigiMediaImage,
  DigiNavigationSidebar,
  DigiNavigationSidebarButton,
  DigiNavigationVerticalMenu,
  DigiNavigationVerticalMenuItem,
} from "@digi/arbetsformedlingen-react";
import logo from "../assets/statsenlogga.png";
import "../styles/navbar.css";
import {
  LayoutMediaObjectAlignment,
  NavigationSidebarPosition,
  NavigationSidebarVariation,
  NavigationVerticalMenuVariation,
} from "@digi/arbetsformedlingen";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaBookmark,
  FaRegBookmark,
  FaRegUser,
  FaUserAlt,
} from "react-icons/fa";
export const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [logoHovered, setLogoHovered] = useState(false);
  const [userHovered, setuserHovered] = useState(false);
  const navigate = useNavigate();

  const handleToggle = () => {
    if (toggleMenu === true) {
      setToggleMenu(false);
    } else {
      setToggleMenu(true);
    }
  };
  const handleNavigationToJobbtorget = () => {
    navigate("/jobbtorget");
    setToggleMenu(false);
  };

  const handleNavigationToHome = () => {
    navigate("/");
    setToggleMenu(false);
  };

  const handleNavigationToSavedJobs = () => {
    navigate("/saved");
  };

  return (
    <>
      <div className="navContainer">
        <DigiLayoutMediaObject afAlignment={LayoutMediaObjectAlignment.START}>
          {/* LOGOTYPEN */}
          <DigiMediaImage
            slot="media"
            afAlt="logga"
            onClick={handleNavigationToHome}
          >
            <img className="logo" src={logo} />
          </DigiMediaImage>
        </DigiLayoutMediaObject>

        {/* HAMBURGERMENY */}
        <div className="hamburgerIcons">
          <DigiNavigationSidebarButton
            className="hamburgerMenu"
            afText="Meny"
            onAfOnToggle={handleToggle}
          >
            <div className="iconContainer">
              <div
                onMouseEnter={() => setuserHovered(true)}
                onMouseLeave={() => setuserHovered(false)}
              >
                {userHovered ? (
                  <FaUserAlt size="20px" />
                ) : (
                  <FaRegUser size="20px" />
                )}
              </div>

              <div
                onMouseEnter={() => setLogoHovered(true)}
                onMouseLeave={() => setLogoHovered(false)}
                onClick={handleNavigationToSavedJobs}
              >
                {logoHovered ? (
                  <FaBookmark size="20px" />
                ) : (
                  <FaRegBookmark size="20px" />
                )}
              </div>
            </div>
            <DigiNavigationSidebar
              afActive={toggleMenu}
              afStickyHeader={true}
              afBackdrop={true}
              afPosition={NavigationSidebarPosition.END}
              afVariation={NavigationSidebarVariation.OVER}
              afCloseButtonText="Stäng"
            >
              <DigiNavigationVerticalMenu
                afVariation={NavigationVerticalMenuVariation.PRIMARY}
              >
                <ul>
                  <li>
                    <DigiNavigationVerticalMenuItem
                      onClick={handleNavigationToHome}
                      afText="Hem"
                      afActive={true}
                    ></DigiNavigationVerticalMenuItem>
                  </li>
                  <li>
                    <DigiNavigationVerticalMenuItem
                      onClick={handleNavigationToJobbtorget}
                      afText="Jobbtorget"
                      afActive={true}
                    ></DigiNavigationVerticalMenuItem>
                  </li>
                  <li>
                    <DigiNavigationVerticalMenuItem
                      afText="Kontakt"
                      afActive={true}
                    ></DigiNavigationVerticalMenuItem>
                  </li>
                </ul>
              </DigiNavigationVerticalMenu>
            </DigiNavigationSidebar>
          </DigiNavigationSidebarButton>
        </div>
      </div>
    </>
  );
};
