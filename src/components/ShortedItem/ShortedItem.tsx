import { useState } from "react";
import { COPIED, COPY } from "../../constants";
import { Link } from "../../types/ShortedUrlApiResponse";
import "./ShortedItem.scss";

export const ShortedItem = ({ originalUrl, shortedUrl }: Link) => {
  const [copied, setCopied] = useState(false);

  const onCopyButtonClick = () => {
    navigator.clipboard.writeText(shortedUrl);
    setCopied(true);
  };
  return (
    <div className="shorted-item">
      <div className="shorted-item__original-link">{originalUrl}</div>
      <div className="shorted-item__shorted-section">
        <div className="shorted-item__shorted-link">{shortedUrl}</div>
        <button
          className={`shorted-item__copy ${
            copied ? "shorted-item__copy--copied" : ""
          }`}
          onClick={() => {
            onCopyButtonClick();
          }}
        >
          {copied ? COPIED : COPY}
        </button>
      </div>
    </div>
  );
};
