import "./header.styles.css";
import { ReactComponent as Logo } from "../../assets/logo.svg";

const Header = () => (
  <header className="absolute flex px-36 pt-8 w-full justify-between align-baseline font-bold text-white">
    <a href="#home">
      <Logo className="h-12 w-12"></Logo>
    </a>
    <div className="flex gap-x-8 text-xl">
      <a href="#about">About me</a>
      <a href="#skills">Skills</a>
      <a href="#projects">Projects</a>
    </div>
  </header>
);

export default Header;
