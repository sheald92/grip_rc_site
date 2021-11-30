
import React from "react";
import { Link } from "react-router-dom";
function CarWishListItem(props) {
  return (
    // <ul class="collection">
    //   <li class="collection-item avatar">
    //     <img src={props.image} alt={props.title} class="circle" />
    //     <span class="title">{props.title}</span>
    //     <p>
    //       {props.drivetrain}
    //     </p>
    //   </li>
    // </ul>

    <ul class="collection">
      
      <li class="collection-item">
        
        <div>
          {props.title}
          <a href="#!" class="secondary-content">
          <Link to="/wishlist"><i class="material-icons">toys</i></Link>
          </a>
          </div>
      </li>
    </ul>
  );
}

export default CarWishListItem;
