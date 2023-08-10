import { useCallback } from "react";

type Params = {
  name: string;
  category: string;
  label: string;
};

export function useDispatchEvent() {
  const dispatchEvent = useCallback((params: Params) => {
    if (typeof window === "undefined") {
      return;
    }

    return window.gtag("event", params.name, {
      event_category: params.category,
      event_label: params.label,
    });
  }, []);

  return {
    dispatchEvent,
  };
}
