import { useContext } from "react";
import Card from "../ui/Card";
import React from "react";
import WishlistContext from "../../store/wishlist-context";

function CarItem(props) {
  const wishesCtx = useContext(WishlistContext);

  const itemIsWish = wishesCtx.itemIsWish(props.id);

  function toggleWishlistStatusHandler() {
    if (itemIsWish) {
      wishesCtx.removeWish(props.id);
    } else
      wishesCtx.addWish({
        id: props.id,
        title: props.title,
        drivetrain: props.drivetrain,
        image: props.image,
        description: props.description,
      });
  }

  return (
    <li>
          <Card>
            <div class="card-image">
              <img src={props.image} alt={props.title} />
            </div>

            <div class="card-content valign center-block">
              <h5>{props.title}</h5>
            </div>
            <div class="card-content valign center-block">
              <p>{props.description}</p>
            </div>
            <div class="card-content valign center-block">
              <drivetrain> Type: {props.drivetrain}</drivetrain>
            </div>

            <div class="card-action valign center-block">
              <button onClick={toggleWishlistStatusHandler}>
                {itemIsWish ? "Remove from Wishlist" : "Add to wishlist"}
              </button>
            </div>
          </Card>
    </li>
  );
}

export default CarItem;
