import React from "react";
import { addItems } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

const ItemList = ({ items = [] }) => {
  const dispatch = useDispatch();

  const handleaddItem = (item) => {
    dispatch(addItems(item));
  };

  return (
    <div className="space-y-4">
      {items.map((item) => {
        const { id, name, description, price, imageId } = item.card.info;
        const itemPrice = price
          ? price / 100
          : item.card.info.defaultPrice / 100;
        const imageUrl = `https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/${imageId}`;
        const fallbackImage =
          "https://dummyimage.com/150x150/cccccc/000000&text=No+Image";

        return (
          <div
            key={id}
            className="flex p-4 m-2 border-b-2 border-gray-300 shadow-md rounded-lg hover:shadow-xl transition-shadow duration-300 ease-in-out"
          >
            <div className="ml-4 flex-1">
              <h3 className="font-semibold text-lg text-gray-800 truncate">
                {name}
              </h3>
              <p className="text-sm text-gray-600 mt-1">₹{itemPrice}</p>
              <p className="text-xs text-gray-500 mt-2 line-clamp-2">
                {description}
              </p>
            </div>
            <div className="flex-shrink-0 ml-4 flex flex-col items-center">
              <img
                src={imageUrl}
                alt={name}
                className="w-24 h-24 object-cover rounded-lg"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = fallbackImage;
                }}
                loading="lazy"
              />
              <button
                className="mt-4 py-2 px-6 bg-green-400 text-white rounded-full hover:bg-blue-700 transition duration-300"
                onClick={() => handleaddItem(item)}
              >
                Add+
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;
