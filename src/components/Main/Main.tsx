import { About } from "../About/About";
import { Boost } from "../Boost/Boost";
import { Shorten } from "../Shorten/Shorten";
import { Statistic } from "../Statistic/Statistic";
import "./Main.scss";
export const Main = () => {
  return (
    <main>
      <About></About>
      <Shorten></Shorten>
      <Statistic></Statistic>
      <Boost></Boost>
    </main>
  );
};
