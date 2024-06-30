import { User } from "./types/apiTypes";

function getAPI_URL() {
  // return config.public.apiUrl;
  return "https://fakestoreapi.com";
}

class ApiRoutes {
  static customers = {
    async getAll(): Promise<() => User[]> {
      return await fetch(`${getAPI_URL()}/users`).then((res) => res.json());
    },
  };
}

export { ApiRoutes, getAPI_URL };
