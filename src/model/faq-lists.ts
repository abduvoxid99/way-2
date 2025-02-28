import { createEffect, createEvent, createStore, sample } from "effector";
import { faqDetailRouteOpened } from "@/model/router";
import { NewsFaq } from "@/shared/types/api";
import { api } from "@/shared/api";
import { config } from "@/shared/config";

const getFaqFx = createEffect(api.getFaqList);

export const viewMoreFaqButtonClicked = createEvent();

export const $faqCount = createStore<number | null>(null, {
  sid: "faq-count",
});

export const $faq = createStore<NewsFaq[] | null>(null, {
  sid: "faq",
});

export const $faqLength = $faq.map((faq) => faq?.length ?? 0);

export const $pending = getFaqFx.pending;

sample({
  source: { faqLength: $faqLength, pending: getFaqFx.pending },
  clock: faqDetailRouteOpened,
  filter: ({ faqLength, pending }) => !faqLength && !pending,
  fn: ({ faqLength }) => ({
    offset: faqLength,
    limit: config.pagination.ITEMS_PER_PAGE,
  }),
  target: getFaqFx,
});

$faq.on(getFaqFx.doneData, (faq, { result }) => [
  ...(faq ?? []),
  ...result.data.data.response,
]);

$faqCount.on(getFaqFx.doneData, (_, { result }) => result.data.data.count);

sample({
  source: { faqLength: $faqLength, pending: getFaqFx.pending },
  clock: viewMoreFaqButtonClicked,
  filter: ({ pending }) => !pending,
  fn: ({ faqLength }) => ({
    offset: faqLength,
    limit: faqLength + config.pagination.ITEMS_PER_PAGE,
  }),
  target: getFaqFx,
});
