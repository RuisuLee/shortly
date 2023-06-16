import { BOOST_TEXT, GET_STARTED } from "../../constants";
import "./Boost.scss";
export const Boost = () => {
  return (
    <section className="boost">
      <h1 className="boost__title">{BOOST_TEXT}</h1>
      <button className="boost__button">{GET_STARTED}</button>
    </section>
  );
};
