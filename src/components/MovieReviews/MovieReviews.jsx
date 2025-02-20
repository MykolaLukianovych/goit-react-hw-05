import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GetReview } from "../../services/api";

const MovieReviews = () => {
    const { movieId } = useParams();
    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getReviews = async () => {
            setLoading(true);
            const data = await GetReview(movieId);
            setReviews(data);
            setLoading(false);
        };
        getReviews();
    }, [movieId]);

    if (loading) {
        return <h3>Loading reviews...</h3>;
    }

    if (reviews.length === 0) {
        return <h3>We dont have any reviews for this movie.</h3>;
    }

    return (
        <div>
            {reviews.map((item) => (
                <div key={item.id}>
                    <h3>Author: {item.author}</h3>
                    <p>{item.content}</p>
                </div>
            ))}
        </div>
    );
};

export default MovieReviews;