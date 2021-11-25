import React from "react";
import CarList from "../components/cars/CarList";
import slash from "../images/traxxas-slash.jpg";
const DUMMY_DATA = [
  {
    id: "c1",
    title: "Traxxas Slash 2wd",
    image:
      slash,
    drivetrain: "2wd, 2 Cell, Short Course Truck",
    description: "Chur braap braaaaaap",
  },
  {
    id: "c2",
    title: "Traxxas Slash 2wd",
    image:
        slash,
      //"https://commons.wikimedia.org/wiki/File:Traxxas_Slash_4x4_TSM_OBA_68086-24_Model.jpg",
    drivetrain: "2wd",
    description: "Chur braap braaaaaap",
  },
];
function AllCarsPage() {
  return <section>
      {/* <h1> All Cars </h1> */}
      <CarList cars={DUMMY_DATA}/>
  </section>
}

export default AllCarsPage;
