import { useEffect } from "react";

//Custom hook to display a confirmation dialog when the user tries to leave the page.
const useBeforeUnload = (message) => {
  const handleBeforeUnload = (event) => {
    event.preventDefault();
    event.returnValue = message;
  };

  useEffect(() => {
    // Add event listener for beforeunload when the component mounts
    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      // Remove event listener for beforeunload when the component unmounts
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);
};

export default useBeforeUnload;
