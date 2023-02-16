import { https } from "./configURL";

export let postLogin = (data) => {
  return https.post("/auth/login", data);
};

export let postRegister = (data) => {
  return https.post("/auth/register", data);
};

export let postContact = (data) => {
  return https.post("/contacts", data);
};
