import "./FooterColumn.scss";

interface IProps {
  title: string;
  links: Array<string>;
}

export const FooterColumn = ({ title, links }: IProps) => {
  return (
    <div className="column">
      <div className="column__title">{title}</div>
      {links.map((link, index) => (
        <div className="column__link" key={index}>
          {link}
        </div>
      ))}
    </div>
  );
};
