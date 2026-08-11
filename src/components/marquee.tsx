import { Fragment } from "react";

/** Infinite ticker; the word list is duplicated so the -50% loop is seamless. */
export function Marquee({ words }: { words: readonly string[] }) {
  const track = (
    <div className="marquee__group">
      {words.map((label) => (
        <Fragment key={label}>
          <span className="marquee__word">{label}</span>
          <span className="marquee__dot">◆</span>
        </Fragment>
      ))}
    </div>
  );

  return (
    <div aria-hidden="true" className="marquee">
      <div className="marquee__track">
        {track}
        {track}
      </div>
    </div>
  );
}
