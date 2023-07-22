import React, { useState } from "react";
import Section from "./common/Section";

import { Tab } from "@headlessui/react";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import Title from "./common/Title";
import Link from "next/link";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const CareerPath = () => {
  let [categories] = useState({
    Recent: [
      {
        id: 1,
        title: "Does drinking coffee make you smarter?",
        date: "5h ago",
        commentCount: 5,
        shareCount: 2,
      },
      {
        id: 2,
        title: "So you've bought coffee... now what?",
        date: "2h ago",
        commentCount: 3,
        shareCount: 2,
      },
    ],
    Popular: [
      {
        id: 1,
        title: "Is tech making coffee better or worse?",
        date: "Jan 7",
        commentCount: 29,
        shareCount: 16,
      },
      {
        id: 2,
        title: "The most innovative things happening in coffee",
        date: "Mar 19",
        commentCount: 24,
        shareCount: 12,
      },
    ],
    Trending: [
      {
        id: 1,
        title: "Ask Me Anything: 10 answers to your questions about coffee",
        date: "2d ago",
        commentCount: 9,
        shareCount: 5,
      },
      {
        id: 2,
        title: "The worst advice we've ever heard about coffee",
        date: "4d ago",
        commentCount: 1,
        shareCount: 2,
      },
    ],
  });

  return (
    <Section customClassName="bg-light2 dark:bg-transparent">
      <div className="w-full">
        <Tab.Group>
          <div className="w-full grid grid-cols-1 md:grid-cols-3 items-start justify-between gap-5 md:gap-8 lg:gap-10">
            <div className="flex flex-col items-start justify-between gap-10">
              <div>
                <Title label1="my career path" label2="Experience" />
              </div>
              <Tab.List className="w-full flex flex-col items-start justify-between gap-3">
                {Object.keys(categories).map((category) => (
                  <Tab
                    key={category}
                    className={({ selected }) =>
                      classNames(
                        "w-full outline-none text-left inline-flex items-center justify-between text-black dark:text-light2 hover:text-purple hover:bg-white dark:hover:bg-cinder px-4 py-2 lg:py-4 text-[16px] font-normal rounded-md transition-all duration-300 easy-in-out",
                        "",
                        selected
                          ? "font-medium text-purple dark:text-purple bg-white dark:bg-cinder"
                          : ""
                      )
                    }
                  >
                    <span>{category}</span>
                    <span className="">
                      <ChevronRightIcon className="w-6 h-6" />
                    </span>
                  </Tab>
                ))}
              </Tab.List>
            </div>

            <Tab.Panels className="w-full md:col-span-2">
              {Object.values(categories).map((posts, idx) => (
                <Tab.Panel key={idx} className={classNames("rounded-lg", "")}>
                  <div className="border w-full">
                    <div>
                      <h5 className="text-[18px] text-cinder dark:text-white font-semibold">
                        Frontend developer @
                        <Link href="/" className="underline">
                          Apple Inc
                        </Link>
                      </h5>
                      <span>California, United State</span>
                      <span>November 2020 - present &bull; Full-time</span>
                      <div>
                        <span>swift</span>
                        <span>go</span>
                      </div>
                    </div>
                    <ul>
                      <li>
                        <hr className="w-[20px] border border-light4" />
                        <p>
                          You can also use variant modifiers to target media
                          queries like
                        </p>
                      </li>
                    </ul>
                  </div>
                </Tab.Panel>
              ))}
            </Tab.Panels>
          </div>
        </Tab.Group>
      </div>
    </Section>
  );
};

export default CareerPath;
