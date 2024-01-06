"use client"

import * as React from "react";
import Image from "next/image";
import { recommanded_data } from "@/data/recommended";

export function MediumBookCard() {

  // TODO 
  //? ADD OFFICIAL COLORS IN COMPONENT

return (
    <div className="flex justify-between space-x-4 py-5 overflow-x-scroll mb-12">
      {recommanded_data.map((data) => (
        <div
          key={data.id} 
          className="border flex flex-col w-[400px] h-auto rounded-xl border-solid border-[#e7e7e7] mt-6">
          <Image
            key={data.id}
            loading="lazy"
            src={data.src}
            alt={data.location}
            layout="responsive"
            width={300}
            height={250}
            className="h-[100%] min-h-[230px] max-h-0 w-full object-cover overflow-hidden rounded-t-lg"
          />
          <div className="justify-between items-stretch bg-white flex w-full h-auto flex-col p-4">
            <header className="items-stretch bg-white flex flex-col">
              <h3 className="text-zinc-900 text-base font-bold font-rubik">
                {data.title}
              </h3>
              <p className="text-zinc-900 text-xs mt-1.5">
                {data.location}
              </p>
            </header>
            <div className="items-stretch content-center flex-wrap bg-white flex gap-2.5 mt-1.5">
              <button className="text-white text-sm whitespace-nowrap justify-center items-stretch bg-[#003b95] aspect-[1.9310344827586208] px-2.5 py-1.5  rounded-md" aria-label="Rating">
                {data.badge}
              </button>
              <p className="text-zinc-900 text-xs my-auto">{data.badge_text}</p>
              <p className="text-stone-500 text-xs my-auto">{data.badge_experience}</p>
            </div>
            <div className="justify-end items-stretch bg-white flex flex-col mt-1.5">
              <p className="text-zinc-900 text-xs">
                {data.description}
              </p>
              <a href="#" className="text-[#006ce3] text-xs underline mt-1.5">
                Voir plus
              </a>
            </div>
            <button className="text-[#006ce3] hover:text-[#f0f0f0] text-sm whitespace-nowrap justify-center items-center border bg-white hover:bg-[#003b95] mt-1.5 px-16 py-2 border-solid border-[#006ce3]" aria-label="Book">
              Réserver cette villa
            </button>
          </div>
        </div>
      ))}

    </div>
  );
}