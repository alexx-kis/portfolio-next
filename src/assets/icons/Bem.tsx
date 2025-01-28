import * as React from "react";
import type { SVGProps } from "react";
const SvgBem = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    viewBox="0 0 50.3 40.7"
    width="1em"
    height="1em"
    {...props}
  >
    <path
      fill="none"
      stroke="#000"
      strokeWidth={3}
      d="M2.5 3.4h10.8M2.5 9.1h10.8"
    />
    <path d="M24.2 16.2H2.5v-3h21.6c3.3 0 5.1 2 5.2 5-1.1-1.4-3.1-1.8-5.1-2M24.2 30.1H2.5v3h21.6c3.3 0 5.1-2 5.2-5-1.1 1.4-3.1 1.8-5.1 2M24.2 22.1H2.5v-3h21.6c3.1 0 4.3 1.1 5.1 3zM24.2 24.3H2.5v3h21.6c3.1 0 4.3-1.1 5.1-3zM31.4 33.5h16.7V35H31.4c-.8-.1-1.3-.6-1.6-1.5zM31.4 37.2h16.7v1.4H31.4c-1.5 0-1.8-1.5-1.8-2.4 0-.1.5 1 1.8 1" />
  </svg>
);
export default SvgBem;
