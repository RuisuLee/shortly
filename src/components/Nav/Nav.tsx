import { NAV_ITEMS } from "../../constants";

interface INavProps {
  className?: string;
}

export const Nav = ({ className }: INavProps) => {
  return (
    <nav className={className}>
      {NAV_ITEMS.map((item) => (
        <a href="/" key={item}>
          {item}
        </a>
      ))}
    </nav>
  );
};
