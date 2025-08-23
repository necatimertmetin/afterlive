import { useState, useEffect } from "react";
import type { Event } from "../types/Event";

export function useEvents() {
  const [events, setEvents] = useState<Event[]>([]);

  useEffect(() => {
    // jsDelivr CDN üzerinden JSON dosyanın URL'si
    const url =
      "https://cdn.jsdelivr.net/gh/necatimertmetin/afterlive@main/event.json";

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        // Object -> Array dönüştür
        const eventsArray: Event[] = Object.values(data);
        setEvents(eventsArray);
      })
      .catch((err) => {
        console.error("Failed to fetch events:", err);
        setEvents([]);
      });
  }, []);

  return events;
}
