export interface Event {
  id: number;
  title: string;
  date: string; // ISO format: "2025-08-16T21:30:00"
  time: string; // "21:30"
  city: string;
  venueName: string;
  location: string; // Google Maps embed URL
  image: string; // Poster / görsel linki
  description: string;
  isLive?: boolean;
  streamUrl: string; // HLS (.m3u8) veya WebRTC linki
}
