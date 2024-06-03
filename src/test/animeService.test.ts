import axios from "axios";
import {
  fetchAnimeList,
  fetchDetailAnime,
  fetchRecommendationsAnime,
} from "../services/animeService";
import { BASE_URL } from "../constants";

jest.mock("axios");

describe("Anime Service Tests", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test("fetchAnimeList should fetch anime list from API", async () => {
    const mockResponseData = [
      { id: 1, title: "Anime 1" },
      { id: 2, title: "Anime 2" },
    ];
    (axios.get as jest.Mock).mockResolvedValueOnce({ data: mockResponseData });

    const page = 1;
    const q = "";
    const limit = 15;

    const result = await fetchAnimeList({ page, q, limit });

    expect(axios.get).toHaveBeenCalledWith(
      `${BASE_URL}?page=${page}&q=${q}&limit=${limit}`
    );
    expect(result).toEqual(mockResponseData);
  });

  test("fetchDetailAnime should fetch detail of anime from API", async () => {
    const mockResponseData = {
      id: 1,
      title: "Anime 1",
      description: "Description of Anime 1",
    };
    (axios.get as jest.Mock).mockResolvedValueOnce({ data: mockResponseData });

    const id = 1;

    const result = await fetchDetailAnime(id);

    expect(axios.get).toHaveBeenCalledWith(`${BASE_URL}/${id}`);
    expect(result).toEqual(mockResponseData);
  });

  test("fetchRecommendationsAnime should fetch recommendations of anime from API", async () => {
    const mockResponseData = [
      { id: 1, title: "Recommended Anime 1" },
      { id: 2, title: "Recommended Anime 2" },
    ];
    (axios.get as jest.Mock).mockResolvedValueOnce({ data: mockResponseData });

    const id = 1;

    const result = await fetchRecommendationsAnime(id);

    expect(axios.get).toHaveBeenCalledWith(`${BASE_URL}/${id}/recommendations`);
    expect(result).toEqual(mockResponseData);
  });
});
