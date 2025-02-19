import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { GetReview } from "../../services/api";


const Reviews = () => {
    const { movieId } = useParams();
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        const getReviews = async () => {
            const data = await GetReview(movieId);
            setReviews(data);
        }
        getReviews()
    }, [movieId])

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
}

export default Reviews