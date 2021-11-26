import { createContext, useState } from "react";
import React from "react";

const WishlistContext = createContext({
    wishes: [],
    totalWishes: 0,
    addWish: (wishCar) => {},
    removeWish: (carId) => {},
    itemIsWish: (carId) => {}
});

export function WishlistContextProvider(props) {

    const[userWishlist, setUserWishlist] = useState([]); 

    function addWishHandler(wishCar) {
        setUserWishlist((prevUserWishlist) => {
            return prevUserWishlist.concat(wishCar);
        });
    }

    function removeWishHandler(carId) {
        setUserWishlist(prevUserWishlist => {
            return prevUserWishlist.filter(car => car.id !== carId);
        })
    }

    function itemIsWishHandler(carId) {
        return userWishlist.some(car => car.id === carId);
    }

    const context = {
        wishes: userWishlist,
        totalWishes: userWishlist.length,
        addWish: addWishHandler,
        removeWish: removeWishHandler,
        itemIsWish: itemIsWishHandler
    };

    return <WishlistContext.Provider value={context}> 
        {props.children}
    </WishlistContext.Provider>
}

export default WishlistContext;