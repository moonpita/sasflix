import { BASE_API_URL } from "../config/apiConfig";
import type { TPosts } from "../config/types";

export class PublicAPIClass {
  constructor(
    private readonly baseAPI: string,
  ) {
    this.baseAPI = baseAPI;
  }

  public async getPosts(): Promise<TPosts> {
    console.log('get')
    return fetch(`${this.baseAPI}/posts`)
      .then((response) => response.json())
      .then((data) => data);
  }
}

export const PublicAPI = new PublicAPIClass(BASE_API_URL);
