import React, { useContext } from 'react';
import './FoodDisplay.css';
import { StoreContext } from '../Context/StoreContext';
import FoodItem from '../FoodItem/FoodItem';

const FoodDisplay = ({category}) => {
    const { food_list } = useContext(StoreContext); // Use `food_item` from the context

    return (
        <div>
            <div className='food-display' id='food-display'>
                <h2>Top dish near you</h2>
                <div className='food-display-list'>
                    {
                        food_list.map((item , index) => { // Use `food_item` from context
                           {if(category='ALL' || category==item.category)
                            {
                                   return <FoodItem 
                                   key={item._id} 
                                   id={item._id} 
                                   name={item.name} 
                                   description={item.description} 
                                   price={item.price} 
                                   image={item.image} 
                               /> 
                            }
                        }
                            
})
                    }
                </div>
            </div>
        </div>
    );
};

export default FoodDisplay;
