import * as React from "react";
import Box from "@mui/joy/Box";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import { Button } from "@mui/material";
import Typography from "@mui/joy/Typography";
import { useWorkoutsContext } from "../hooks/useWorkoutsContext";
import "../styles/WorkoutCard.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import formatDistanceToNow from 'date-fns/formatDistanceToNow'
const WorkoutCard = ({ workout }) => {
  const { dispatch } = useWorkoutsContext();
  const handleDelete = async () => {
    const response = await fetch("/api/workouts/" + workout._id, {
      method: "DELETE",
    });
    const jsonResponse = await response.json();
    if (response.ok) {
      dispatch({
        type: "DELETE_WORKOUT",
        payload: jsonResponse,
      });
    }
  };
  return (
    <Box className="workoutCard">
      <Card variant="outlined">
        <CardContent className='cardContentMain'>
          <div className="typographyDiv">
            <Typography className="workoutCardTitle">
              {workout.title}
            </Typography>
            <Typography className="workoutCardLoad">
              Load (KG): {workout.load}
            </Typography>
            <Typography className="workoutCardReps">
              Reps: {workout.reps}
            </Typography>
            <Typography className="workoutCardCreatedAt">
              {formatDistanceToNow(new Date(workout.createdAt),{addSuffix:true})}
            </Typography>
          </div>
          <div className="buttonDiv">
            <Button
              className="workoutCardButton"
              onClick={handleDelete}
            >
              <FontAwesomeIcon icon={faTrash} />
            </Button>
          </div>
        </CardContent>
      </Card>
    </Box>
  );
};
export default WorkoutCard;
