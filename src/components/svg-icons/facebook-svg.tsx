import React from "react";

function FacebookSVG() {
  const uid = React.useId();
  return (
    <div>
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath={`url(#${uid}-clip0_1_817)`}>
          <path
            d="M8 0.000244141C3.58176 0.000244141 0 3.582 0 8.00024C0 11.7519 2.58304 14.9001 6.06752 15.7647V10.445H4.41792V8.00024H6.06752V6.9468C6.06752 4.22392 7.29984 2.96184 9.97312 2.96184C10.48 2.96184 11.3546 3.06136 11.7123 3.16056V5.37656C11.5235 5.35672 11.1955 5.3468 10.7882 5.3468C9.47648 5.3468 8.9696 5.84376 8.9696 7.1356V8.00024H11.5827L11.1338 10.445H8.9696V15.9417C12.9309 15.4633 16.0003 12.0905 16.0003 8.00024C16 3.582 12.4182 0.000244141 8 0.000244141Z"
            className="bg-muted fill-muted"
            fillOpacity="0.55"
          />
        </g>
        <defs>
         <clipPath id={`${uid}-clip0_1_817`}>
            <rect
              width="16"
              height="16"
              className="bg-muted fill-muted"
              transform="translate(0 0.000244141)"
            />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

export default FacebookSVG;
