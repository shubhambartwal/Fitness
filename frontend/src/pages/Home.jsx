import React from "react";
import { useState, useEffect } from "react";
const Home = () => {
  const [workouts, setWorkouts] = useState(null);
  useEffect(() => {
    const fetchWorkout = async () => {
        const response = await fetch('/api/workouts');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    console.log(data);
    };
    fetchWorkout()
  }, []);
  return (
    <div className="workouts">
      {workouts &&
        workouts.map((workout) => <p key={workout._id}>{workout.title}</p>)}
    </div>
  );
};

export default Home;
