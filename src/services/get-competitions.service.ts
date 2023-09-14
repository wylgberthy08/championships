import { api } from "../config/api";

export async function getCompetitions() {
  try {
    const response = await api.get("/competitions");
    return response.data.competitions;
  } catch (error) {
    console.error(error);
  }
}
