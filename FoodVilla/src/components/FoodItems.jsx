import { IMG_URL } from "../config";

const FoodItems = (props) => {

  const values = props.card.info
  return (
    <div className="w-56 p-2 m-2 shadow-lg h-full">
      <img className="w-80 h-40" src={IMG_URL + values.imageId} alt="food-img"/>
      <div className="">
          <h3 className='font-bold text-xl'>{values.name}</h3>
          <h4 className='text-md'>{values.description}</h4>
          <h4 className='font-bold'>{(values.defaultPrice)/100}</h4>
      </div>
    </div>
  );
};

export default FoodItems;
