import { LOGIN, SIGN_UP } from "../../constants";
import { Nav } from "../Nav/Nav";
import "./MobileMenu.scss";

export const MobileMenu = () => {
  return (
    <div className="mobile-menu">
      <Nav className="mobile-menu__nav" />
      <div className="mobile-menu__buttons-wrapper">
        <button className="mobile-menu__button--login">{LOGIN}</button>
        <button className="mobile-menu__button--sign-up">{SIGN_UP}</button>
      </div>
    </div>
  );
};
