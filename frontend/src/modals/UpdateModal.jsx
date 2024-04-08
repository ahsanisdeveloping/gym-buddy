import * as React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import "../styles/UpdateModal.css";
import { useWorkoutsContext } from "../hooks/useWorkoutsContext";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function UpdateModal(props) {
  const {dispatch} = useWorkoutsContext();
  const [updateForm, setUpdateForm] = useState({
    title: props.initialValues.title,
    load: props.initialValues.load,
    reps: props.initialValues.reps,
  });
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(prev=>!prev);
  const handleClose = () => setOpen(false);

  const handleUpdateFormChange = (e) => {
    setUpdateForm({
        ...updateForm,[e.target.name]:e.target.value
    })
  }

  const handleUpdate = async () => {
    const workout = updateForm;
    const response = await fetch("/api/workouts/"+props.initialValues._id, {
      method: "PATCH",
      body: JSON.stringify(workout),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json()
    if(!response.ok){alert("something went wrong")};
    if(response.ok){
       dispatch({type:'UPDATE_WORKOUT',payload:json})
      handleClose();
      window.location.reload();
    };
  }
  return (
    <div>
      <Button onClick={handleOpen}>Update</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="updateModal">
          <Typography variant="h5">Update Workout</Typography>
          <TextField
            name="title"
            className="updateModalTextField"
            variant="outlined"
            label="Title"
            value={updateForm.title}
            onChange={handleUpdateFormChange}
          />
          <TextField
            name="load"
            className="updateModalTextField"
            variant="outlined"
            label="Load (KG)"
            value={updateForm.load}
            onChange={handleUpdateFormChange}
          />
          <TextField
            name="reps"
            className="updateModalTextField"
            variant="outlined"
            label="Reps"
            value={updateForm.reps}
            onChange={handleUpdateFormChange}
          />
          <Button
            className="updateModalButton"
            variant="contained"
            onClick={handleUpdate}
          >
            Update
          </Button>
          <Button
            className="updateModalButton"
            variant="outlined"
            onClick={handleClose}

          >
            close
          </Button>
        </Box>
      </Modal>
    </div>
  );
}
