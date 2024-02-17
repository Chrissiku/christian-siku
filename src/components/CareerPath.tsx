/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import React, { useState } from "react";
import Section from "./common/Section";

import { Tab } from "@headlessui/react";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import Title from "./common/Title";
import Link from "next/link";
import careerPath from "@/data/careerPath";
import type { Category } from "@/data/careerPath";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const CareerPath: React.FC = () => {
  const [data] = useState<Category>(careerPath);

  return (
    <Section customClassName="bg-light2 dark:bg-transparent ">
      <div className="w-full ">
        <Tab.Group>
          <div className="w-full grid grid-cols-1 md:grid-cols-3 items-start justify-start gap-5">
            <div className="flex flex-col items-start justify-between gap-10">
              <div>
                <Title label1="my career path" label2="Experience" />
              </div>
              <Tab.List className="w-full flex flex-col items-start justify-between gap-3">
                {Object.keys(data).map((category) => (
                  <Tab
                    key={category}
                    className={({ selected }) =>
                      classNames(
                        "w-full capitalize outline-none text-left inline-flex items-center justify-between text-black dark:text-light2 hover:text-purple hover:bg-white dark:hover:bg-cinder px-4 py-2 lg:py-4 text-[16px] font-normal rounded-md transition-all duration-300 easy-in-out",
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

            <Tab.Panels className="w-full md:col-span-2 max-h-[600px] drop-shadow-sm p-1 overflow-auto">
              {Object.values(data).map((posts, idx) => (
                <Tab.Panel
                  key={idx}
                  className={classNames("rounded-lg space-y-10", "")}
                >
                  {posts.map((post: any, index: number) => (
                    <div
                      key={`post-${index}`}
                      className="w-full rounded-lg space-y-8 text-gray-600 hover:bg-light1 dark:hover:bg-cinder transition-all duration-300 p-3  md:p-5"
                    >
                      <div className="flex flex-col space-y-2">
                        <h5 className="text-[18px] text-cinder dark:text-white font-normal">
                          {post.position} @
                          <Link
                            href={post.company.url as string}
                            target="_blank"
                            className="underline text-purple"
                          >
                            {post.company.name}
                          </Link>
                        </h5>
                        <span className="text-[14px] dark:text-gray-400">
                          {post.company.location}
                        </span>
                        <span className="text-[14px] dark:text-gray-400">
                          {post.company.start} - {post.company.end} &bull;{" "}
                          {post.company.type}
                        </span>
                        <div className="text-[12px] inline-flex items-center justify-start space-x-3">
                          {post.company.skills.map(
                            (skill: string, index: number) => (
                              <span
                                key={`skill-${index}`}
                                className=" border px-2 py-1 rounded-md bg-light3 text-gray-600"
                              >
                                {skill}
                              </span>
                            )
                          )}
                        </div>
                      </div>
                      <ul className="text-gray-400 flex flex-col gap-2">
                        {post.description.map((desc: string, index: number) => (
                          <li
                            key={`description-${index}`}
                            className="inline-flex items-center justify-start gap-3"
                          >
                            <hr className="w-[15px] border border-light4" />
                            <p className="text-[14px]">{desc}</p>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
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
