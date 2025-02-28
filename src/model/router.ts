import { createEvent } from "effector";
import { ParsedUrlQuery } from "querystring";

export const routeChanged = createEvent<{
  path: string;
  asPath: string;
  query: ParsedUrlQuery;
}>();

export const pressaListRouteOpened = routeChanged.filter({
  fn: ({ path }) => path === "/pressa",
});

export const pressaDetailRouteOpened = routeChanged.filter({
  fn: ({ path }) => path === "/pressa/[id]",
});

export const investmentProductsRouteOpened = routeChanged.filter({
  fn: ({ path }) => path === "/investment-products",
});

export const careerDetailRouteOpened = routeChanged.filter({
  fn: ({ path }) => path === "/career/[id]",
});

export const faqDetailRouteOpened = routeChanged.filter({
  fn: ({ path }) => path === "/faq",
});
