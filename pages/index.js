import Image from "next/image";
import { Inter } from "next/font/google";
import InfiniteScroll from "react-infinite-scroll-component";
import { CirclesWithBar } from "react-loader-spinner";
import React, { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ data }) {
  const [count, setCount] = useState(6);
  const [videos, setVideos] = useState(data.slice(0, count));
  const [hasMore, setHasMore] = useState(true);
  const getMorePost = async () => {
    const videos_new = data.slice(count, count + 6);
    if (videos_new.length === 0) {
      setHasMore(false);
    }
    setCount(count + 6);
    setVideos((videos) => [...videos, ...videos_new]);
  };
  return (
    <InfiniteScroll
            dataLength={videos.length}
            next={getMorePost}
            hasMore={hasMore}
            loader={
              <center className="mx-20 px-20 center ">
                <CirclesWithBar
                  height="100"
                  width="100"
                  color="black"
                  ariaLabel="loading"
                />
              </center>
            }
    >
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
          IEEE GEMS Web Team Frontend Task
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
            gentrify, subway tile poke farm-to-table. Franzen you probably
            haven&apos;t heard of them man bun deep jianbing selfies heirloom.
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          {videos.map((data) => (
            <div key={data.category} className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <Image
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center rounded-md"
                  src={data.thumbnail}
                  width={600}
                  height={360}
                />
                &nbsp;&nbsp;&nbsp;&nbsp;
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                    {data.channelName}
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                  {data.title}
                  </h1>
                  <p className="leading-relaxed">
                    Photo booth fam kinfolk cold-pressed sriracha leggings
                    jianbing microdosing tousled waistcoat.
                  </p>
                </div>
              </div>
            </div>
            ))}
        </div>
      </div>
    </section>
    </InfiniteScroll>
  );
}

export const getStaticProps = async () => {
  var data = await (
      await fetch("https://ypapi.formz.in/api/public/videos", {
        mode: "no-cors",
        method: "GET",
      })
    ).json();
  return {
    props: { data },
  };
};
