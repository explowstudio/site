import { config } from "@/ui/stitches.config";
import { useEffect, useState } from "react";

export function useBreakpointMatches(media: keyof typeof config.media) {
  const [isMatches, setIsMatches] = useState(() => {
    if (typeof window === "undefined") {
      return false;
    }

    return window.matchMedia(config.media[media]).matches;
  });

  useEffect(() => {
    function handleResize() {
      setIsMatches(window.matchMedia(config.media[media]).matches);
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [media]);

  return isMatches;
}
