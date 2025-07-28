import React from "react";
import travelData from "../data/data.js";
import Card from "./Card.jsx";

const TravelJournal = () => {

  // Dynamic Data
  const finalData = travelData.map((data) => {
    return <Card data={data} key={data.id} />
  })

  return (
    <section>
      {/* Conatiner */}
      <div className="container mx-auto px-4">
        {/* Wrapper */}
        <div className="flex flex-col gap-4 max-w-2xl mx-auto">
          {finalData}
        </div>
      </div>
    </section>
  );
};

export default TravelJournal;
