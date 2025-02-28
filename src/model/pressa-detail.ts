import { createEffect, createEvent, createStore, sample } from "effector";

import { routeChanged, pressaDetailRouteOpened } from "@/model/router";
import { $news } from "@/model/pressa-list";

import { api } from "@/shared/api";
import { NewsPost } from "@/shared/types/api";

const getNewsDetailFx = createEffect(api.getNewsDetail);

export const $post = createStore<NewsPost | null>(null, { sid: "news-detail" });

export const $pending = getNewsDetailFx.pending;

const routeOpened = sample({
  clock: pressaDetailRouteOpened,
  filter: ({ query }) => Boolean(query?.id),
});

const lookedForPost = sample({
  source: $news,
  clock: routeOpened,
  fn: (news, { query }) => {
    const post = news ? news.find((post) => post.guid === query.id) : null;
    return { post, id: query.id as string };
  },
});

sample({
  clock: lookedForPost,
  filter: ({ post }) => Boolean(post),
  fn: ({ post }) => post!,
  target: $post,
});

sample({
  clock: lookedForPost,
  filter: ({ post }) => !post,
  fn: ({ id }) => ({ guid: id }),
  target: getNewsDetailFx,
});

sample({
  clock: routeChanged,
  filter: ({ path }) => path !== "/pressa/[id]",
  target: $post.reinit,
});

$post.on(
  getNewsDetailFx.doneData,
  (_, { result }) => result.data.data.response,
);
