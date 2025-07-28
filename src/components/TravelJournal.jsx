import React from "react";
import travelData from "../data/data.js";
import { IoIosPin } from "react-icons/io";

const TravelJournal = () => {
  return (
    <section>
      {/* Conatiner */}
      <div className="container mx-auto px-4">
        {/* Wrapper */}
        <div className="flex flex-col gap-4 max-w-2xl mx-auto">
            
          {/* <div className="card flex gap-5">
            <div className="aspect-ratio-portrait rounded-md overflow-hidden">
              <img
                src="https://scrimba.com/links/travel-journal-japan-image-url"
                alt="Mount Fuji"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col">
              <div className="flex gap-3">
                <p className="flex gap-1 place-items-center">
                  <span>
                    <IoIosPin className="text-red-400" />
                  </span>
                  Japan
                </p>
                <a
                  href="https://www.googlemaps.com"
                  className="text-gray-400 underline"
                >
                  View on Google Maps
                </a>
              </div>
              <h2 className="font-bold text-3xl mt-1">Mount Fuji</h2>
              <p className="font-bold mt-4">12 Jan 2023 - 24 Jan 2023</p>
              <p className="mt-2">
                Mount Fuji is the tallest mountain in Japan, standing at 3,776
                meters (12,380 feet). Mount Fuji is the single most popular
                tourist site in Japan, for both Japanese and foreign tourists.
              </p>
            </div>
          </div> */}

          {/* Dynamic Data */}
          {travelData.map((data) => (
            // Card
            <div key={data.id} className="flex items-center flex-col sm:flex-row  gap-5">
              {/* Image */}
              <div className="w-full sm:w-52 aspect-[3/4] rounded-md overflow-hidden shrink-0">
                <img
                  src={data.img.src}
                  alt={data.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Text */}
              <div className="flex flex-col flex-1">
                {/* Loctaion Container */}
                <div className="flex gap-3 flex-wrap">
                  <p className="flex items-center gap-1 place-items-center">
                    <span>
                      <IoIosPin className="text-red-400" />
                    </span>
                    {data.title}
                  </p>
                  <a
                    href={data.googleMapsLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 underline"
                  >
                    View on Google Maps
                  </a>
                </div>
                <h2 className="font-bold text-3xl mt-1">{data.title}</h2>
                <p className="font-bold mt-4 text-sm">{data.dates}</p>
                <p className="mt-2 text-sm">{data.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TravelJournal;
