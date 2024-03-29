"use client";

import Image from "next/image";
import { Inter } from "next/font/google";
import InfiniteScroll from "react-infinite-scroll-component";
import { CirclesWithBar } from "react-loader-spinner";
import React, { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ data }) {
  var all_titles = [];
  var all = [];
  var tech = [];
  var gaming = [];
  var music = [];
  for (var i = 0; i < data.length; i++) {
    data[i]["id"] = i.toString();
    var obj = data[i];
    all.push(obj["id"]);
    all_titles.push(obj["title"].toLowerCase());
    if (obj["category"].toLowerCase() != "tech") {
      tech.push(obj["id"]);
    }
    if (obj["category"].toLowerCase() != "gaming") {
      gaming.push(obj["id"]);
    }
    if (obj["category"].toLowerCase() != "music") {
      music.push(obj["id"]);
    }
  }
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
          <div className="flex flex-col text-center w-full mb-16">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              IEEE GEMS Web Team Frontend Task
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              <div
                className="relative flex"
                data-twe-input-wrapper-init
                data-twe-input-group-ref
              >
                <input
                  type="search"
                  className="peer block min-h-[auto] w-full rounded border-0 bg-white px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-white dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
                  placeholder="Search"
                  aria-label="Search"
                  id="exampleFormControlInput"
                  aria-describedby="basic-addon1"
                  onChange={(e) => {
                    for (var i = 0; i < all.length; i++) {
                      if (
                        all_titles[i].includes(
                          document
                            .getElementById("exampleFormControlInput")
                            .value.toLowerCase()
                        )
                      ) {
                        document.getElementById(all[i]).style.display = "block";
                      } else {
                        document.getElementById(all[i]).style.display = "none";
                      }
                    }
                  }}
                />
                <label
                  htmlFor="exampleFormControlInput"
                  className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[twe-input-state-active]:-translate-y-[0.9rem] peer-data-[twe-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-400 dark:peer-focus:text-primary"
                >
                  Search
                </label>
                <button
                  className="relative z-[2] -ms-0.5 flex items-center rounded-e bg-primary px-5  text-xs font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
                  type="button"
                  id="button-addon1"
                  data-twe-ripple-init
                  data-twe-ripple-color="light"
                >
                  <span className="[&>svg]:h-5 [&>svg]:w-5">
                    <i className="bx bx-search-alt text-2xl text-sky-400"></i>
                  </span>
                </button>
              </div>
            </p>
            <br />
            <div>
              <button
                type="button"
                className="inline-block rounded bg-teal-900	mx-2 my-2 px-6 pb-2 pt-2.5 text-xs text-md uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-teal-700	 focus:bg-teal-700 focus:outline-none focus:ring-0 active:bg-teal-700 motion-reduce:transition-none dark:shadow-black/30 "
                onClick={() => {
                  for (var i = 0; i < all.length; i++) {
                    document.getElementById(all[i]).style.display = "block";
                  }
                }}
              >
                All
              </button>
              <button
                type="button"
                className="inline-block rounded bg-teal-900	mx-2 my-2 px-6 pb-2 pt-2.5 text-xs text-md uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-teal-700	 focus:bg-teal-700 focus:outline-none focus:ring-0 active:bg-teal-700 motion-reduce:transition-none dark:shadow-black/30 "
                onClick={() => {
                  for (var i = 0; i < all.length; i++) {
                    document.getElementById(all[i]).style.display = "block";
                  }
                  for (var i = 0; i < gaming.length; i++) {
                    document.getElementById(gaming[i]).style.display = "none";
                  }
                }}
              >
                Gaming
              </button>
              <button
                type="button"
                className="inline-block rounded bg-teal-900	mx-2 my-2 px-6 pb-2 pt-2.5 text-xs text-md uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-teal-700	 focus:bg-teal-700 focus:outline-none focus:ring-0 active:bg-teal-700 motion-reduce:transition-none dark:shadow-black/30 "
                onClick={() => {
                  for (var i = 0; i < all.length; i++) {
                    document.getElementById(all[i]).style.display = "block";
                  }
                  for (var i = 0; i < music.length; i++) {
                    document.getElementById(music[i]).style.display = "none";
                  }
                }}
              >
                Music
              </button>
              <button
                type="button"
                className="inline-block rounded bg-teal-900 mx-2 my-2 px-6 pb-2 pt-2.5 text-xs text-md uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-teal-700 focus:bg-teal-700 focus:outline-none focus:ring-0 active:bg-teal-700 motion-reduce:transition-none dark:shadow-black/30 "
                onClick={() => {
                  for (var i = 0; i < all.length; i++) {
                    document.getElementById(all[i]).style.display = "block";
                  }
                  for (var i = 0; i < tech.length; i++) {
                    document.getElementById(tech[i]).style.display = "none";
                  }
                }}
              >
                Tech
              </button>
            </div>
          </div>

          <div className="flex flex-wrap -m-4">
            {videos.map((data) => (
              <div
                key={data.id}
                className="lg:w-1/3 sm:w-1/2 p-4 my-8"
                id={data.id}
              >
                <div className="flex relative h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                  <Image
                    alt="Video Thumbnail"
                    className="absolute inset-0 w-full h-full object-cover object-center rounded-3xl"
                    src={data.thumbnail}
                    width={600}
                    height={360}
                  />
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                    <center>
                      <Image
                        alt="Video Thumbnail"
                        className="rounded-full"
                        src={data.channelPicture}
                        width={50}
                        height={50}
                      />
                    </center>
                    <center>
                      <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                        {data.channelName}
                      </h2>
                    </center>
                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                      {data.title}
                    </h1>
                    <p className="leading-relaxed">
                      <i className="bx bx-hourglass"></i> {data.duration}
                      <br />
                      <i className="bx bx-station"></i> {data.views} views{" "}
                      <br />
                      <i className="bx bxs-calendar-check"></i>{" "}
                      {new Date(data.uploadedDateTime).toLocaleString("en-IN", {
                        timeZoneName: "short",
                      })}
                    </p>
                  </div>
                </div>
                <h2 className="text-2xl text-gray-900">{data.title}</h2>
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
