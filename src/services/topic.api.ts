import axios from "axios";
import api from "../constants/api";
import TopicResponseEntity from "../entities/TopicResponseEntity";

class TopicApi {
  static axios = axios.create({
    baseURL: api.BASE_URL,
  });
  static async search(text: string) {
    try {
      const response = await this.axios.get<TopicResponseEntity>(
        `${api.query}${text}`
      );
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log(error);
      }
    }
  }
}

export default TopicApi;