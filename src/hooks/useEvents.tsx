import { useState, useEffect } from "react";
import type { Event } from "../types/Event";

const mockEvents: Event[] = [
  {
    id: 1,
    title: "Rhythms Live",
    date: "2025-08-16T21:30:00",
    time: "21:30",
    city: "Izmir",
    venueName: "Alsancak Pub",
    location: "https://www.google.com/maps/embed?pb=!1m18!...",
    image: "https://picsum.photos/id/1011/800/450",
    description: "Energetic live music night",
    isLive: true,
    streamUrl: "https://yourdomain.com/streams/alsancak-pub.m3u8",
  },
  {
    id: 2,
    title: "Jazz Night",
    date: "2025-08-29T20:00:00",
    time: "20:00",
    city: "Ankara",
    venueName: "Ankara Jazz Club",
    location: "https://www.google.com/maps/embed?pb=!1m18!...",
    image: "https://picsum.photos/id/1015/800/450",
    description: "Smooth jazz evening event",
    isLive: false,
    streamUrl: "https://yourdomain.com/streams/ankara-jazz.m3u8",
  },
  {
    id: 3,
    title: "Rock Festival",
    date: "2025-02-05T19:00:00",
    time: "19:00",
    city: "Istanbul",
    venueName: "Kadikoy Rock Arena",
    location: "https://www.google.com/maps/embed?pb=!1m18!...",
    image: "https://picsum.photos/id/1016/800/450",
    description: "High energy rock festival",
    isLive: true,
    streamUrl: "https://yourdomain.com/streams/kadikoy-rock.m3u8",
  },
  {
    id: 4,
    title: "Electronic Beats",
    date: "2025-02-17T22:00:00",
    time: "22:00",
    city: "Antalya",
    venueName: "Antalya Beach Club",
    location: "https://www.google.com/maps/embed?pb=!1m18!...",
    image: "https://picsum.photos/id/1021/800/450",
    description: "Electronic music party",
    isLive: false,
    streamUrl: "https://yourdomain.com/streams/antalya-electro.m3u8",
  },
  {
    id: 5,
    title: "Soul Session",
    date: "2025-03-09T18:30:00",
    time: "18:30",
    city: "Bursa",
    venueName: "Bursa Soul Lounge",
    location: "https://www.google.com/maps/embed?pb=!1m18!...",
    image: "https://picsum.photos/id/1025/800/450",
    description: "Relaxing soul music",
    isLive: true,
    streamUrl: "https://yourdomain.com/streams/bursa-soul.m3u8",
  },
  {
    id: 6,
    title: "Blues Evening",
    date: "2025-03-21T20:45:00",
    time: "20:45",
    city: "Izmir",
    venueName: "Izmir Blues Bar",
    location: "https://www.google.com/maps/embed?pb=!1m18!...",
    image: "https://picsum.photos/id/1031/800/450",
    description: "Classic blues night",
    isLive: false,
    streamUrl: "https://yourdomain.com/streams/izmir-blues.m3u8",
  },
  {
    id: 7,
    title: "Folk Fest",
    date: "2025-04-11T17:00:00",
    time: "17:00",
    city: "Ankara",
    venueName: "Ankara Folk House",
    location: "https://www.google.com/maps/embed?pb=!1m18!...",
    image: "https://picsum.photos/id/1035/800/450",
    description: "Traditional folk celebration",
    isLive: true,
    streamUrl: "https://yourdomain.com/streams/ankara-folk.m3u8",
  },
  {
    id: 8,
    title: "Pop Extravaganza",
    date: "2025-04-29T22:30:00",
    time: "22:30",
    city: "Istanbul",
    venueName: "Istanbul Pop Arena",
    location: "https://www.google.com/maps/embed?pb=!1m18!...",
    image: "https://picsum.photos/id/1040/800/450",
    description: "Exciting pop music night",
    isLive: false,
    streamUrl: "https://yourdomain.com/streams/istanbul-pop.m3u8",
  },
];

export function useEvents() {
  const [events, setEvents] = useState<Event[]>([]);

  useEffect(() => {
    // API’den veya Firebase’den fetch yapılabilir
    setEvents(mockEvents);
  }, []);

  return events;
}
