import { Client } from "./client";
export const get_master_info = async () => {
  try {
    const response = await Client.get("/user/master/");
    return response.data;
  } catch (e) {}
};
