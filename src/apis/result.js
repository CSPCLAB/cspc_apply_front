import { Client } from "./client";
import { get_auth_header } from "hooks/check_login";
export const get_result = async () => {
  let response = null;
  try {
    response = await Client.get("/apply/result/", get_auth_header());
    return response.data;
  } catch (err) {
    console.error("Error response:");
    console.error(err.response.data); // ***
    console.error(err.response.status); // ***
    console.error(err.response.headers); // ***
  }

  return response;
};
