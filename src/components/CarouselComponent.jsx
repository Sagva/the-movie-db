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
            breakpoint: { max: 992, min: 795 },
            items: 4
        },
        tabletSmall: {
            breakpoint: { max: 795, min: 400 },
            items: 3
        },
        mobile: {
            breakpoint: { max: 400, min: 0 },
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