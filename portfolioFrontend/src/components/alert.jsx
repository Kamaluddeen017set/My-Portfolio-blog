import { useEffect } from "react";
import "../styles/Alerti.css";

const Alert = ({ message, type = "success", duration = 3000, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, duration);
    return () => clearTimeout(timer);
  }, [duration, onClose]);

  return (
    <div className={`alert ${type} show`}>
      <span>{message}</span>
      <div
        className="loader"
        style={{ animationDuration: `${duration}ms` }}
      ></div>
    </div>
  );
};

export default Alert;
