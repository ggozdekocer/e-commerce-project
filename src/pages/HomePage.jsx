import ShopCard from '../components/ShopCard';
import BestsellerProducts from '../components/BestsellerProducts';
import Container from '../layout/Container';
import Blog from '../layout/Blog';
import CarouselButtom from '../layout/CarouselButtom';
import Carousel from '../layout/Carousel';

const HomePage = ()=>{
    return (
        <>
            <Carousel />
            <ShopCard />
            <BestsellerProducts />
            <CarouselButtom />
            <Container />
            <Blog />
        </>
    )
}

export default HomePage;