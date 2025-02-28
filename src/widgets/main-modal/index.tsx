import { useEffect, useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { ModalApplicationForm } from "./ModalApplicationForm";
import { ModalSuccess } from "./ModalSuccess";
import { useRouter } from "next/router";

export const MainModal = () => {
  const [showForm, setShowForm] = useState(false);
  const [modalSuccess, setModalSuccess] = useState(false);
  const router = useRouter();

  const handleOpenModal = () => {
    if (!localStorage.getItem("formSubmitted")) {
      setShowForm(true);

      if (!router.asPath.includes("/form")) {
        const cleanPath = router.asPath.split("?")[0];
        const queryPart = router.asPath.includes("?")
          ? `?${router.asPath.split("?")[1]}`
          : "";
        const newUrl = `${cleanPath}/form${queryPart}`;

        router.replace(newUrl, undefined, { shallow: true });
      }
    }
  };

  const handleCloseModal = () => {
    setShowForm(false);

    const newUrl = router.asPath.replace(/\/form$/, "");
    router.replace(newUrl, undefined, { shallow: true });
  };

  const handleModalSuccess = () => {
    setModalSuccess(true);

    const cleanPath = router.asPath.replace(/\/form$/, "").split("?")[0];
    const queryPart = router.asPath.includes("?")
      ? `?${router.asPath.split("?")[1]}`
      : "";
    const newUrl = `${cleanPath}/success${queryPart}`;

    router.replace(newUrl, undefined, { shallow: true });
  };

  const handleCloseSuccess = () => {
    setModalSuccess(false);
    const newUrl = router.asPath.replace(/\/success$/, "");
    router.replace(newUrl, undefined, { shallow: true });
  };

  const handleRouteChange = (url: any) => {
    if (url.endsWith("/form")) {
      setShowForm(true);
    } else if (!url.endsWith("/form") && showForm) {
      handleCloseModal();
    }
  };

  useEffect(() => {
    if (router.asPath.endsWith("/form")) {
      setShowForm(true);
    }

    router.events.on("routeChangeComplete", handleRouteChange);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.asPath]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!showForm && !localStorage.getItem("formSubmitted")) {
        handleOpenModal();
      }
    }, 20000);

    return () => clearInterval(interval);
  }, [showForm, router.asPath]);

  return (
    <>
      <Dialog.Root open={showForm} onOpenChange={handleCloseModal}>
        <Dialog.Portal>
          <Dialog.Overlay className="DialogOverlay" />

          <Dialog.Content className="DialogContentModal">
            <section className="">
              <ModalApplicationForm
                handleClose={handleCloseModal}
                handleModalSuccess={handleModalSuccess}
              />
            </section>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>

      <Dialog.Root open={modalSuccess} onOpenChange={handleCloseModal}>
        <Dialog.Portal>
          <Dialog.Overlay className="DialogOverlay" />
          <Dialog.Content className="DialogContentSuccess">
            <ModalSuccess
              onClose={handleCloseSuccess}
              handleClose={handleCloseModal}
            />
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </>
  );
};
