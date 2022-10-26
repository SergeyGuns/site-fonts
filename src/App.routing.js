import About from "./pages/About";
import Home from "./pages/Home";

export const APP_ROUTES = {
  "/": {
    title: "Home",
    exact: true,
    component: Home,
  },
  "/about": {
    title: "About",
    exact: true,
    component: About,
  },
};
