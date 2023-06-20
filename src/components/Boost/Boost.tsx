import { useSelector } from "react-redux";
import { BOOST_TEXT, GET_STARTED } from "../../constants";
import "./Boost.scss";
import { RootState } from "../../store";

export const Boost = () => {
  const shortenRef = useSelector((state: RootState) => state.shorten.ref);

  const onGetStartedClick = () => {
    shortenRef?.current?.scrollIntoView();
  };
  return (
    <section className="boost">
      <h1 className="boost__title">{BOOST_TEXT}</h1>
      <button
        className="boost__button"
        onClick={() => {
          onGetStartedClick();
        }}
      >
        {GET_STARTED}
      </button>
    </section>
  );
};
