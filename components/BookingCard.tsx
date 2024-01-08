import { Star } from "lucide-react";
import * as React from "react";
import BookLike from "./BookLike";
import GreenLeaf from "./GreenLeaf";
import Image from "next/image";

//: CHANGE AND RESTRUCTURE CODE

function BookingCard() {
  return (
        <div className="border bg-neutral-100 flex max-w-[812px] flex-col justify-center items-stretch rounded-xl border-solid border-neutral-200">
          <div className="border bg-white w-full px-5 py-5 rounded-xl border-solid border-neutral-200 max-md:max-w-full">
            <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
              <div className="flex flex-col items-stretch w-[83%] max-md:w-full max-md:ml-0">
                <div className="grow max-md:max-w-full max-md:mt-10">
                  <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                    <div className="flex flex-col items-stretch w-[39%] max-md:w-full max-md:ml-0">
                      <Image
                        loading="lazy"
                        src={`https://cdn.builder.io/api/v1/image/assets/TEMP/958caf8049a92255b9582c4f10dbf904ce86569e92fc71daea7b10eea0ae08f3?apiKey=${process.env.API_KEY}`}
                        alt="location"
                        width={200}
                        height={200}
                        className="aspect-square object-contain object-center w-[200px] overflow-hidden shrink-0 max-w-full max-md:mt-5"
                      />
                    </div>
                    <div className="flex flex-col items-stretch w-[61%] max-md:w-full max-md:ml-0">
                      <div className="flex flex-col items-stretch mt-3 max-md:mt-8">

                        {/* STAR AND TEXT CONTAINER */}
                        <div className="flex items-start justify-start gap-0.5 pr-9 max-md:justify-center max-md:pr-5">
                          <div className="text-[#003b95] text-xl font-semibold my-auto">
                            Lens Louvre 2{" "}
                          </div>
                          <Star className="ml-2 aspect-square object-contain object-center w-[18px] fill-[#FFB700] stroke-none overflow-hidden self-center shrink-0 max-w-full my-auto" />
                        
                          <Star className="aspect-square object-contain object-center w-[18px] fill-[#FFB700] stroke-none overflow-hidden self-center shrink-0 max-w-full my-auto" />
                          <Star className="aspect-square object-contain object-center w-[18px] fill-[#FFB700] stroke-none overflow-hidden self-center shrink-0 max-w-full my-auto" />
                          <Star className="mr-2 aspect-square object-contain object-center w-[18px] fill-[#FFB700] stroke-none overflow-hidden self-center shrink-0 max-w-full my-auto" />
                          <BookLike />
                        </div>
                        <div className="bg-green-50 flex items-stretch justify-between gap-1 mt-2 px-1 py-px">
                          <GreenLeaf />
                          <div className="text-[#008234] text-xs grow shrink basis-auto self-start">
                            Niveau 1 Voyage Durabilité
                          </div>
                        </div>  
                        
                        <div className="text-black text-sm font-light mt-2">
                          Doté d'une terrasse, le Lens Louvre 2 est situé à Lens, à
                          1,7 km du musée du Louvre-Lens, à 21 km de l'école des
                          mines de Douai et à 25 km de la gare de Douai.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-stretch w-[17%] ml-5 max-md:w-full max-md:ml-0">
                <div className="flex flex-col items-stretch max-md:mt-10">
                  <div className="flex items-center justify-between gap-4">
                    <div className="text-black text-base font-medium my-auto">
                      Superbe
                    </div>
                    <div className="text-white text-xs font-medium whitespace-nowrap bg-[#003b95] self-stretch aspect-square justify-center items-center h-10 px-3 rounded-md">
                      8,5
                    </div>
                  </div>
                  <button className="text-white text-xs font-medium whitespace-nowrap bg-[#006CE4] justify-center items-stretch mt-10 py-3.5 rounded">
                    Voir les tarifs
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }

export default BookingCard;