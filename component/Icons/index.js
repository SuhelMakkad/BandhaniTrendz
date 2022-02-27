const Star = ({ className, size }) => (
  <svg
    style={{ width: size, height: size }}
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    enableBackground="new 0 0 24 24"
    height="24px"
    viewBox="0 0 24 24"
    width="24px"
    fill="#000000"
  >
    <g>
      <path d="M0,0h24v24H0V0z" fill="none" />
      <path d="M0,0h24v24H0V0z" fill="none" />
    </g>
    <g>
      <path d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z" />
    </g>
  </svg>
);

const EmptyStar = ({ className, size }) => (
  <svg
    style={{ width: size, height: size }}
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    height="24px"
    viewBox="0 0 24 24"
    width="24px"
    fill="#000000"
  >
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z" />
  </svg>
);

const HalfStar = ({ className, size }) => (
  <svg
    style={{ width: size, height: size }}
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    height="24px"
    viewBox="0 0 24 24"
    width="24px"
    fill="#000000"
  >
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4V6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z" />
  </svg>
);

const AccountCircle = ({ className, size }) => (
  <svg
    className={className}
    style={{ width: size, height: size }}
    height="24px"
    viewBox="0 0 24 24"
    width="24px"
    fill="#000000"
  >
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM7.07 18.28c.43-.9 3.05-1.78 4.93-1.78s4.51.88 4.93 1.78C15.57 19.36 13.86 20 12 20s-3.57-.64-4.93-1.72zm11.29-1.45c-1.43-1.74-4.9-2.33-6.36-2.33s-4.93.59-6.36 2.33C4.62 15.49 4 13.82 4 12c0-4.41 3.59-8 8-8s8 3.59 8 8c0 1.82-.62 3.49-1.64 4.83zM12 6c-1.94 0-3.5 1.56-3.5 3.5S10.06 13 12 13s3.5-1.56 3.5-3.5S13.94 6 12 6zm0 5c-.83 0-1.5-.67-1.5-1.5S11.17 8 12 8s1.5.67 1.5 1.5S12.83 11 12 11z" />
  </svg>
);

const LogoBox = ({ className, size = 210 }) => (
  <svg
    className={className}
    style={{ width: size, height: size }}
    width="209.282"
    height="209.826"
    viewBox="0 0 209.282 209.826"
  >
    <defs>
      <linearGradient
        id="linear-gradient-logo-box"
        x1="0.717"
        y1="0.23"
        x2="0.27"
        y2="0.768"
        gradientUnits="objectBoundingBox"
      >
        <stop offset="0" stopColor="#af2f2f" />
        <stop offset="1" stopColor="#e3c00d" />
      </linearGradient>
    </defs>
    <path
      id="logo-box"
      data-name="logo-box"
      d="M52.3,52.338,0,104.641l52.339,52.339c28.763,28.763,52.484,52.3,52.665,52.3.218,0,23.866-23.5,52.592-52.23l52.23-52.23-7.145-7.145C180.7,75.588,104.967,0,104.822,0,104.713,0,81.1,23.54,52.3,52.338Zm79.179-4.425a15.209,15.209,0,0,1,7.544,7.182c1.088,2.213,1.161,2.648,1.161,6.021,0,3.337-.109,3.845-1.161,6.057a14.235,14.235,0,1,1-22.887-16.14A14.078,14.078,0,0,1,131.481,47.914ZM75.189,56.546A13.669,13.669,0,0,1,84.656,70a13.061,13.061,0,0,1-2.9,8.741,14.276,14.276,0,1,1-15.56-22.379A18.023,18.023,0,0,1,75.189,56.546Zm80.049,41.385a14.247,14.247,0,0,1,11.607,11.353c1.269,6.2-2.285,12.985-8.27,15.778-1.85.871-2.5.979-5.876.979-3.482,0-3.99-.109-5.985-1.088a15.015,15.015,0,0,1-6.819-7c-1.052-2.249-1.161-2.72-1.161-6.057,0-3.156.145-3.881.979-5.694a15.355,15.355,0,0,1,10.446-8.233A10.466,10.466,0,0,1,155.238,97.931ZM66.121,111.714a14.264,14.264,0,0,1,5.912,22.234,13.229,13.229,0,0,1-12.078,5.223,11.56,11.56,0,0,1-5.114-1.2,16.691,16.691,0,0,1-6.891-6.928c-.871-1.886-.979-2.539-.979-5.912,0-3.518.073-3.99,1.124-6.166A14.31,14.31,0,0,1,66.121,111.714Zm51.831,28.219a14.271,14.271,0,0,1,.363,25.389,14.113,14.113,0,0,1-19.586-6.71c-.87-1.886-.979-2.539-.979-5.912s.109-4.062.979-5.876a15,15,0,0,1,8.741-7.762,15.574,15.574,0,0,1,4.824-.4C115.159,138.735,115.921,138.917,117.952,139.932Z"
      transform="translate(0 209.826) rotate(-90)"
      fill="url(#linear-gradient-logo-box)"
    />
  </svg>
);

const Share = ({ className, size = 24 }) => (
  <svg
    className={className}
    style={{ width: size, height: size }}
    width="24"
    height="24"
    viewBox="0 0 24 24"
  >
    <path d="M14,9V5l7,7-7,7V14.9c-5,0-8.5,1.6-11,5.1C4,15,7,10,14,9Z" />
  </svg>
);

export { Star, EmptyStar, HalfStar, AccountCircle, LogoBox, Share };
