import { Star } from "lucide-react";
import * as React from "react";
import BookLike from "./BookLike";
import GreenLeaf from "./GreenLeaf";
import Image from "next/image";

//: CHANGE AND RESTRUCTURE CODE

function BookingCard() {
  return (
    <div className="border bg-white max-w-[700px] p-4 rounded-xl border-solid border-neutral-200">
      <header className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
        <div className="flex flex-col items-stretch w-[31%] max-md:w-full max-md:ml-0">
          <Image 
            loading="lazy"
            alt="location"
            width={200}
            height={200} 
            src="https://th.bing.com/th/id/OIP.YzpuFb43Sl09RcJy7GVDUAHaE6?w=219&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"className="object-contain object-center w-[200px] overflow-hidden shrink-0 max-w-full max-md:mt-8" />
        </div>
        <div className="flex flex-col items-stretch w-[69%] ml-5 max-md:w-full max-md:ml-0">
          <div className="justify-center self-stretch flex flex-col mt-2.5 items-start max-md:max-w-full max-md:mt-10">
            <div className="justify-between self-stretch flex gap-0 items-start max-md:max-w-full max-md:flex-wrap">
              <a href="#" className="items-stretch content-end flex-wrap flex gap-2.5 pr-20 max-md:pr-5" aria-label="Hôtel Cerise à Lens">
                <div className="justify-center text-blue-800 text-lg font-semibold grow whitespace-nowrap self-start">
                  Hôtel Cerise à Lens
                </div>
                <div className="items-stretch flex gap-0.5 mt-3 self-start">
                <Star className="aspect-square object-contain object-center w-[18px] fill-[#FFB700] stroke-none overflow-hidden self-center shrink-0 max-w-full my-auto" />
                <Star className="aspect-square object-contain object-center w-[18px] fill-[#FFB700] stroke-none overflow-hidden self-center shrink-0 max-w-full my-auto" />
                <Star className="aspect-square object-contain object-center w-[18px] fill-[#FFB700] stroke-none overflow-hidden self-center shrink-0 max-w-full my-auto" />
                <Star className="aspect-square object-contain object-center w-[18px] fill-[#FFB700] stroke-none overflow-hidden self-center shrink-0 max-w-full my-auto" />
                <BookLike />
                </div>
              </a>
              <span className="text-white text-xs font-medium whitespace-nowrap justify-center items-center bg-blue-800 self-stretch aspect-[1.03125] h-[33px] px-2 rounded-md">
                8,2
              </span>
            </div>
            <div className="items-stretch content-center flex-wrap bg-green-50 flex gap-1.5 mt-2 px-1.5">
            <GreenLeaf />
              <div className="text-green-700 text-xs self-center grow whitespace-nowrap my-auto">Niveau 1 durabilité</div>
            </div>
            <div className="justify-between items-stretch content-start self-stretch flex-wrap flex gap-5 mt-2 px-0.5 py-px max-md:max-w-full">
              <div className="text-black text-sm font-light tracking-wide grow shrink basis-auto">
                Situé à Lens, à moins de 1 km du stade Bollaert-Delelis, l'appartement durable Le Cottage du Louvre dispose d'une terrasse.
              </div>
              <a href="#" className="text-white text-xs font-medium whitespace-nowrap justify-center items-stretch bg-sky-600 px-5 py-2.5 rounded self-start max-sm:mr-3">
                Voir les tarifs
              </a>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default BookingCard;

/*
<img loading="lazy" src=`https://cdn.builder.io/api/v1/image/assets/TEMP/83868f8b4335b8d4eaf68888c2876523c27600cb41ce8a94714438380d8eee90?apiKey={process.env.API_KEY}&` className="aspect-square object-contain object-center w-2.5 fill-yellow-500 overflow-hidden shrink-0 max-w-full" aria-role="image" />
*/