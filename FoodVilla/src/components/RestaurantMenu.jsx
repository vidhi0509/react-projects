import React from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurant from "../hooks/useRestaurant";
import { IMG_URL} from "../config";
import { addItem } from "../utils/cartSlice";
import { useDispatch } from 'react-redux'

const RestaurantMenu = () => {

  const { id } = useParams();
  const restaurant = useRestaurant(id)
  const categories = restaurant?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards

  const dispatch = useDispatch()

  const handleAddItem = (item) => {
    dispatch(addItem(item))
  }

  return !restaurant ? (
    <Shimmer />
  ) : (
    <>
      <div>
        <h1>Restaurant id: {id}</h1>
        <h2>{restaurant?.cards[2]?.card?.card?.info?.name}</h2>
        <img className="w-100 h-60" src={IMG_URL + restaurant?.cards[2]?.card?.card?.info?.cloudinaryImageId} />
        <h3>{restaurant?.cards[2]?.card?.card?.info?.areaName}</h3>
        <h3>{restaurant?.cards[2]?.card?.card?.info?.city}</h3>
        <h3>{restaurant?.cards[2]?.card?.card?.info?.avgRating}</h3>
      </div>
      <div>
        <h1 className="p-1 m-1 text-2xl font-bold">Menu</h1>
        <ul>
        {Array.isArray(categories) ? (
        // If categories is an array, directly map over it
          categories.map((item) => (
          <li key={item.card.info.id}>{item.card.info.name} <button className="p-1 m-1 rounded-md bg-green-600" onClick={() => handleAddItem(item)}>Add</button></li>
        ))
        ) : (
        // If categories is an object, use Object.values
        Object.values(categories).map((item) => (
          <li key={item.card.info.id}>{item.card.info.name}</li>
          ))
        )}
        </ul>
      </div>
    </>
  );
};

export default RestaurantMenu;
