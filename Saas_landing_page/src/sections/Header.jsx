import { Link as LinkScroll } from "react-scroll";
import { useState, useEffect, React } from "react";
import clsx from "clsx";
import Button from "../components/Button.jsx";
// import Login from "../Authorizations/Login.js";
// import { AuthProvider } from "../contexts/AuthContext"
// // import { useNavigate } from "react-router-dom";

const Header = () => {
  const [hasScrolled, setHasScrolled] = useState(false); //initialState(user has not scrolled)
  const [isOpen, setIsOpen] = useState(false); //initialState(has not open yet)
  // const navigate = useNavigate();

  // Passing effect to Use effect
  useEffect(() => {
    //handling eventListeners
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 32);
    }; //Adding "Scroll: eventlisteners if scroll is done"
    window.addEventListener("scroll", handleScroll); //typeofTheEvent

    return () => {
      //Using return function to remove eventlisteners
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); //dependency array

  /*The reason to put Navlink inside the header so that it can access 
     the state variable "setIsOpen", and can make the nav logo button 
     selective.*/
  /*This is for Mobile App--> For Ex. after Clicking feature it will close the menu and 
  then scrolll down */
  const NavLink = ({ title } //passing title as children and for handling LinkScroll
  ) => (
    <LinkScroll
      onClick={() => setIsOpen(false)} //Setting it false(initialState)
      to={title}
      offset={-100}
      spy
      smooth
      activeClass="nav-active"
      className="base-bold text-p4 uppercase transition-colors duration-500
         cursor-pointer hover:text-p1 max-lg:my-4 max-lg:h5"
    >
      {title}
    </LinkScroll>
  );

  return (
    //Modifying background if user has scrolled
    <header
      className={clsx(
        "fixed top-0 left-0 z-50 w-full py-10 transition-all duration-500 max-lg:py-4",
        hasScrolled && "py-2 bg-black-100 backdrop-blur-[8px]"
      )}
    >
      <div className="container flex h-14 items-center max-lg:px-5">
        <a className="lg:hidden flex-1 cursor-pointer z-2">
          <img src="/images/xora.svg" width={115} height={55} alt="logo" />
        </a>

        <div
          className={clsx(
            "w-full max-lg:fixed max-lg:top-0 max-lg:left-0max-lg:w-full max-lg:bg-s2 max-lg:opacity-0",
            isOpen ? "max-lg:opacity-100" : "max-lg:pointer-events-none"
          )}
        >
          <div
            className="max-lg:relative max-lg:flex max-lg:flex-col 
            max-lg:min-h-screen max-lg:p-6 max-lg:overflow-hidden sidebar-before
            max-md:px-4"
          >
            <nav className="max-lg:relative max-lg:z-2 max-lg:my-auto">
              <ul className="flex max-lg:block max-lg:px-12">
                <li className="nav-li">
                  {/* Link for features and pricing */}
                  <NavLink title="features" />
                  <div className="dot" />
                  <NavLink title="pricing" />
                </li>
                <li className="nav-logo">
                  <LinkScroll
                    to="hero"
                    offset={-250}
                    spy
                    smooth
                    className={clsx(
                      //Adding Cursor pointer to NavBar while scrolling downwards
                      "max-lg:hidden transition-transform duration-500 cursor-pointer"
                    )}
                  >
                    <img
                      src="/images/hero.png"
                      width={160}
                      height={55}
                      alt="logo"
                    />
                  </LinkScroll>
                </li>

                <li className="nav-li">
                  <NavLink title="faq" />
                  <div className="dot" />
                  <NavLink title="Login/Register" />
                </li>

                {/* <li className="nav-li">
                  <NavLink title="faq( प्र.श.)" />
                  <div className="dot" />
                  <Button onClick={() => navigate("/auth")}>Login / Register</Button>
                </li>  */}

              </ul>
            </nav>
            <div
              className="lg:hidden block absolute top-1/2 left-0 w-[960px]
                     h-[380px] translate-x-[-290px] -translate-y-1/2 rotate-90"
            >
              <img
                src="/images/bg-outlines.svg"
                width={960}
                height={380}
                alt="outline"
                className="relative z-2"
              />
              <img
                src="/images/bg-outlines-fill.png"
                width={960}
                height={380}
                alt="outline"
                className="absolute inset-0 mix-blend-soft-light opacity-5"
              />
            </div>
          </div>
        </div>

        <button
          className="lg:hidden z-2 size-10 border-2 border-s4/25
        rounded-full flex justify-center items-center"
          onClick={() => setIsOpen((prevState) => !prevState)}
          //Checking if the State of "setIsOpen" has changed or not
        >
          <img
            src={`/images/${isOpen ? "close" : "magic"}.svg`}
            alt="magic"
            className="size-1/2 object-contain"
          />
        </button>
      </div>
    </header>
  );
};

export default Header;
