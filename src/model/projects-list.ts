import { createEffect, createStore, sample } from "effector";

import { investmentProductsRouteOpened } from "@/model/router";

import { api } from "@/shared/api";
import { Project } from "@/shared/types/api";

const getProjectsListFx = createEffect(api.getProjectsList);

export const $projects = createStore<Project[] | null>(null);

sample({
  source: getProjectsListFx.pending,
  clock: investmentProductsRouteOpened,
  filter: (pending) => !pending,
  target: getProjectsListFx,
});

$projects.on(
  getProjectsListFx.doneData,
  (_, { result }) => result.data.data.response,
);
