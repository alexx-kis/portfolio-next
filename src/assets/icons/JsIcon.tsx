import * as React from "react";
import type { SVGProps } from "react";
const SvgJsIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    viewBox="0 0 50 50"
    width="1em"
    height="1em"
    {...props}
  >
    <style>{".js-icon_svg__st2{fill:#f7f5f4}"}</style>
    <g id="js-icon_svg__Layer_2">
      <path
        d="M4 2.2h42l-3.8 42.1L25 48.7 7.9 44.3z"
        style={{
          fill: "#fa9c28",
        }}
      />
      <path
        d="M25 3.5v42.4l15.4-3.6 3.3-38.8z"
        style={{
          fill: "#ffca46",
        }}
      />
      <path
        d="M17.6 8.7H23v34.1l-11.9-3.4v-7l6.5 2zM40.4 8.7H27v19.5h5.7l-.4 8.1-5.3 1.2v5.3l10.3-2.9 1.4-18h-6.9v-7.6l8-.1z"
        className="js-icon_svg__st2"
      />
    </g>
  </svg>
);
export default SvgJsIcon;
