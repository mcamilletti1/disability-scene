import { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'


const Actors = () => {

    let { id } = useParams()

    console.log(id)

    const [actors, setActors] = useState([])


    useEffect(() => {
        const getActors = async () => {
            try {
                const response = await axios.get(`https://disability-scene-api-production.up.railway.app/movie/${id}/cast`);
                const data = response.data;
                setActors(data);
            } catch (error) {
                console.error("Error fetching actors:", error);
            }
        }
        getActors();
    }, [actors, id])

    console.log(actors)

    let navigate = useNavigate()


    const showActor = (id) => {
        navigate(`actorPage/${id}`)
    }
    
    return ( 
        <div className="actor-carousel">
            <h2>Cast & Crew</h2>  
            <div className="actors">
                {
                   actors.map((actor) => (
                    <div key={actor.id} className="actorList" onClick={() => showActor(actor.id)}>
                        <img className="actorImage" aria-hidden="true" width="203px" height="258px" src={actor.img}></img>
                        <p className="actorTitle">{actor.title}</p>
                    </div>
                   ))
                }
            </div>

        </div>
    )
}


export default Actors