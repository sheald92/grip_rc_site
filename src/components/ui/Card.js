import React from "react";
import classes from "../ui/Card.module.css";
function Card(props)  {
    return <div class="card" className={classes.main}>
        {props.children}
    </div>
}

export default Card;