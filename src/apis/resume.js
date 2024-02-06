import { Client } from "./client";
import { get_auth_header } from "hooks/check_login";
export const get_resume = async () => {
  let response = null;
  try {
    response = await Client.get("/apply/resume/", get_auth_header());
    return response.data;
  } catch (err) {
    console.error("Error response:");
    console.error(err.response.data); // ***
    console.error(err.response.status); // ***
    console.error(err.response.headers); // ***
  }

  return response;
};

export const post_resume = async (data) => {
  let response = null;
  try {
    response = await Client.post("/apply/resume/", data, get_auth_header());
    return response.data;
  } catch (err) {
    console.error("Error response:");
    console.error(err.response.data); // ***
    console.error(err.response.status); // ***
    console.error(err.response.headers); // ***
  }

  return response;
};

export const update_resume = async (data) => {
  let response = null;
  try {
    response = await Client.patch("/apply/resume/", data, get_auth_header());
    return response.data;
  } catch (err) {
    console.error("Error response:");
    console.error(err.response.data); // ***
    console.error(err.response.status); // ***
    console.error(err.response.headers); // ***
  }

  return response;
};
