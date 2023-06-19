import {
  STATISTICS__CARDS,
  STATISTIC_DESCRIPTION,
  STATISTIC_TITLE,
} from "../../constants";
import { Card } from "../Card/Card";
import "./Statistic.scss";
export const Statistic = () => {
  return (
    <section className="statistic">
      <h2 className="statistic__title">{STATISTIC_TITLE}</h2>
      <p className="statistic__description">{STATISTIC_DESCRIPTION}</p>
      <div className="statistic__cards">
        {STATISTICS__CARDS.map((card) => (
          <Card key={card.type} {...card}></Card>
        ))}
      </div>
    </section>
  );
};
