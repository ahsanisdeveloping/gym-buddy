const WorkoutEntry = ({workout}) => {
  return (
    <div className="workout">
      <h4>{workout.title}</h4>
      <p>Load (KG): {workout.load}</p>
      <p>Reps: {workout.reps}</p>
      <p>{workout.createdAt}</p>

    </div>
  );
};

export default WorkoutEntry;
