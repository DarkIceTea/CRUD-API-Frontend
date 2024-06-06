import { eventApi } from ".";
import { loginUrl } from "../constants";

type AuthParams = {
  email: string;
  name: string;
};

export const auth = ({ email, name }: AuthParams) => {
  return eventApi.post(loginUrl, {
    email,
    name,
  });
};
