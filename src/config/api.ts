import axios from "axios";

export const api = axios.create({
    baseURL: "https://api.football-data.org/v4",
    headers: {
      "X-Auth-Token": "55038a5e1e4d4ae8a980736b139960a1"
    }
  });
