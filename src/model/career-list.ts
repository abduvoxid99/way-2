// model/career-list.ts

import { createEvent, createStore, sample } from "effector";
import { careers } from "@/mock/career";

export const $careers = createStore(careers, {
  sid: "career-list",
});

export const viewMoreButtonClicked = createEvent();

export const $visibleCareers = createStore(careers.slice(0, 6), {
  sid: "visible-careers",
});

sample({
  clock: viewMoreButtonClicked,
  source: $visibleCareers,
  fn: (visibleCareers) => careers.slice(0, visibleCareers.length + 6),
  target: $visibleCareers,
});
