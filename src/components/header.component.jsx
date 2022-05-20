import "./header.styles.css";
import { ReactComponent as Logo } from "../assets/logo.svg";

const Header = () => (
  <header className="absolute flex p-6 w-screen justify-around align-baseline gap-4 font-bold text-white">
    <Logo className="logo"></Logo>
    <div className="flex-grow"></div>
    <a href="#about">About me</a>
    <a href="#skills">Skills</a>
    <a href="#projects">Projects</a>
    <a href="#contact">Contact</a>
  </header>
);

export default Header;
