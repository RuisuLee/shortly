import { ReactComponent as Logo } from "../../assets/logo.svg";
import { ReactComponent as Instagram } from "../../assets/icon-instagram.svg";
import { ReactComponent as Pinterest } from "../../assets/icon-pinterest.svg";
import { ReactComponent as Twitter } from "../../assets/icon-twitter.svg";
import { ReactComponent as Facebook } from "../../assets/icon-facebook.svg";

interface IProps {
  name: string;
  style?: string;
}
export const Icon = ({ name, style }: IProps) => {
  const getIcon = (name: string, style?: string) => {
    switch (name) {
      case "logo":
        return <Logo className={style} />;
      case "facebook":
        return <Facebook className={style} />;
      case "twitter":
        return <Twitter className={style} />;
      case "pinterest":
        return <Pinterest className={style} />;
      case "instagram":
        return <Instagram className={style} />;
      default:
        break;
    }
  };
  return <>{getIcon(name, style)}</>;
};
