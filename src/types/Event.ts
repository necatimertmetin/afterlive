export interface Event {
  id: number;
  title: string;
  startDate: string; // ISO format: "2025-08-16T21:30:00"
  endDate: string;
  city: string;
  venueName: string;
  location: string; // Google Maps embed URL
  logo: string; // logo
  image: string; // poster / görsel linki
  description: string;
  channel: string;
}
