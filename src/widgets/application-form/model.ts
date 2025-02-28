import { createEvent, createEffect, sample } from "effector";

import { ApplicationBody } from "@/shared/types/api";
import { api } from "@/shared/api";
import { lib } from "@/shared/lib";

const postApplicationFx = createEffect(api.postApplication);

export const formSubmitted = createEvent<{ value: ApplicationBody }>();

export const $pending = postApplicationFx.pending;

sample({
  clock: formSubmitted,
  fn: ({ value }) => ({ body: value }),
  target: postApplicationFx,
});

sample({
  clock: postApplicationFx.done,
  fn: () => ({ message: "Your application has been sent successfully.!!!!" }),
  target: lib.toaster.toastSuccessFx,
});

sample({
  clock: postApplicationFx.fail,
  fn: () => ({ message: "Something went wrong." }),
  target: lib.toaster.toastErrorFx,
});
