import { useEffect,useState } from "react";
import WorkoutEntry from "../components/WorkoutEntry";
const Home = () => {
    const [workouts,setWorkouts] = useState(null);
    useEffect(()=>{
        const fetchWorkouts = async () => {
            const response = await fetch('/api/workouts');
            const jsonResponse = await response.json();
            if(response.ok)
            {
                setWorkouts(jsonResponse); 
            }
        }
        fetchWorkouts();
    },[])
    return ( 
        <div>
            <div className="workouts">
                {workouts && workouts.map((workout)=>(
                    <WorkoutEntry key={workout._id} workout={workout}/>
                ))}
            </div>
        </div>
     );
}
 
export default Home;