import { ABOUT_DESCRIPTION, ABOUT_TITLE, GET_STARTED } from "../../constants";
import "./About.scss";

export const About = () => {
  return (
    <section className="about">
      <div className="about__image"></div>
      <h1 className="about__title">{ABOUT_TITLE}</h1>
      <p className="about__description">{ABOUT_DESCRIPTION}</p>
      <button className="about__button">{GET_STARTED}</button>
    </section>
  );
};
