export type AnimeServiceType = {
  page?: number;
  q?: string;
  limit?: number;
};

export type AnimeImageType = {
  webp: { image_url: string };
};

export type AnimeGenreType = {
  mal_id: number;
  name: string;
};

export type AnimeType = {
  mal_id: number;
  title: string;
  images: AnimeImageType;
  score: number;
  status: string;
  rating: string;
  year: number;
  genres: AnimeGenreType[];
};

export type AnimeCardType = {
  id: number;
  src: string;
  title: string;
  score: number;
  year: number | "Unknown";
  genres: AnimeGenreType[];
};

export type AnimeEntryType = {
  entry: {
    images: AnimeImageType;
    mal_id: string;
    title: string;
  };
};

export type AnimeRecommendationType = {
  animeRecommendations: AnimeEntryType[];
};
