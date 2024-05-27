import React from "react";
import { useWorkoutContext } from "../hooks/useWorkoutContext";
const WorkoutDetails = ({ workout }) => {
  const { title, load, reps, createdAt } = workout;
  const {dispatch} =useWorkoutContext()
  const handleClick = async () => {
    const response = await fetch( "http://localhost:4000/api/workouts/" + workout._id,
      {
        method: 'DELETE'
      }
    );
    const json = await response.json();
    if (response.ok) {
      dispatch({type:'DELETE_WORKOUT',payload:workout._id})
    }
  };
  return (
    <div className="workout-details">
      <h2>{title}</h2>
      <p>
        <strong>Load(kg) :</strong>
        {load}
      </p>
      <p>
        <strong>reps :</strong>
        {reps}
      </p>
      <p>{createdAt}</p>
      <span onClick={handleClick}>Delete</span>
    </div>
  );
};

export default WorkoutDetails;
