import { useEffect, useState } from "react";
import { RES_API } from "./constant";

const useResAPI = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);

  useEffect(() => {
    const fetchRes = async () => {
      try {
        const response = await fetch(RES_API);
        const json = await response.json();

        const restaurants =
          json?.data?.cards?.find(
            (card) =>
              card?.card?.card?.gridElements?.infoWithStyle?.restaurants
          )?.card?.card?.gridElements?.infoWithStyle?.restaurants;

        setListOfRestaurants(restaurants || []);
      } catch (error) {
        console.error("❌ Failed to fetch restaurants:", error);
      }
    };

    fetchRes();
  }, []);

  return listOfRestaurants;
};

export default useResAPI;
