import React from "react";
import { useState, useEffect } from "react";
import WorkoutDetails from "../components/WorkoutDetails";
import WorkoutForm from "../components/WorkoutForm";
const Home = () => {
  const [workouts, setWorkouts] = useState(null);
  useEffect(() => {
    const fetchWorkout = async () => {
      const response = await fetch("http://localhost:4000/api/workouts");
      if (response.ok) {
        const json = await response.json();
        setWorkouts(json);
      }
    };
    fetchWorkout();
  }, []);
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
