import { useEffect } from "react";

const useUserId = () => {
  useEffect(() => {
    const userId = sessionStorage.getItem("userId");

    if (!userId) {
      sessionStorage.setItem(
        "userId",
        (Math.random() + 1).toString(36).substring(2, 10)
      );
    }
  }, []);
};

export default useUserId;
