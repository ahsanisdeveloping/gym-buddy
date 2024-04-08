import { useState } from "react";
import { TextField, Button } from "@mui/material";
import { useWorkoutsContext } from "../hooks/useWorkoutsContext";
import '../styles/WorkoutForm.css'
const WorkoutForm = () => {
  const {dispatch} = useWorkoutsContext();
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
        setFormData({
            title:"",
            load:"",
            reps:""
        })
        dispatch({type:'CREATE_WORKOUTS',payload:json})
    }
  };
  return (
    <form onSubmit={handleSubmit} className="workoutForm">
      <span className="formHeading">Add a new workout</span>
      <TextField
        className="textFields"
        name="title"
        label="Exercise Title"
        variant="outlined"
        value={formData.title}
        onChange={handleChange}
      />
      <TextField
      className="textFields"
        name="load"
        label="Load (KG)"
        variant="outlined"
        value={formData.load}
        onChange={handleChange}
      />
      <TextField
      className="textFields"
        name="reps"
        label="Reps"
        variant="outlined"
        value={formData.reps}
        onChange={handleChange}
      />
      <Button className="formButton" variant="contained" type="submit">
        Insert
      </Button>
      {error && <p className="formError">{error}</p>}
    </form>
  );
};

export default WorkoutForm;
