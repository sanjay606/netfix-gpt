import { useContext } from "react";
import UserContext from "../utils/UserContext";

const CDN_URL = "https://media-assets.swiggy.com/swiggy/image/upload/";

const RestaurantCard = ({ resData }) => {
  const {
    name,
    cuisines,
    avgRating,
    costForTwo,
    deliveryTime,
    cloudinaryImageId,
    sla,
  } = resData;

  const { logedInUser } = useContext(UserContext);

  return (
    <div className="m-3 p-4 w-[250px] rounded-lg  hover:bg-sky-700 " ro>
      <img
        className="rounded-lg"
        src={CDN_URL + cloudinaryImageId}
        alt={name}
        width="200"
        height="150"
      />
      <h3 className="text-lg border-l-red-50">{name}</h3>
      <p>{cuisines?.join(", ")}</p>
      <p>⭐ {avgRating}</p>
      <p>{costForTwo}</p>
      <p>{sla?.deliveryTime || deliveryTime} mins</p>
      <p>{logedInUser}</p>
    </div>
  );
};

export const WithPromotedlabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute m-4 px-3 bg-black text-white rounded-lg ">
          Promoted
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
