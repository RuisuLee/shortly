import { useState } from "react";
import {
  SHORTEN_BUTTON_TEXT,
  SHORTEN_ERROR,
  SHORTEN_PLACEHOLDER,
} from "../../constants";
import "./Shorten.scss";
import { ShortedItem } from "../ShortedItem/ShortedItem";

export const Shorten = () => {
  const [url, setUrl] = useState("");
  const [touched, setTouched] = useState(false);
  const isUrlInvalid = url === "";

  const urls = [
    {
      originalLink: "https://stackoverflow.com/questions",
      shortedLink: "https://sm/sdf34",
      copied: false,
    },
    {
      originalLink: "https://stackoverflow.com/questions",
      shortedLink: "https://sm/sdf34",
      copied: true,
    },
  ];
  return (
    <section className="shorten__section">
      <div className="shorten__wrapper">
        <div className="shorten">
          <label htmlFor="shorten"></label>
          <input
            name="shorten"
            type="text"
            placeholder={SHORTEN_PLACEHOLDER}
            className={`shorten__input ${
              isUrlInvalid && touched ? "shorten__input--invalid" : ""
            }`}
            value={url}
            onBlur={() => setTouched(true)}
            onChange={(e) => {
              setUrl(e.target.value);
            }}
          />
          {isUrlInvalid && touched && (
            <div className="shorten__error">{SHORTEN_ERROR}</div>
          )}
        </div>
        <button
          type="button"
          className={`shorten__button ${
            isUrlInvalid && touched ? "shorten__button--invalid" : ""
          }`}
        >
          {SHORTEN_BUTTON_TEXT}
        </button>
      </div>
      {urls.map((url, index) => (
        <ShortedItem key={index} {...url} />
      ))}
    </section>
  );
};
