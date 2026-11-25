import ShopCard from '../components/ShopCard';
import BestsellerProducts from '../../product/components/BestsellerProducts';
import Container from '../../../layout/Container';
import Blog from '../../company/components/Blog';
import CarouselButtom from '../components/CarouselButtom';
import Carousel from '../components/Carousel';

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