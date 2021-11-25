import CarItem from "./CarItem";
import React from "react";

function CarList(props) {
    return <ul>
        {props.cars.map(car => <CarItem 
        key={car.id} 
        id={car.id}
        image={car.image}
        title={car.title}
        drivetrain={car.drivetrain}
        description={car.description} />)}
    </ul>
}

export default CarList;