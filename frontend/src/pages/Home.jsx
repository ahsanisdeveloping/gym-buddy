import { useEffect,useState } from "react";
import WorkoutCard from "../components/WorkoutCard";
import WorkoutForm from "../components/WorkoutForm";
import '../styles/Home.css'
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