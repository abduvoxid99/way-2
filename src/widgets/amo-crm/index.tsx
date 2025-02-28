"use client";
import React, { useEffect, useRef } from "react";
import toast from "react-hot-toast";

const loadScript = (options: { [key: string]: any }, root: HTMLElement) => {
  const script: any = document.createElement("script");
  Object.keys(options).forEach((key) => {
    script[key] = options[key];
  });
  root.appendChild(script);
};

interface Window {
  amo_forms_params: any;
}

function hasAmoFormsParams(
  window: Window,
): window is Window & { amo_forms_params: any } {
  return "amo_forms_params" in window;
}

const AmoCrm = ({
  formVisible,
  setFormVisible,
}: {
  formVisible: boolean;
  setFormVisible: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const rootRef = useRef(null);

  useEffect(() => {
    if (formVisible && rootRef.current) {
      loadScript(
        {
          innerHTML: `
            !(function (a, m, o, c, r, m) {
              (a[o + c] = a[o + c] || {
                  setMeta: function (p) {
                      this.params = (this.params || []).concat([p]);
                  },
              }),
              (a[o + r] = a[o + r] || function (f) {
                  a[o + r].f = (a[o + r].f || []).concat([f]);
              }),
              a[o + r]({
                  id: "1461814",
                  hash: "4d8715c8b52aaeea2c561f56ba435bae",
                  locale: "en",
              }),
              (a[o + m] = a[o + m] || function (f, k) {
                  a[o + m].f = (a[o + m].f || []).concat([[f, k]]);
              });
            })(window, 0, "amo_forms_", "params", "load", "loaded");
          `,
        },
        rootRef.current,
      );

      loadScript(
        {
          id: "amoforms_script_1461814",
          async: true,
          charset: "utf-8",
          src: "https://forms.amocrm.ru/forms/assets/js/amoforms.js?1735201942",
        },
        rootRef.current,
      );

      const handleFormSubmit = (params: any) => {
        if (params.status === "success") {
          toast.success("Form submitted successfully!");
          setTimeout(() => {
            setFormVisible(false);
          }, 2000);
        } else if (params.status === "fail") {
          console.error("Form submission failed.");
        }
      };

      const checkAmoForms = () => {
        // @ts-ignore
        if (hasAmoFormsParams(window) && window.amo_forms_params.onFormSubmit) {
          window.amo_forms_params.onFormSubmit(handleFormSubmit, "1461814"); // Replace '1461814' with your actual form ID
        } else {
          setTimeout(checkAmoForms, 100);
        }
      };

      checkAmoForms();
    }
  }, [formVisible]);

  return <>{formVisible && <div className="" ref={rootRef}></div>}</>;
};

export default AmoCrm;
