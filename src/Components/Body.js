import RestaurantCard from "./RestaurantCard";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import useResAPI from "../utils/useResAPI";
import { WithPromotedlabel } from "./RestaurantCard";
import UserContext from "../utils/UserContext";

const Body = () => {
  const listOfRestaurants = useResAPI();
  console.log(listOfRestaurants);
  const [filterRestaurants, setFilterRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const { logedInUser, setuserName } = useContext(UserContext);
  
  const RestaurantCardPromoted = WithPromotedlabel(RestaurantCard);

 
  // 🆕 Update filter list when main list is fetched
  useEffect(() => {
    if (listOfRestaurants?.length > 0) {
      setFilterRestaurants(listOfRestaurants);
    }
  }, [listOfRestaurants]);

  const handleTopRatedFilter = () => {
    const filtered = listOfRestaurants.filter(
      (res) => Number(res?.info?.avgRating) > 4.2
    );
    setFilterRestaurants(filtered);
  };

  const handleSearch = () => {
    const filtered = listOfRestaurants.filter((res) =>
      res?.info?.name?.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilterRestaurants(filtered);
  };

  const resetFilters = () => {
    setFilterRestaurants(listOfRestaurants);
    setSearchText("");
  };

  const onlineStatus = useOnlineStatus();

  if (!onlineStatus) {
    return (
      <h1 style={{ textAlign: "center" }}>
        Esa Lag Rha hai Jese AAPKA CUT GYA Sir 🛜
      </h1>
    );
  }

  if (listOfRestaurants.length === 0) {
    return <Shimmer />;
  }

  

  return (
    <div className="flex flex-wrap items-center">
      <div className="m-4 p-5 ">
        <input
          type="text"
          className="bg-slate-300  border-solid rounded-md ]"
          placeholder="Search restaurants..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          className="bg-blue-500 m-4 px-4 rounded-md"
          onClick={handleSearch}
        >
          Search
        </button>
        <button className="bg-red-400 px-4 rounded-md" onClick={resetFilters}>
          Reset
        </button>
      </div>

      <div>
        <button
          className="bg-lime-400 rounded-lg border border-black"
          onClick={handleTopRatedFilter}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="m-5">
        userName:
        <input
          className="border border-black mx-3"
          value={logedInUser}
          onChange={(e) => setuserName(e.target.value)}
        ></input>
      </div>

      <div className="flex flex-wrap justify-center ">
        {Array.isArray(filterRestaurants) &&
          filterRestaurants.map((restaurant) => (
            <Link
              key={restaurant?.info?.id}
              to={`/restaurants/${restaurant?.info?.id}`}
            >
              {restaurant?.info?.isOpen ? (
                <RestaurantCardPromoted resData={restaurant?.info} />
              ) : (
                <RestaurantCard resData={restaurant?.info} />
              )}
            </Link>
          ))}
      </div>
    </div>
  );
};

export default Body;
