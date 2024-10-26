import { BASE_API_URL } from "../config/apiConfig";
import type { TPostsResponse } from "../config/types";

export class PublicAPIClass {
  constructor(
    private readonly baseAPI: string,
  ) {
    this.baseAPI = baseAPI;
  }

  public async getPosts(): Promise<{ posts: TPostsResponse }> {
    return fetch(`${this.baseAPI}/posts?limit=5`)
      .then((response) => response.json())
      .then((data) => data);
  }
}

export const PublicAPI = new PublicAPIClass(BASE_API_URL);
