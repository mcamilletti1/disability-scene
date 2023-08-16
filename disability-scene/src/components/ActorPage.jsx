import { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'


const ActorPage = () => {
    const [actor, setActor] = useState('')
    let { id } = useParams()

    useEffect(() => {
        const getActor = async () => {
            try {
                const response = await axios.get(`https://disability-scene-api-production.up.railway.app/cast/${id}`);
                const featuredActor = response.data;
                setActor(featuredActor);
            } catch (error) {
                console.error("Error fetching actor:", error);
            }
        }
        getActor();
    }, [])


    return (
        <div className="actor-page">
            <section className="actor-photo">
                <h2>{actor.name}</h2>
                <img className="actor-headshot" width="203px" height="300px" src={actor.img}></img>
            </section>
            <section className="actor-details">
                <p><strong>Credits:</strong> {actor.credits}</p>
                <p><strong>Known for:</strong> {actor.title}</p>
            </section>
        </div>
    )
}

export default ActorPage