import { Client } from "./client";
export const get_recruit_info = async () => {
  try {
    const response = await Client.get("/apply/recruit/");
    return response.data;
  } catch (e) {}
};
