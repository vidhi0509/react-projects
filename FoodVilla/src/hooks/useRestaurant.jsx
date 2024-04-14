import { useState, useEffect } from 'react'
import { MENU_API_URL } from "../config"; 

const useRestaurant = (id) => {
    
    const [restaurantMenu, setRestaurantMenu] = useState(null)

    useEffect(() => {
        getRestaurantInfo();
      }, []);
    
      async function getRestaurantInfo() {
        const data = await fetch(MENU_API_URL + id);
        const json = await data.json();
        // console.log(json.data)
        setRestaurantMenu(json?.data);
      }
    return restaurantMenu

}

export default useRestaurant
