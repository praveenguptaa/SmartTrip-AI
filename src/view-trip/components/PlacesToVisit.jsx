import React, { useEffect } from "react";
import PlaceCardItem from "./PlaceCardItem";

function PlacesToVisit({ trip }) {
  const itineraries = trip?.tripData?.itinerary;
  // console.log(itineraries);
  return (
    <div>
      <h2 className="font-bold text-lg">Places to visit</h2>
      <div>
        {itineraries?.map((item, index) => (
          <div className="mt-5" key={index}>
            <h2 className="font-medium text-lg">{item.day}</h2>
            <div className="grid md:grid-cols-2 gap-5">
              {item.plan.map((place, index) => (
                <div className="" key={index}>
                  <h2 className="font-medium text-sm text-orange-600">
                    {place.bestTimeToVisit}
                  </h2>
                  <PlaceCardItem place={place} />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PlacesToVisit;
