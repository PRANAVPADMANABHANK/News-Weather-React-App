import { useEffect } from "react";

const useBeforeUnload = (message) => {
  const handleBeforeUnload = (event) => {
    event.preventDefault();
    event.returnValue = message;
  };

  useEffect(() => {
    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);
};

export default useBeforeUnload;
