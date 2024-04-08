import { useEffect } from "react";
import WorkoutCard from "../components/WorkoutCard";
import WorkoutForm from "../components/WorkoutForm";
import { useWorkoutsContext } from "../hooks/useWorkoutsContext";
import '../styles/Home.css'
const Home = () => {
    const {workouts,dispatch} = useWorkoutsContext();
    useEffect(()=>{
        const fetchWorkouts = async () => {
            const response = await fetch('/api/workouts');
            const jsonResponse = await response.json();
            if(response.ok)
            {
                dispatch({type:"SET_WORKOUTS",payload:jsonResponse})
            }
        }
        fetchWorkouts();
    },[dispatch])
    return ( 
        <div className="homepage">
            <div className="workouts">
                {workouts && workouts.map((workout)=>(
                    <WorkoutCard key={workout._id} workout={workout}/>
                ))}
            </div>
            <WorkoutForm/>
        </div>
     );
}
 
export default Home;