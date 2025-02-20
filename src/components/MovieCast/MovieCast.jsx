import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GetCast } from "../../services/api";

import s from "./MovieCast.module.css"


const MovieCast = () => {
    const { movieId } = useParams();
    const [cast, setCast] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getCast = async () => {
            setLoading(true);
            try {
                const data = await GetCast(movieId)
                setCast(data)
            } catch (err) {
                console.error("Error fetching cast:", err);
            } finally {
                setLoading(false);
            }
        };
        getCast()
    }, [movieId]);

    
    return (
        <div className={s.castWrapper}>
            {loading ? (
                <p>Loading...</p>
            ) : (
                cast.map(item => (
                    <div className={s.items} key={item.id}>
                        <img 
                            src={`https://image.tmdb.org/t/p/w500${item.profile_path}`} 
                            alt="Photo of the actor" 
                            className={s.img} 
                        />
                        <h4>{item.original_name}</h4>
                        <p>Character: {item.character}</p>
                    </div>
                ))
            )}
        </div>
    );
}

export default MovieCast