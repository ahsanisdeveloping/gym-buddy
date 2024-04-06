import { useState } from "react";
import { TextField, Button } from "@mui/material";
import '../styles/WorkoutForm.css'
const WorkoutForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    load: "",
    reps: "",
  });
  const [error,setError] = useState(null)
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const workout = formData;
    const response = await fetch("/api/workouts", {
      method: "POST",
      body: JSON.stringify(workout),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json()
    if(!response.ok)
    {
        setError(json.error)
    }
    if(response.ok)
    {
        setError(null);
        console.log("New Workout Added");
        setFormData({
            title:"",
            load:"",
            reps:""
        })
    }
  };
  return (
    <form onSubmit={handleSubmit} className="workoutForm">
      <TextField
        name="title"
        label="Exercise Title"
        variant="outlined"
        value={formData.title}
        onChange={handleChange}
      />
      <TextField
        name="load"
        label="Exercise Load"
        variant="outlined"
        value={formData.load}
        onChange={handleChange}
      />
      <TextField
        name="reps"
        label="Exercise Reps"
        variant="outlined"
        value={formData.reps}
        onChange={handleChange}
      />
      <Button variant="contained" type="submit">
        Insert
      </Button>
      {error && <p>{error}</p>}
    </form>
  );
};

export default WorkoutForm;
