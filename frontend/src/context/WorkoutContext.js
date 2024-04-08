import { createContext } from "react";
export const WorkoutContext = createContext();

export const WorkoutContextProvider = ({childern}) => {
    return(
        <WorkoutContext.Provider>
            {childern}
        </WorkoutContext.Provider>
    );
}
