import React from "react";
import { useContext } from "react";
import WishlistContext from "../store/wishlist-context";
import CarList from "../components/cars/CarList";
function WishListPage() {
  const wishesCtx = useContext(WishlistContext);

  let content;
  if (wishesCtx.totalWishes === 0) {
    content = <p>Your Wishlist is empty </p>;
  } else {
    content = <CarList cars={wishesCtx.wishes} />;
  }

  return (
    <section>
      <div class="row center-align">
        <div class="col s12 m12 center-align">
          <h1>My Wishlist</h1>
          {content}
        </div>
      </div>
    </section>
  );
}

export default WishListPage;
