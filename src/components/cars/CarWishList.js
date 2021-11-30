import CarWishListItem from "./CarWishListItem";
import React from "react";


function CarWishList(props) {
    return <ul>
        {props.cars.map(car => <CarWishListItem 
        key={car.id} 
        id={car.id}
        image={car.image}
        title={car.title}
        drivetrain={car.drivetrain}
        description={car.description} />)}
    </ul>
}

export default CarWishList;