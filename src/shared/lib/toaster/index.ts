import { createEffect, createEvent, sample } from "effector";
import toast, { Renderable, Toast } from "react-hot-toast";

export type { Toast } from "react-hot-toast";

export const dismissToast = createEvent<{ id: Toast["id"] }>();

export const toastErrorFx = createEffect(({ message }: toastProps) => {
  toast.error(message);
});

export const toastSuccessFx = createEffect(({ message }: toastProps) =>
  toast.success(message),
);

const dismissFx = createEffect(({ id }: { id: Toast["id"] }) => {
  toast.dismiss(id);
});

sample({
  clock: dismissToast,
  target: dismissFx,
});

export interface toastProps {
  message: Renderable;
}
