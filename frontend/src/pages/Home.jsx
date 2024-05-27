import React, { useContext } from "react";
import { useState, useEffect } from "react";
import WorkoutDetails from "../components/WorkoutDetails";
import WorkoutForm from "../components/WorkoutForm";
import { useWorkoutContext } from "../hooks/useWorkoutContext";

const Home = () => {
   const { workouts, dispatch } = useWorkoutContext();
  useEffect(() => {
    const fetchWorkout = async () => {
      const response = await fetch("http://localhost:4000/api/workouts");
      const json = await response.json();
     if (response.ok) {
        dispatch({
          type: "SET_WORKOUTS",
          payload: json,
        });
      }
     };
    fetchWorkout(); 
  }, [dispatch]);
  return (
    <div className="workouts">
      {workouts &&
        workouts.map((workout) => (
          <WorkoutDetails key={workout._id} workout={workout} />
        ))}
      <WorkoutForm />
    </div>
  );
};

export default Home;
