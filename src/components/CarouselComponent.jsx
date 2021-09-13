import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import MovieCard from "./MovieCard";

const CarouselComponent = ({ movieList }) => {

    
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 6
        },
        desktop: {
            breakpoint: { max: 3000, min: 1200 },
            items: 6
        },
        tablet: {
            breakpoint: { max: 992, min: 464 },
            items: 4
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 2
        }
    };

    return (
        <Carousel responsive={responsive}>
            {movieList && movieList.map((movie, i) => {
                return (
                    <MovieCard key={i} movieData={movie} />
                )
            })}
        </Carousel>

    );
}

export default CarouselComponent;