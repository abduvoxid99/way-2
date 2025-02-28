import { createEvent, createStore, sample } from "effector";
import { careerDetailRouteOpened } from "@/model/router";
import { ParsedUrlQuery } from "querystring";
import { careers } from "@/mock/career";

type Career = {
  id: string;
  title: string;
  description: string;
  location: string;
  type: string;
};

type RouteData = {
  path: string;
  asPath: string;
  query: ParsedUrlQuery;
};

export const $career = createStore<Career | null>(null, {
  sid: "career-detail",
});

sample({
  clock: careerDetailRouteOpened,
  source: $career,
  fn: (_, { query }: RouteData) => {
    const careerId = query.id as string;
    return careers?.find((career: Career) => career.id === careerId) || null;
  },
  target: $career,
});

export const routeChanged = createEvent<RouteData>();

sample({
  clock: routeChanged,
  filter: ({ path }) => path !== "/career/[id]",
  target: $career.reinit,
});
