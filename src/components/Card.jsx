import React from "react";
import { IoIosPin } from "react-icons/io";

const Card = (props) => {

    // Passing props data into variable
    const { data } = props;
    
    // Destructuring props data
    const { img, alt, title, country, googleMap, dates, text } = data
    // console.log(data);

    return (
        // Card
        <div
            key={data.id}
            className="flex items-center flex-col sm:flex-row  gap-5"
        >
            {/* Image */}
            <div className="w-full sm:w-52 aspect-[3/4] rounded-md overflow-hidden shrink-0">
                <img
                    src={img.src}
                    alt={alt}
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
                        {country}
                    </p>
                    <a
                        href={googleMap}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 underline hover:text-gray-600"
                    >
                        View on Google Maps
                    </a>
                </div>
                <h2 className="font-bold text-3xl mt-1">{title}</h2>
                <p className="font-bold mt-4 text-sm">{dates}</p>
                <p className="mt-2 text-sm">{text}</p>
            </div>
        </div>
    );
};

export default Card;
