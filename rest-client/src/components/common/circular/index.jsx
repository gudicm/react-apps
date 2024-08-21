import "./index.css"; // CSS for animation
import { PropTypes } from "prop-types";

const Circular = ({
  size = 100, // Diameter of the circle
  color = "#4caf50", // Color of the circle
  strokeWidth = 10, // Width of the stroke
}) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;

  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      className="animated-circular"
    >
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        stroke={color}
        strokeWidth={strokeWidth}
        fill="none"
        className="background-circle"
      />
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        stroke={color}
        strokeWidth={strokeWidth}
        fill="none"
        className="loading-circle"
        style={{
          strokeDasharray: circumference,
          strokeDashoffset: circumference * 0.75,
        }}
      />
    </svg>
  );
};

Circular.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string,
  strokeWidth: PropTypes.number,
};

export default Circular;
