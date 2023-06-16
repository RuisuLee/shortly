import { FOOTER_ICONS, FOOTER_LINKS } from "../../constants";
import { FooterColumn } from "../FooterColumn/FooterColumn";
import { Icon } from "../Icon/Icon";
import "./Footer.scss";

export const Footer = () => {
  return (
    <footer className="footer">
      <Icon name="logo" style="footer__logo" />
      <div className="footer__links-wrapper">
        {FOOTER_LINKS.map((item, index) => (
          <FooterColumn key={index} {...item}></FooterColumn>
        ))}
      </div>
      <div>
        {FOOTER_ICONS.map((icon) => (
          <Icon name={icon} key={icon} style="footer__icon" />
        ))}
      </div>
    </footer>
  );
};
