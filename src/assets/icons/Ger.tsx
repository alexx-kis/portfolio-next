import * as React from "react";
import type { SVGProps } from "react";
const SvgGer = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    viewBox="0 0 45 45"
    width="1em"
    height="1em"
    {...props}
  >
    <path
      d="M2.8 18h39.4v9H2.8z"
      style={{
        fill: "#d20005",
      }}
    />
    <path
      d="M2.8 27h39.4v7c0 1.1-.9 2-2 2H4.8c-1.1 0-2-.9-2-2z"
      style={{
        fill: "#fec509",
      }}
    />
    <path d="M42.2 18H2.8v-7c0-1.1.9-2 2-2h35.4c1.1 0 2 .9 2 2z" />
  </svg>
);
export default SvgGer;
