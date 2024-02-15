import { useEffect } from "react";

const useUserId = () => {
  useEffect(() => {
    const userId = sessionStorage.getItem("userId") || "";

    if (!userId) {
      const newUserId = (Math.random() + 1).toString(36).substring(2, 10);
      sessionStorage.setItem("userId", newUserId);
    } else {
    }
  }, []);
};

export default useUserId;
