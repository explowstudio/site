interface Window {
  gtag: (
    type: "event",
    eventName: string,
    options?: { event_category?: string; event_label?: string; value?: number },
  ) => void;
}
