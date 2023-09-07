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
            <div className="loadingGif" role="alert">
                Loading...
                <img
                    src="https://www.istitutomarangoni.com/fe-web/img/marangoni/loader.gif"
                    alt="Loading animation"
                />
            </div>
        )
    } else {

    return (
        <div className="actor-page">
           <header>
                <h1>{actor.name}</h1>
           </header>
           <figure className="actor-photo">
                <img
                    className="actor-headshot"
                    width="203px"
                    height="300px"
                    src={actor.img}
                    alt={`${actor.name}'s headshot`}
                />
                <figcaption>
                    <strong className="bold-text">Credits:</strong>
                    {actor.credits}
                </figcaption>
           </figure>
           <section className="actor-details">
            <p>
                <strong className="bold-text">Known for:</strong>{actor.title}
            </p>
           </section>
        </div>
    )
}
}

export default ActorPage