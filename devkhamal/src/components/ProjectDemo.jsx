import React from "react";
import "../styles/ProjectDemo.css"; // import CSS

function ProjectDemo({ projectobj }) {
  return (
    <div className="tooltip-container">
      <div className="tooltip-content">
        <div className="tooltip-box">
          <svg
            fill="none"
            viewBox="0 0 24 24"
            height="20px"
            width="20px"
            xmlns="http://www.w3.org/2000/svg"
            className="tooltip-icon"
          >
            <circle strokeLinejoin="round" r={9} cy={12} cx={12} />
            <path
              strokeLinejoin="round"
              d="M12 3C12 3 8.5 6 8.5 12C8.5 18 12 21 12 21"
            />
            <path
              strokeLinejoin="round"
              d="M12 3C12 3 15.5 6 15.5 12C15.5 18 12 21 12 21"
            />
            <path strokeLinejoin="round" d="M3 12H21" />
            <path strokeLinejoin="round" d="M19.5 7.5H4.5" />
            <path strokeLinejoin="round" d="M19.5 16.5H4.5" />
          </svg>
          <span>{projectobj.link}</span>
        </div>
        <div className="tooltip-arrow"></div>
        <div className="tooltip-bg"></div>
      </div>

      <div className="tooltip-button">
        <svg
          fill="none"
          viewBox="0 0 24 24"
          height="20px"
          width="20px"
          xmlns="http://www.w3.org/2000/svg"
          className="tooltip-button-icon"
        >
          <path
            strokeLinejoin="round"
            strokeLinecap="round"
            d="M15.4306 7.70172C7.55045 7.99826 3.43929 15.232 2.17021 19.3956C2.07701 19.7014 2.31139 20 2.63107 20C2.82491 20 3.0008 19.8828 3.08334 19.7074C6.04179 13.4211 12.7066 12.3152 15.514 12.5639C15.7583 12.5856 15.9333 12.7956 15.9333 13.0409V15.1247C15.9333 15.5667 16.4648 15.7913 16.7818 15.4833L20.6976 11.6784C20.8723 11.5087 20.8993 11.2378 20.7615 11.037L16.8456 5.32965C16.5677 4.92457 15.9333 5.12126 15.9333 5.61253V7.19231C15.9333 7.46845 15.7065 7.69133 15.4306 7.70172Z"
          />
        </svg>
        <span>Visit The Website</span>
      </div>
    </div>
  );
}

export default ProjectDemo;
