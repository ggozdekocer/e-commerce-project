import ShopCard from '../components/ShopCard';
import ProductCard from '../components/ProductCard';
import Container from '../layout/Container';
import Blog from '../layout/Blog';
import CarouselButtom from '../layout/CarouselButtom';
import Carousel from '../layout/Carousel';

const HomePage = ()=>{
    return (
        <>
            <Carousel />
            <ShopCard />
            <ProductCard />
            <CarouselButtom />
            <Container />
            <Blog />
        </>
    )
}

export default HomePage;