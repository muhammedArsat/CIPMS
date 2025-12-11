import { useContext } from "react";
import { ThemeContext } from "../hooks/ThemeContext";

const Logo = () => {
  const { isDark } = useContext(ThemeContext);
  return (
    <svg
      width="150"
      height="50"
      viewBox="0 0 150 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="pl-6 sm:pl-0"
    >
      <g id="CIPMS_Logo">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M25 9C16.1634 9 9 16.1634 9 25C9 33.8366 16.1634 41 25 41V34C20.0294 34 16 29.9706 16 25C16 20.0294 20.0294 16 25 16V9Z"
          fill="#2563EB"
        />

        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M25 9V16C27.817 16 30.339 17.295 32.023 19.36L36.5 14.5C33.6 11.1 29.5 9 25 9Z"
          fill="#2563EB"
        />

        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M25 41C29.5 41 33.6 38.9 36.5 35.5L32.023 30.64C30.339 32.705 27.817 34 25 34V41Z"
          fill="#2563EB"
        />

        <text
          x="48"
          y="32"
          className="font-secondary dark:text-white"
          fontWeight="bold"
          fontSize="24"
          fill={isDark?"#FFFFFF":"#1F2937"}
          letterSpacing="-0.5"
        >
          CIPMS
        </text>
      </g>
    </svg>
  );
};

export default Logo;
