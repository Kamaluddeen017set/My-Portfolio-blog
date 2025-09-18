import { createContext, useContext, useState, useCallback } from "react";
import Alert from "./Alert";

const AlertContext = createContext();
export const useAlert = () => useContext(AlertContext);

export const AlertProvider = ({ children }) => {
  const [alert, setAlert] = useState(null);

  const showAlert = useCallback(
    (message, type = "success", duration = 3000) => {
      setAlert({ message, type, duration });
    },
    []
  );

  return (
    <AlertContext.Provider value={{ showAlert }}>
      {children}
      {alert && (
        <Alert
          message={alert.message}
          type={alert.type}
          duration={alert.duration}
          onClose={() => setAlert(null)}
        />
      )}
    </AlertContext.Provider>
  );
};
