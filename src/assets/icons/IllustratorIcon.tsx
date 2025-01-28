import * as React from "react";
import type { SVGProps } from "react";
const SvgIllustratorIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    data-name="Layer 2"
    viewBox="0 0 50 50"
    width="1em"
    height="1em"
    {...props}
  >
    <rect width={50} height={50} fill="#300" rx={8.9} ry={8.9} />
    <path
      fill="#ff9a00"
      d="m10.2 35.1 7.6-22.4H23l7.8 22.4H26l-1.8-5.3h-7.7l-1.7 5.3z"
    />
    <path fill="#300" d="M22.9 25.5h-5.3l2.7-8.9z" />
    <path fill="#ff9a00" d="M33.1 18.4h4.6v16.8h-4.6z" />
    <circle cx={35.4} cy={13.8} r={2.7} fill="#ff9a00" />
  </svg>
);
export default SvgIllustratorIcon;
