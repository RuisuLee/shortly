import { COPIED, COPY } from "../../constants";
import "./ShortedItem.scss";

interface IProps {
  originalLink: string;
  shortedLink: string;
  copied: boolean;
}

export const ShortedItem = ({ originalLink, shortedLink, copied }: IProps) => {
  return (
    <div className="shorted-item">
      <div className="shorted-item__original-link">{originalLink}</div>
      <div className="shorted-item__shorted-section">
        <div className="shorted-item__shorted-link">{shortedLink}</div>
        <button
          className={`shorted-item__copy ${
            copied ? "shorted-item__copy--copied" : ""
          }`}
        >
          {copied ? COPIED : COPY}
        </button>
      </div>
    </div>
  );
};
