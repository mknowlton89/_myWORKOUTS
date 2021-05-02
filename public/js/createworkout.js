console.log("hello world");
const title = document.getElementById("workout-title");
const description = document.getElementById("workout-description");
const rating = document.getElementById("workout-rating");
const workout_type = document.getElementById("workout-type");
const body_zone = document.getElementById("body-zone");
const duration = document.getElementById("workout-duration");
const selectedDropdown = document.getElementById("workout-type");
// const owner_id = document.getElementById("owner-id");
const submitButton = document.getElementById("submit-button");

const newFormHandler = async (event) => {
  event.preventDefault();

  const bodyTitle = title.value;
  const bodyDescription = description.value;
  const bodyRating = rating.value;
  const bodyWorkoutType = selectedDropdown.value;
  const bodyBZone = body_zone.value;
  const bodyDuration = duration.value;
  // const bodyOwnerID = owner_id.value;
  console.log("hello again");
  if (
    title.value &&
    description.value &&
    rating.value &&
    workout_type.value &&
    body_zone.value &&
    duration.value
    // owner_id.value
  ) {
    console.log(rating.value);
    const response = await fetch("/api/workouts", {
      method: "POST",

      body: JSON.stringify({
        title: bodyTitle,
        description: bodyDescription,
        rating: bodyRating,
        workout_type: bodyWorkoutType,
        body_zone: bodyBZone,
        duration: bodyDuration,
        // owner_id: bodyOwnerID,
      }),

      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      console.log("the request went through");
      document.location.replace("/api/users/workouts");
    } else {
      console.log("the request failed");
    }
  }
  console.log(bodyTitle);
  console.log(bodyDescription);
  console.log(bodyRating);
  console.log(bodyWorkoutType);
  console.log(bodyBZone);
  console.log(bodyDuration);
};

submitButton.addEventListener("click", newFormHandler);
