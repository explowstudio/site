import { forwardRef } from "react";
import { Icon } from "@phosphor-icons/react";

export const Mouse: Icon = forwardRef((props, ref) => (
  <svg
    width="15"
    height="26"
    viewBox="0 0 15 26"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    ref={ref}
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.4284 19V19C3.8932 19 1 16.1068 1 12.5716V7.4284C1 3.8932 3.8932 1 7.4284 1V1C10.9636 1 13.8568 3.8932 13.8568 7.4284V12.5716C13.8568 16.1068 10.9636 19 7.4284 19Z"
      stroke="#3F3F3F"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M3.8291 22.6001L7.4291 25.0001L11.0291 22.6001"
      stroke="#878787"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M7.4291 6.14331V8.71491"
      stroke="#3F3F3F"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
));

Mouse.displayName = "Mouse";
