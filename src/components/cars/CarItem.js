import { useContext } from "react";
import Card from "../ui/Card";
import { Link } from "react-router-dom";
// Maybe change this to materialize card
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
      <div class="row center-align">
        <div class="col s9 m9 center-align">
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
              {/* there was a button here instead of link */}
              <button onClick={toggleWishlistStatusHandler}>
                {itemIsWish ? "Remove from Wishlist" : "Add to wishlist"}
              </button>
            </div>
          </Card>
        </div>
        <div class="col s3 m3 hide-on-med-and-down">
          <div class="collection">
            <a href="#!" class="collection-item">
              im in caritem.js for some reason
            </a>
            <a href="#!" class="collection-item">
              Items on wishlist
            </a>
            <a href="#!" class="collection-item">
              click add to wishlist
            </a>
            <a href="#!" class="collection-item">
              and it appears here
            </a>
          </div>
        </div>
      </div>
    </li>
  );
}

export default CarItem;
