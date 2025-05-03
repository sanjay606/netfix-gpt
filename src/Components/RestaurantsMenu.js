import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantsMenu from "../utils/useRestaurantsMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantsMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantsMenu(resId);

  const [showIndex, setshowIndex] = useState(null);

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwo } = resInfo?.cards[2]?.card?.card?.info || {};

  const categories = resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
    (c) =>
      c?.card?.card?.["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  ) || [];

  return (
    <div className="text-center">
      <h1 className="text-2xl font-bold m-5">{name}</h1>
      <p className="font-bold">
        {cuisines?.join(", ")} - ₹ {costForTwo / 100}
      </p>

      {/* Categories Accordion */}
      {categories.map((category, index) => (
        <RestaurantCategory
          key={category?.card?.card?.title}
          data={category?.card?.card}
          showItems={index === showIndex}
          setshowIndex={setshowIndex}
          index={index}
        />
      ))}
    </div>
  );
};

export default RestaurantsMenu;
