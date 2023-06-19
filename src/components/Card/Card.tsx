import "./Card.scss";
interface IProps {
  type: string;
  title: string;
  description: string;
}

export const Card = ({ type, title, description }: IProps) => {
  return (
    <div className={`card ${"card--" + type}`}>
      <div className={`card__icon ${"card__icon--" + type}`}></div>
      <div className="card__title">{title}</div>
      <div className="card__description">{description}</div>
    </div>
  );
};
