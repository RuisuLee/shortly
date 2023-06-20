import { useSelector } from "react-redux";
import { ABOUT_DESCRIPTION, ABOUT_TITLE, GET_STARTED } from "../../constants";
import "./About.scss";
import { RootState } from "../../store";

export const About = () => {
  const shortenRef = useSelector((state: RootState) => state.shorten.ref);

  const onGetStartedClick = () => {
    shortenRef?.current?.scrollIntoView();
  };
  return (
    <section className="about">
      <div className="about__image"></div>
      <h1 className="about__title">{ABOUT_TITLE}</h1>
      <p className="about__description">{ABOUT_DESCRIPTION}</p>
      <button
        className="about__button"
        onClick={() => {
          onGetStartedClick();
        }}
      >
        {GET_STARTED}
      </button>
    </section>
  );
};
