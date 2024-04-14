import {IMG_URL} from '../config'

// Restaurant card component: Image, name, cuisine
const RestaurantCard = (props) => {
  const { resObj } = props;
  return (<div className="w-56 p-2 m-2 shadow-lg h-full">
      <img className="w-80 h-40" src={IMG_URL + resObj.info.cloudinaryImageId} alt="food-img"/>
      <div className="">
          <h3 className='font-bold text-xl'>{resObj.info.name}</h3>
          <h4>{resObj.info.cuisines.join(", ")}</h4>
          <h4>{resObj.info.avgRatingString + " stars"}</h4>
          <h4>{resObj.info.costForTwo}</h4>
          <h4>{resObj.info.sla.slaString}</h4>
      </div>
  </div>
  );
};

export default RestaurantCard;