import { useState, useEffect } from "react";
import type { Event } from "../types/Event";
import { db } from "../firebase"; // firebase.ts yolu
import { ref, onValue } from "firebase/database";

export function useEvents() {
  const [events, setEvents] = useState<Event[]>([]);

  useEffect(() => {
    const eventsRef = ref(db); // Firebase DB'deki 'events' node'u
    const unsubscribe = onValue(eventsRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        // Object -> Array dönüştür
        const eventsArray: Event[] = Object.values(data);
        setEvents(eventsArray);
      } else {
        setEvents([]);
      }
    });
    console.log(events);
    // Cleanup
    return () => unsubscribe();
  }, [events]);

  return events;
}
