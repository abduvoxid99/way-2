import { createEffect, createEvent, createStore, sample } from "effector";

import { pressaListRouteOpened } from "@/model/router";

import { NewsPost } from "@/shared/types/api";
import { api } from "@/shared/api";
import { config } from "@/shared/config";

const getNewsFx = createEffect(api.getNewsList);

export const viewMoreButtonClicked = createEvent();

export const $count = createStore<number | null>(null, {
  sid: "pressa-news-count",
});

export const $news = createStore<NewsPost[] | null>(null, {
  sid: "pressa-news",
});

export const $newsLength = $news.map((news) => news?.length ?? 0);

export const $pending = getNewsFx.pending;

sample({
  source: { newsLength: $newsLength, pending: getNewsFx.pending },
  clock: pressaListRouteOpened,
  filter: ({ newsLength, pending }) => !newsLength && !pending,
  fn: ({ newsLength }) => ({
    offset: newsLength,
    limit: config.pagination.ITEMS_PER_PAGE,
  }),
  target: getNewsFx,
});

$news.on(getNewsFx.doneData, (news, { result }) => [
  ...(news ?? []),
  ...result.data.data.response,
]);

$count.on(getNewsFx.doneData, (_, { result }) => result.data.data.count);

sample({
  source: { newsLength: $newsLength, pending: getNewsFx.pending },
  clock: viewMoreButtonClicked,
  filter: ({ pending }) => !pending,
  fn: ({ newsLength }) => ({
    offset: newsLength,
    limit: newsLength + config.pagination.ITEMS_PER_PAGE,
  }),
  target: getNewsFx,
});
