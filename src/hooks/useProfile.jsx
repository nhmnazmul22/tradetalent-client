import { useContext } from "react";
import ProfileContext from "@/context/ProfileContext/ProfileContext.jsx";

const useProfileContext = () => {
  const context = useContext(ProfileContext);

    if (!context) {
    throw new Error("useProfileContext must be used within an profileContextProvider");
  }

  return context;
};

export default useProfileContext;
