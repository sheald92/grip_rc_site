import Slider from "../components/ui/Slider";
// import { Carousel, Slider } from "materialize-css";
import React from "react";
import { useState, useEffect, useContext } from "react";
import CarList from "../components/cars/CarList";
import CarWishList from "../components/cars/CarWishList";
import WishlistContext from "../store/wishlist-context";
import banner from '../images/banner.png';

function AllCarsPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedCars, setLoadedCars] = useState([]);
  const wishesCtx = useContext(WishlistContext);

  useEffect(() => {
    setIsLoading(true);
    fetch("https://grip-rc-default-rtdb.firebaseio.com/cars.json")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const cars = [];

        for (const key in data) {
          const car = {
            id: key,
            ...data[key],
          };
          cars.push(car);
        }

        setIsLoading(false);
        setLoadedCars(cars);
      });
  }, []);
  //external dependencies go in the array above, in this case, none
  //above function will run once when page is rendered

  let content;
  if (wishesCtx.totalWishes === 0) {
    content = <p>Your Wishlist is empty </p>;
  } else {
    content = <CarWishList cars={wishesCtx.wishes} />;
  }

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  return (
    <section>
      {/* <h1> All Cars </h1> */}
      <div class="row center-align hide-on-med-and-down">
        <div class="col s12 m12 center-align">
          {/* <Slider /> */}
          <img src={banner} alt="banner image" width="1000px" height="300px"/>
          </div>
          </div>
          <div class="row center-align">
            <div class="col s9 m9 center-align">
              <CarList cars={loadedCars} />
            </div>
            <div class="col s3 m3 center-align hide-on-med-and-down">
              <h3>My Wishlist</h3>
              {content}
            </div>
          </div>
    </section>
  );
}

export default AllCarsPage;
