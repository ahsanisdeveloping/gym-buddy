import { createContext, useReducer } from "react";
export const WorkoutContext = createContext();

export const workoutsReducer = (state, action) => {
  switch (action.type) {
    case "SET_WORKOUTS":
      return {
        workouts: action.payload,
      };
    case "CREATE_WORKOUTS":
      return {
        workouts: [action.payload, ...state.workouts],
      };
    case "DELETE_WORKOUT":
      return {
        workouts: state.workouts.filter((w) => w._id !== action.payload._id),
      };
    case "UPDATE_WORKOUT":
      const updatedWorkoutIndex = state.workouts.findIndex(
        (w) => w._id === action.payload._id
      );
      if (updatedWorkoutIndex !== -1) {
        const updatedWorkouts = [...state.workouts];
        updatedWorkouts[updatedWorkoutIndex] = action.payload;
        return {
          ...state,
          workouts: updatedWorkouts,
        };
      }
      return state;
    default:
      return state;
  }
};

export const WorkoutContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(workoutsReducer, { workouts: null });
  return (
    <WorkoutContext.Provider value={{ ...state, dispatch }}>
      {children}
    </WorkoutContext.Provider>
  );
};
