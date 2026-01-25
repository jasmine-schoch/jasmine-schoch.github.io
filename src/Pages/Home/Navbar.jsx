import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { Route, Link as RouterLink, useLocation } from "react-router-dom";
import MainSection from "./MainSection";

function Navbar() {
    const [navActive, setNavActive] = useState(false);
    const location = useLocation();
    const isHomePage = location.pathname === '/';
    
    const toggleNav = () => {
        setNavActive(!navActive);
    }

    const closeMenu = () => {
        setNavActive(false);
    }

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 500) {
                closeMenu();
            }
        }
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        }
    }, []);

    useEffect(() => {
        if (window.innerWidth <= 1200) {
            closeMenu();
        }
    }, []);

    return (
        <nav className={`navbar ${navActive ? "active" : ""}`}>
            <div>
                <img src="./img/logo.jpeg" alt="Logo featuring a Jasmine flower and bamboo" />
            </div>
            <a className={`nav__hamburger ${navActive ? "active" : ""}`} 
            onClick={toggleNav}
            >
                <span className="nav__hamburger__line"></span>
                <span className="nav__hamburger__line"></span>
                <span className="nav__hamburger__line"></span>
            </a>
            <div className={`navbar--items ${navActive ? "active" : ""}`}> 
                <ul>
                <li>
                    {isHomePage ? (
                        <Link
                            onClick={closeMenu}
                            activeClass="navbar--active-content"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            to="MainSection"
                            className="navbar--content"
                        >
                            Home
                        </Link>
                    ) : (
                        <RouterLink
                            onClick={closeMenu}
                            to="/"
                            className="navbar--content"
                        >
                            Home
                        </RouterLink>
                        )}
                    </li>
                    <li>
                        <RouterLink 
                            onClick={closeMenu}
                            activeClass="navbar--active-content"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            durtaion={500}
                            to="/portfolio"
                            className="navbar--content"
                        >
                            Technical Experience
                            </RouterLink >
                    </li>
                    <li>
                        <RouterLink 
                            onClick={closeMenu}
                            activeClass="navbar--active-content"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            durtaion={500}
                            to="/performing-arts"
                            className="navbar--content"
                        >
                            Dance & Music
                            </RouterLink>
                    </li>
                    <li>
                        <RouterLink 
                            onClick={closeMenu}
                            activeClass="navbar--active-content"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            durtaion={500}
                            to="/life-adventures"
                            className="navbar--content"
                        >
                            Life Adventures
                            </RouterLink>
                    </li>
                    <li>
                    {isHomePage ? (
                        <Link
                            onClick={closeMenu}
                            activeClass="navbar--active-content"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            to="AboutMe"
                            className="navbar--content"
                        >
                            About Me
                        </Link>
                    ) : (
                        <RouterLink
                            onClick={closeMenu}
                            to="/about-me"
                            className="navbar--content"
                        >
                            About Me
                        </RouterLink>
                        )}
                    </li>
                </ul>
            </div>
            {/* Contact section scroll link - uncomment if you build out an actual Contact section
            <Link
            onClick={closeMenu}
                activeClass="navbar--active-content"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="Contact"
                className="btn btn-outline-primary"
            >
            Contact Me!
            </Link>
            */}
            <a
                href="mailto:jasmineyschoch@gmail.com"
                onClick={closeMenu}
                className="btn btn-primary"
                target="_self"
                rel="noopener noreferrer"
            >
                Contact Me!
            </a>
        </nav>
    );
}

export default Navbar;
