import React from "react";
import { default as Image } from "next/image";
import Head from "next/head";
import { useUnit } from "effector-react";
import { useRouter } from "next/router";

import {
  $count,
  $news,
  $newsLength,
  $pending,
  viewMoreButtonClicked,
} from "@/model/pressa-list";

import { Container, Spinner } from "@/shared/ui";
import { NewsPost as NewsPostType } from "@/shared/types/api";
import { lib } from "@/shared/lib";
import { InvestmentSubmitApplication } from "@/widgets/submit-application/InvestApplication";
import { useLocalizedStrings } from "@/shared/lib/useLocaliizedString";

export default function Pressa() {
  const localizedStrings = useLocalizedStrings();
  return (
    <div>
      <Head>
        <title>Press room</title>
      </Head>

      {/* <section className="bg-gray-50 py-16 xl:py-24">
        <Container>
          <div className="text-center text-4xl font-semibold text-gray-900 xl:text-5xl">
            Новости
          </div>
          <div className="mt-4 text-center text-lg font-normal text-gray-600 xl:text-xl">
            Здесь вы найдете наши самые последние новости и события
          </div>
        </Container>
      </section> */}
      <section className="py-16 pt-[105px] xl:py-24">
        <Container>
          <div className="text-center text-3xl font-semibold text-gray-900 xl:text-4xl">
            {localizedStrings["pressa_title"]}
          </div>
          <div className="mt-4 text-center text-lg font-normal text-gray-600 xl:text-xl">
            {localizedStrings["pressa_subtitle"]}
          </div>
          <NewsList />
          <ViewMoreButton />
        </Container>
      </section>
      {/* <InvestmentSubmitApplication /> */}
    </div>
  );
}

const NewsList = () => {
  const news = useUnit($news);

  if (!news) {
    return <NewsSkeleton />;
  }

  return (
    <div className="mt-12 flex flex-wrap justify-center gap-x-8 gap-y-12 xl:mt-16">
      {news.map((post) => (
        <NewsPost key={post.guid} post={post} />
      ))}
    </div>
  );
};

const NewsSkeleton = () => (
  <div className="mt-12 flex flex-wrap justify-center gap-x-8 gap-y-12 xl:mt-16">
    <div className="h-60 w-96 animate-pulse rounded-2xl bg-skeleton" />
    <div className="h-60 w-96 animate-pulse rounded-2xl bg-skeleton" />
    <div className="h-60 w-96 animate-pulse rounded-2xl bg-skeleton" />
  </div>
);

const ViewMoreButton = () => {
  const [count, offset, pending, onClick] = useUnit([
    $count,
    $newsLength,
    $pending,
    viewMoreButtonClicked,
  ]);
  const hasNextPage = !!count && offset < count;

  if (!hasNextPage) {
    return null;
  }

  return (
    <div
      className="mt-12 flex h-8 cursor-pointer items-center justify-center text-base font-semibold text-error-700"
      onClick={() => onClick()}>
      {pending ? <Spinner className="animate-infiniteSpin" /> : "View more"}
    </div>
  );
};

const NewsPost = ({ post }: { post: NewsPostType }) => {
  const router = useRouter();
  const formatByLocale = lib.dates.useFormatByLocale();
  const addLocaleSuffix = lib.locale.useAddLocaleSuffix();

  const onPostClick = () => {
    const selection = getSelection();
    if (!selection || selection.type !== "Range") {
      router.push(`/pressa/${post.guid}`);
    }
  };

  return (
    <div className="w-full max-w-96 cursor-pointer" onClick={onPostClick}>
      <div className="relative h-60 w-full">
        <Image
          src={post.photo}
          fill
          alt="photo"
          className="rounded-2xl object-cover"
        />
      </div>
      <div className="mt-6 text-sm font-semibold text-error-700">
        {formatByLocale(post.date_of_issue, "dd LLL yyyy")}
      </div>
      <div
        className="mt-2 text-2xl font-semibold text-gray-900"
        dangerouslySetInnerHTML={{
          __html: post[addLocaleSuffix({ key: "content" })],
        }}
      />
      <div
        className="mt-2 line-clamp-2 text-base font-normal text-gray-600"
        dangerouslySetInnerHTML={{
          __html: post[addLocaleSuffix({ key: "toc" })],
        }}
      />
    </div>
  );
};
