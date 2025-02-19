import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GetCast } from "../../services/api";

import s from "./Cast.module.css"


const Cast = () => {
    const { movieId } = useParams();
    const [cast, setCast] = useState([]);

    useEffect(() => {
        const getCast = async () => {
            const data = await GetCast(movieId)
            setCast(data)
        }
        getCast()
    }, [movieId])
    console.log(cast);
    
    return (
        <div className={s.castWrapper}>
            {cast.map(item =>
                <div className={s.items} key={item.id}>
                    <img src={`https://image.tmdb.org/t/p/w500${item.profile_path}`}
                     alt="Photo of the actor" className={s.img} />
                    <h4>{item.original_name}</h4>
                    <p>Character: {item.character}</p>
                </div>
            )};
        </div>
    );
}

export default Cast