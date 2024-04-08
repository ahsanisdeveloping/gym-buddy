import * as React from "react";
import Box from "@mui/joy/Box";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
import '../styles/WorkoutCard.css'
const WorkoutCard = ({workout}) => {
  return (
    <Box className='workoutCard'>
      <Card variant="outlined" >
        <CardContent>
          <Typography  className='workoutCardTitle'>{workout.title}</Typography>
          <Typography className='workoutCardLoad'>Load (KG): {workout.load}</Typography>
          <Typography className='workoutCardReps'>Reps: {workout.reps}</Typography>
          <Typography className='workoutCardCreatedAt'>{workout.createdAt}</Typography>
        </CardContent>
      </Card>
    </Box>
  );
};
export default WorkoutCard;
