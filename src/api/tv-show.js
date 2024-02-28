import axios from "axios";
// import { FAKE_POPULAR } from "./fake_data";
import { BASE_URL, API_KEY } from "../config";

export class TVShowAPI {
  static async fetchPopular() {
    const response = await axios.get(
      `${BASE_URL}tv/popular?api_key=${API_KEY}`
    );
    console.log(response.data.results);
    return response.data.results;
    // return FAKE_POPULAR;
  }
  static async fetchRecos(tvShowId) {
    if (typeof tvShowId !== "string" && typeof tvShowId !== "number") {
      console.error("Invalid TV show ID:", tvShowId);
      return [];
    }

    const response = await axios.get(
      `${BASE_URL}tv/${tvShowId}/recommendations?api_key=${API_KEY}`
    );
    console.log(response.data.results);
    return response.data.results;
  }

  static async fetchByTitle(title) {
    const response = await axios.get(
      `${BASE_URL}search/tv?api_key=${API_KEY}&query=${title}`
    );
    console.log(response.data.results);
    return response.data.results;
  }
}
