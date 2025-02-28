import { createEvent, createEffect, sample } from "effector";

import { ApplicationFormBody } from "@/shared/types/api";
import { api } from "@/shared/api";
import { lib } from "@/shared/lib";

const postApplicationFx = createEffect(api.postFormApplication);

export const amoCrmFormSubmitted = createEvent<{
  value: ApplicationFormBody;
}>();

export const $pending = postApplicationFx.pending;

sample({
  clock: amoCrmFormSubmitted,
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
