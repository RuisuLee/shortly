import { useEffect, useRef, useState } from "react";
import {
  SHORTEN_BUTTON_TEXT,
  SHORTEN_ERROR,
  SHORTEN_PLACEHOLDER,
} from "../../constants";
import "./Shorten.scss";
import { ShortedItem } from "../ShortedItem/ShortedItem";
import { RootState, useStoreDispatch } from "../../store";
import { useSelector } from "react-redux";
import { shortLink } from "../../store/links";
import { changeShortenRef } from "../../store/shorten";

export const Shorten = () => {
  const [url, setUrl] = useState("");
  const [touched, setTouched] = useState(false);
  const isUrlInvalid = url === "";
  const shortenRef = useRef(null);

  const dispatch = useStoreDispatch();
  const urls = useSelector((state: RootState) => state.links.links);

  const onShortButtonClick = () => {
    if (isUrlInvalid) {
      return;
    }
    dispatch(shortLink(url));
  };

  useEffect(() => {
    dispatch(changeShortenRef(shortenRef));
  }, []);

  return (
    <>
      <section ref={shortenRef} className="shorten__section">
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
            onClick={() => onShortButtonClick()}
          >
            {SHORTEN_BUTTON_TEXT}
          </button>
        </div>
      </section>
      {urls.length !== 0 && (
        <section className="shorted-items">
          {urls.map((url) => (
            <ShortedItem key={url.id} {...url} />
          ))}
        </section>
      )}
    </>
  );
};
