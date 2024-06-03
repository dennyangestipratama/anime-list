import axios from "axios";
import { AnimeServiceType } from "@/types";
import { BASE_URL } from "@/constants";

export const fetchAnimeList = async ({
  page,
  q = "",
  limit = 15,
}: AnimeServiceType): Promise<any> => {
  try {
    const response = await axios.get(
      `${BASE_URL}?page=${page}&q=${q}&limit=${limit}`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching anime list:", error);
    return null;
  }
};

export const fetchDetailAnime = async (id: number): Promise<any> => {
  try {
    const response = await axios.get(`${BASE_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching detail anime:", error);
    return null;
  }
};

export const fetchRecommendationsAnime = async (id: number): Promise<any> => {
  try {
    const response = await axios.get(`${BASE_URL}/${id}/recommendations`);
    return response.data;
  } catch (error) {
    console.error("Error fetching recommendations anime:", error);
    return null;
  }
};
