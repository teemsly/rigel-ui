import * as React from "react";

function SvgMenu(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fillRule="evenodd"
      clipRule="evenodd"
      strokeLinejoin="round"
      strokeMiterlimit={2}
      {...props}
    >
      <path d="M4 6.75h16a.75.75 0 000-1.5H4a.75.75 0 000 1.5zM4 12.75h16a.75.75 0 000-1.5H4a.75.75 0 000 1.5zM4 18.75h16a.75.75 0 000-1.5H4a.75.75 0 000 1.5z" />
    </svg>
  );
}

export default SvgMenu;
