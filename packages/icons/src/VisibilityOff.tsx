import React, { FC, SVGProps } from "react";

export const VisibilityOff: FC<SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
      <g opacity="0.5">
        <path
          d="M4 4L20 20"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M16.5 16.756C15.1474 17.4846 13.6186 18 12 18C6.47715 18 2 12 2 12C2 12 4.08842 9.20123 7.17205 7.4267M19.5 14.6337C21.0559 13.2652 22 12 22 12C22 12 17.5228 6 12 6C11.6625 6 11.3289 6.02241 11 6.06448"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M13.3229 13.5C12.9703 13.8112 12.5072 14 12 14C10.8954 14 10 13.1046 10 12C10 11.4605 10.2136 10.9709 10.5609 10.6111"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
};
