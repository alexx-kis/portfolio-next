import * as React from "react";
import type { SVGProps } from "react";
const SvgHtmlIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    viewBox="0 0 50 50"
    width="1em"
    height="1em"
    {...props}
  >
    <path
      d="M4.6 2h40.6l-3.6 42.2L25 48.7 8.2 44.1z"
      style={{
        fill: "#ff3336",
      }}
    />
    <path
      d="M24.9 3.9v42.7l14.7-3.7 3.6-39z"
      style={{
        fill: "#fe7a63",
      }}
    />
    <path
      d="m36.8 15.3.7-5.1H12.9l1.9 18.4 15.5.1-.4 5.5-4.9 1.9-4.8-2v-2.9H15v6.2l10 4 9.8-3.3 1.3-15-16.6.2-.6-8z"
      style={{
        fill: "#f7f6f6",
      }}
    />
  </svg>
);
export default SvgHtmlIcon;
