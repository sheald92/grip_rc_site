import { useRef } from "react";
import React from "react";
import classes from "./NewCarForm.module.css";
function NewCarForm(props) {
    

  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const drivetrainInputRef = useRef();
  const descriptionInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const enteredTitle = titleInputRef.current.value;
    const enteredImage = imageInputRef.current.value;
    const enteredDrivetrain = drivetrainInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;

    const carData = {
      title: enteredTitle,
      image: enteredImage,
      drivetrain: enteredDrivetrain,
      description: enteredDescription,
    };

    props.onAddCar(carData);

    

  }

 
  return (
    // <Card>
    // <div class="container">
      <div class="row">
        <form class="col s12" onSubmit={submitHandler}>
          <div class="input-field">
            <label htmlFor="title">Car Name</label>
            <input type="text" required id="title" ref={titleInputRef} />
          </div>

          <div class="input-field">
            <label htmlFor="drivetrain">Car Drivetrain</label>
            <input
              type="text"
              required
              id="drivetrain"
              ref={drivetrainInputRef}
            />
          </div>
          <div class="">
            <label htmlFor="description">Car Description</label>
            <textarea
              id="description"
              required
              rows="5"
              ref={descriptionInputRef}
            ></textarea>
          </div>
          {/* another academind tutorial for uploading from pc: https://www.youtube.com/watch?v=XeiOnkEI7XI */}
          <label>Car Image</label>
          <div class="input-field">
            <label htmlFor="image"></label>
            <input type="url" required id="image" ref={imageInputRef} />
          </div>
          <div className={classes.actions}>
            <button>Add Car</button>
            <h1>heello</h1>
          </div>
        </form>
      </div>
    // </div>
    
    // </Card>
  );
}

export default NewCarForm;


// https://ibb.co/x5kgpsT][img]https://i.ibb.co/RHF6xSw/traxxas-slash.jpg