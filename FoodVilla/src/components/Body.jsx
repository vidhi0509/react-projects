import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";
import useOnline from "../hooks/useOnline";

// Body Component for body section: It contain all restaurant cards
// We are mapping restaurantList array and passing data to RestaurantCard component as props with unique key as index
const Body = () => {
  const [input, setInput] = useState("");
  const [allrestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setAllRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  }

  const isOnline = useOnline();

  if (!isOnline) {
    return <h1>🔴 Offline, please check your internet connection!!</h1>;
  }
  // not render component (Early return)
  if (!allrestaurants) return null;

  return allrestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <div>
      <div className="p-2 m-2">
        <button
          className="p-3 bg-green-200 rounded-md shadow-md"
          onClick={() => {
            const myList = allrestaurants.filter(
              (res) => res.info.avgRating > 4.0
            );
            setFilteredRestaurants(myList);
          }}
        >
          Top Rated Restaurants
        </button>
        <div className="p-5 my-5 text-center">
          <input
            type="text"
            className="w-96 p-2 shadow-lg "
            placeholder="Search...."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button
            className="p-2 m-2 bg-blue-500 rounded-md text-white hover:bg-green-600"
            onClick={() => {
              // filter the data
              const data = filterData(input, allrestaurants);
              // update the state of restaurants list
              setFilteredRestaurants(data);
            }}
          >
            Search
          </button>
        </div>
      </div>
      <div className="flex flex-wrap">
        {filteredRestaurants.map((restaurant) => (
          <Link to={"/restaurant/" + restaurant.info.id}
            key={restaurant?.info?.id}>
            <RestaurantCard resObj={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
