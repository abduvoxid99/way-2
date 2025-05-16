import React from "react";

import { EffectorNext } from "@effector/next";
import { useUnit } from "effector-react";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { Toaster } from "react-hot-toast";

import { config } from "@/shared/config";

import { routeChanged } from "@/model/router";

import "@/styles/globals.css";
import Footer from "@/widgets/layout/footer/footer";
import Header from "@/widgets/layout/header/header";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={config.font.className}>
      <EffectorNext values={pageProps.values}>
        <RouterListener />
        <Header />
        <Component {...pageProps} />
        <Footer />
      </EffectorNext>
      <Toaster />
    </main>
  );
}

const RouterListener = () => {
  const router = useRouter();
  const onRouteChanged = useUnit(routeChanged);

  React.useEffect(() => {
    onRouteChanged({
      path: router.pathname,
      asPath: router.asPath,
      query: router.query,
    });
  }, [router.asPath]);
  return null;
};
