import * as React from "react";

function Footer() {

  return (
    <div className="flex flex-col">
      <div className="bg-[#003b95] self-stretch flex flex-col items-center pt-6 pb-12 px-16 max-md:max-w-full max-md:px-5">
        <div className="text-white text-xs whitespace-nowrap border justify-center items-stretch pl-3 pr-5 py-1.5 rounded-sm border-solid border-white font-rubik">
          Ajoutez un établissement
        </div>
      </div>
      <div className="self-center flex w-[939px] max-w-full items-stretch justify-between gap-5 mt-4 max-md:flex-wrap">

                {/* CONTINUE STYLING LINKS */}

        <div className="text-[#003b95] text-xs font-rubik cursor-pointer">
          Pays
          <br />
          Region
          <br />
          Ville
          <br />
          Quartiers
          <br />
          Aéroports
          <br />
          Hôtels
          <br />
          Sites d’intérêt
        </div>
        <div className="text-[#003b95] text-xs font-rubik cursor-pointer">
        Hébergements indépendants
          <br />
          Appartements
          <br />
          Complexes hôteliers
          <br />
          Villas
          <br />
          Auberges de jeunesse
          <br />
          B&B et chambres d’hôtes
          <br />
          Maisons d'hôtes
        </div>
        <div className="text-[#003b95] text-xs font-rubik cursor-pointer">
          Pays
          <br />
          Region
          <br />
          Ville
          <br />
          Quartiers
          <br />
          Aéroports
          <br />
          Hôtels
          <br />
          Sites d’intérêt
        </div>
        <div className="text-[#003b95] text-xs font-rubik">
          <a className="cursor-pointer hover:text-[#d67501]">Pays</a>
          <br />
          <a className="cursor-pointer hover:text-[#d67501]">Region</a>
          <br />
          <a className="cursor-pointer hover:text-[#d67501]">Ville</a>
          <br />
          <a className="cursor-pointer hover:text-[#d67501]">Quartiers</a>
          <br />
          <a className="cursor-pointer hover:text-[#d67501]">Aéroports</a>
          <br />
          <a className="cursor-pointer hover:text-[#d67501]">B&B et chambres d’hôtes</a>
          <br />
          <a className="cursor-pointer hover:text-[#d67501]">Sites d’intérêt</a>
        </div>
      </div>
      <div className="text-[#003b95] text-xs self-center whitespace-nowrap mt-16 max-md:mt-10 font-rubik">
        Copyright © 1995–2023 BDWooking.com™. All rights reserved.
      </div>
      <div className="self-center flex w-[392px] max-w-full items-center justify-between gap-5 mt-14 max-md:mt-10">
        <img
          loading="lazy"
          srcSet={`https://cdn.builder.io/api/v1/image/assets/TEMP/07a7cc72bbba91dddb4fd176295ef49b340634099eec676889333b50220d2c4c?apiKey=${process.env.API_KEY}&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/07a7cc72bbba91dddb4fd176295ef49b340634099eec676889333b50220d2c4c?apiKey=${process.env.API_KEY}&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/07a7cc72bbba91dddb4fd176295ef49b340634099eec676889333b50220d2c4c?apiKey=${process.env.API_KEY}&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/07a7cc72bbba91dddb4fd176295ef49b340634099eec676889333b50220d2c4c?apiKey=${process.env.API_KEY}&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/07a7cc72bbba91dddb4fd176295ef49b340634099eec676889333b50220d2c4c?apiKey=${process.env.API_KEY}&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/07a7cc72bbba91dddb4fd176295ef49b340634099eec676889333b50220d2c4c?apiKey=${process.env.API_KEY}&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/07a7cc72bbba91dddb4fd176295ef49b340634099eec676889333b50220d2c4c?apiKey=${process.env.API_KEY}&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/07a7cc72bbba91dddb4fd176295ef49b340634099eec676889333b50220d2c4c?apiKey=${process.env.API_KEY}&`}
          className="aspect-[3.04] object-contain object-center w-full overflow-hidden shrink-0 flex-1"
        />
        <img
          loading="lazy"
          srcSet={`https://cdn.builder.io/api/v1/image/assets/TEMP/483f3bdae4d915a89254b8ed6c41b55b195e80e3bd92b6046b9a921309d3683c?apiKey=${process.env.API_KEY}&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/483f3bdae4d915a89254b8ed6c41b55b195e80e3bd92b6046b9a921309d3683c?apiKey=${process.env.API_KEY}&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/483f3bdae4d915a89254b8ed6c41b55b195e80e3bd92b6046b9a921309d3683c?apiKey=${process.env.API_KEY}&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/483f3bdae4d915a89254b8ed6c41b55b195e80e3bd92b6046b9a921309d3683c?apiKey=${process.env.API_KEY}&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/483f3bdae4d915a89254b8ed6c41b55b195e80e3bd92b6046b9a921309d3683c?apiKey=${process.env.API_KEY}&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/483f3bdae4d915a89254b8ed6c41b55b195e80e3bd92b6046b9a921309d3683c?apiKey=${process.env.API_KEY}&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/483f3bdae4d915a89254b8ed6c41b55b195e80e3bd92b6046b9a921309d3683c?apiKey=${process.env.API_KEY}&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/483f3bdae4d915a89254b8ed6c41b55b195e80e3bd92b6046b9a921309d3683c?apiKey=${process.env.API_KEY}&`}
          className="aspect-[4.09] object-contain object-center w-full overflow-hidden shrink-0 flex-1 my-auto"
        />
        <img
          loading="lazy"
          srcSet={`https://cdn.builder.io/api/v1/image/assets/TEMP/bb10159e9b9c9d197d8abf7be537f314e1d7d8040f7b2c893900c0f3f53d0104?apiKey=${process.env.API_KEY}&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/bb10159e9b9c9d197d8abf7be537f314e1d7d8040f7b2c893900c0f3f53d0104?apiKey=${process.env.API_KEY}&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/bb10159e9b9c9d197d8abf7be537f314e1d7d8040f7b2c893900c0f3f53d0104?apiKey=${process.env.API_KEY}&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/bb10159e9b9c9d197d8abf7be537f314e1d7d8040f7b2c893900c0f3f53d0104?apiKey=${process.env.API_KEY}&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/bb10159e9b9c9d197d8abf7be537f314e1d7d8040f7b2c893900c0f3f53d0104?apiKey=${process.env.API_KEY}&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/bb10159e9b9c9d197d8abf7be537f314e1d7d8040f7b2c893900c0f3f53d0104?apiKey=${process.env.API_KEY}&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/bb10159e9b9c9d197d8abf7be537f314e1d7d8040f7b2c893900c0f3f53d0104?apiKey=${process.env.API_KEY}&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/bb10159e9b9c9d197d8abf7be537f314e1d7d8040f7b2c893900c0f3f53d0104?apiKey=${process.env.API_KEY}&`}
          className="aspect-[3.65] object-contain object-center w-full overflow-hidden shrink-0 flex-1"
        />
      </div>
    </div>
  );
}

export default Footer;