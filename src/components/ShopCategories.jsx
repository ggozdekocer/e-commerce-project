import { ChevronRight } from 'lucide-react';
import categoryImg from "../assets/col-md-4.png";

const categories = [
    {
        id: 1,
        text: "CLOTHS",
        count: "5",
        img: categoryImg
    },
    {
        id: 2,
        text: "CLOTHS",
        count: "5",
        img: categoryImg
    },
    {
        id: 3,
        text: "CLOTHS",
        count: "5",
        img: categoryImg
    },
    {
        id: 4,
        text: "CLOTHS",
        count: "5",
        img: categoryImg
    },
    {
        id: 5,
        text: "CLOTHS",
        count: "5",
        img: categoryImg
    },
]

const ShopCategories = () => {
    return (
        <div className='bg-light-gray py-15 flex flex-col gap-3'>
            <div className='flex flex-col items-center px-22 bg-light-gray font-bold text-2xl gap-5 lg:flex-row lg:justify-between lg:text-3xl'>
                <p>Shop</p>
                <p className='flex flex-row gap-2'>Home <span className='flex flex-row gap-2 text-muted-color'><ChevronRight className='mt-2'/>Shop</span></p>
            </div>
            <div className='flex flex-col items-center gap-3 px-18 lg:flex-row lg:justify-between'>
                {categories.map((item) => (
                    <div key={item.id} className="relative text-white text-center">
                        <img src={item.img} alt={item.text} />
                        <div className="absolute inset-0 flex flex-col justify-center items-center">
                            <h5 className="font-bold">{item.text}</h5>
                            <p>{item.count} Items</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ShopCategories;