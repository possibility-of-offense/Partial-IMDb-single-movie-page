import { useCallback, useState } from "react";

function useTooltip() {
  const [isHovering, setIsHovering] = useState(false);

  const action = useCallback((type) => {
    if (type === "hover") {
      setIsHovering((prev) => !prev);
    } else if (type === "unhover") {
      setIsHovering((prev) => !prev);
    }
  }, []);

  return [isHovering, action];
}

export default useTooltip;
