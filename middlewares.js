import routes from "./routes";

// #2.16 Local Variables in Pug
export const localsMiddleware = (req, res, next) => {
  res.locals.siteName = "WeTube";
  res.locals.routes = routes;
  next();
};
