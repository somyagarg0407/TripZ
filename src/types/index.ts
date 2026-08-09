// ============================================================
// TripZ — Core TypeScript Types
// ============================================================

export interface Destination {
  id: string;
  name: string;
  country: string;
  region: string;
  description: string;
  shortDescription: string;
  imageUrl: string;
  categories: DestinationCategory[];
  suitabilityScore: number;
  bestTravelWindow: string;
  weather: WeatherInfo;
  highlights: string[];
  isFeatured?: boolean;
  isTrending?: boolean;
}

export type DestinationCategory =
  | 'Mountains'
  | 'Beaches'
  | 'Cities'
  | 'Culture'
  | 'Adventure'
  | 'Nature'
  | 'Luxury'
  | 'Budget';

export interface WeatherInfo {
  temperature: string;
  condition: string;
  rainProbability: number;
  humidity: number;
  season: string;
  icon: string;
}

export interface TrendingDestination {
  id: string;
  name: string;
  country: string;
  countryCode: string;
  imageUrl: string;
  category: string;
  interestSurge: number;
  bestWindow: string;
  suitabilityScore: number;
  weather: WeatherInfo;
  description: string;
}

export interface Trip {
  id: string;
  title: string;
  destination: string;
  country: string;
  imageUrl: string;
  startDate: string;
  endDate: string;
  status: 'upcoming' | 'saved' | 'past';
  suitabilityScore?: number;
  weather?: WeatherInfo;
  itinerary?: ItineraryDay[];
  travelers?: number;
  budget?: string;
  travelStyle?: string;
}

export interface ItineraryDay {
  day: number;
  date: string;
  weather: WeatherInfo;
  activities: Activity[];
  meals: string[];
  tips: string[];
  estimatedCost: string;
}

export interface Activity {
  time: string;
  title: string;
  description: string;
  type: ActivityType;
  duration: string;
  location?: string;
  weatherDependent: boolean;
}

export type ActivityType =
  | 'outdoor'
  | 'indoor'
  | 'food'
  | 'culture'
  | 'adventure'
  | 'transport'
  | 'accommodation';

export interface PlannerForm {
  destination: string;
  startDate: string;
  endDate: string;
  travelers: number;
  budget: 'Economy' | 'Standard' | 'Luxury';
  interests: string[];
  travelStyle: string;
}

export interface HeroSlide {
  id: number;
  imageUrl: string;
  alt: string;
}

export interface SuitabilityFactor {
  name: string;
  score: number;
  icon: string;
  description: string;
}

export interface NavLink {
  label: string;
  path: string;
}
