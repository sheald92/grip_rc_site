import React from "react";
import { useState, useEffect } from 'react';
import CarList from "../components/cars/CarList";
// import slash from "../images/traxxas-slash.jpg";
// const DUMMY_DATA = [
//   {
//     id: "c1",
//     title: "Traxxas Slash 2wd",
//     image:
//       slash,
//     drivetrain: "2wd, 2 Cell, Short Course Truck",
//     description: "Chur braap braaaaaap",
//   },
//   {
//     id: "c2",
//     title: "Traxxas Slash 2wd",
//     image:
//         slash,
//       //"https://commons.wikimedia.org/wiki/File:Traxxas_Slash_4x4_TSM_OBA_68086-24_Model.jpg",
//     drivetrain: "2wd",
//     description: "Chur braap braaaaaap",
//   },
// ];
function AllCarsPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedCars, setLoadedCars] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      'https://grip-rc-default-rtdb.firebaseio.com/cars.json'
    ).then(response => {
      return response.json();
    }).then (data => {
      const cars = [];

      for (const key in data) {
        const car = {
          id: key,
          ...data[key]
        };
        cars.push(car);
      }

      setIsLoading(false);
      setLoadedCars(cars);
    });
  }, []);
//external dependencies go in the array above, in this case, none
//above function will run once when page is rendered

if (isLoading) {
  return <section>
    <p>Loading...</p>
  </section>
}

  return <section>
      {/* <h1> All Cars </h1> */}
      <CarList cars={loadedCars}/>
  </section>
}

export default AllCarsPage;
