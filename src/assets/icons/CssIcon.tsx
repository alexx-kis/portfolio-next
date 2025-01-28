import * as React from "react";
import type { SVGProps } from "react";
const SvgCssIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    viewBox="0 0 50 50"
    width="1em"
    height="1em"
    {...props}
  >
    <path
      d="M3.7 1.3h42.5l-3.1 44.1L25 49.3 7.3 45.4z"
      style={{
        fill: "#007db7",
      }}
    />
    <path
      d="M24.9 3.4v43.5l15.6-3.8 3.3-39.7z"
      style={{
        fill: "#009ee9",
      }}
    />
    <path
      d="M11.9 8v6h20.2l-.3 7.1H18.2V27h13.4l-.3 7.4-6.3 1.7-6.2-2.3v-2.5H14l.6 6.7 10.3 3.9 11.5-3.5L38.8 8z"
      style={{
        fill: "#fff",
      }}
    />
  </svg>
);
export default SvgCssIcon;
