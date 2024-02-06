export const get_auth_header = () => {
  const id = sessionStorage.getItem("id");
  const pw = sessionStorage.getItem("pw");

  if (id !== null) {
    const token = window.btoa(id + ":" + pw);
    return {
      headers: { authorization: "Basic " + token },
    };
  }
  return null;
};
