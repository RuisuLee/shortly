import "./Header.scss";
import logo from "../../assets/logo.svg";
import { Nav } from "../Nav/Nav";
import { LOGIN, SIGN_UP } from "../../constants";
import { useState } from "react";
import { createPortal } from "react-dom";
import { MobileMenu } from "../MobileMenu/MobileMenu";

export const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const onShowMenuClick = () => {
    showMenu ? setShowMenu(false) : setShowMenu(true);
  };
  return (
    <header className="header">
      <img src={logo} alt="Shortly logo" className="header__logo"></img>
      <Nav className="header__nav" />
      <div className="header__buttons-wrapper">
        <button className="header__button--login">{LOGIN}</button>
        <button className="header__button--sign-up">{SIGN_UP}</button>
      </div>
      <button
        className="header__button--menu"
        onClick={() => onShowMenuClick()}
      ></button>

      {showMenu && createPortal(<MobileMenu />, document.body)}
    </header>
  );
};
