import { useState, useEffect } from 'react'
import axios from 'axios'
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

    if (actor.length === 0) {
        return (
            <img className="loadingGif" src="https://www.istitutomarangoni.com/fe-web/img/marangoni/loader.gif"></img>
        )
    } else {

    return (
        <div className="actor-page">
            <section className="actor-photo">
                <h2>{actor.name}</h2>
                <img className="actor-headshot" width="203px" height="300px" src={actor.img}></img>
            </section>
            <section className="actor-details">
                <p><strong className="bold-text">Credits:</strong> {actor.credits}</p>
                <p><strong className="bold-text">Known for:</strong> {actor.title}</p>
            </section>
        </div>
    )
}
}

export default ActorPage 