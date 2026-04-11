import React from 'react';
import { ChevronRight } from 'lucide-react';
import { Link } from "react-router-dom";
import { useProductStore } from "../store/product";

const ShopCategories = () => {
    const { categories } = useProductStore();

    const topCategories = [...categories]
        .sort((a, b) => b.rating - a.rating)
        .slice(0, 5);

    return (
        <div className='bg-light-gray py-15 flex flex-col gap-3'>
            <div className='flex flex-col items-center px-22 bg-light-gray font-bold text-2xl gap-5 lg:flex-row lg:justify-between lg:text-3xl'>
                <p>Shop</p>
                <p className='flex flex-row gap-2'>
                    Home 
                    <span className='flex flex-row gap-2 text-muted-color'>
                        <ChevronRight className='mt-2'/>Shop
                    </span>
                </p>
            </div>
            
            <div className='flex flex-col items-center gap-3 px-18 lg:flex-row lg:justify-between'>
                {topCategories.map((item) => (
                    <Link 
                        key={item.id} 
                        to={`/shop/${item.gender === 'k' ? 'kadin' : 'erkek'}/${item.id}`}
                        className="relative text-white text-center group cursor-pointer overflow-hidden transition-all w-full lg:w-1/5 h-75"
                    >
                        <img 
                            src={item.img} 
                            alt={item.title} 
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 flex flex-col justify-center items-center bg-black/25 group-hover:bg-black/40 transition-colors">
                            <h5 className="font-bold text-white uppercase tracking-wider">{item.title}</h5>
                            <p className="text-white text-sm">Rating: {item.rating}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default ShopCategories;