import { Client } from "./client";
export const interview = async () => {
  try {
    const response = await Client.get("/apply/interview/");
    return response.data;
  } catch (e) {}
};
