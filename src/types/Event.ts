export interface Event {
  id: number;
  title: string;
  date: string; // ISO format: "2025-08-16T21:30:00"
  city: string;
  venueName: string;
  location: string; // Google Maps embed URL
  image: string; // Poster / görsel linki
  description: string;
  channel: string;
}
