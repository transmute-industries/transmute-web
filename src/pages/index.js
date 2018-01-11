import Home from "./home";
import SignIn from "./signin";
import Search from "./search";

export default {
  home: {
    path: "/",
    container: Home
  },
  signin: {
    path: "/signin",
    container: SignIn
  },
  enterprise: {
    path: "/enterprise",
    container: Home
  },
  features: {
    path: "/features",
    container: Home
  },
  pricing: {
    path: "/pricing",
    container: Home
  },
  documentation: {
    path: "/documentation",
    container: Home
  },
  support: {
    path: "/support",
    container: Home
  },
  search: {
    path: "/search",
    container: Search
  }
};
