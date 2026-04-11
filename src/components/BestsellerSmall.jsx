import React from 'react';
import { useProductStore } from "../store/product";
import { Link } from "react-router-dom";

const BestsellerSmall = () => {
    const { productList } = useProductStore();
    const bestsellerList = productList.slice(0, 4);

    const createSlug = (name) => name.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '');

    return (
        <div className="font-montserrat flex flex-col items-center py-10 mt-30 px-4 lg:px-18! bg-light-gray">
            <h1 className="font-bold! text-detail-page!">BESTSELLER PRODUCTS</h1>
            <hr className='w-full border-gray-300 my-10' />
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-5 mt-10 w-full">
                {bestsellerList.map((product) => (
                    <Link 
                        key={product.id} 
                        to={`/shop/${product.gender === 'k' ? 'kadin' : 'erkek'}/${product.category_id}/${product.id}/${createSlug(product.name)}`}
                        className="no-underline! text-inherit!"
                    >
                        <div className="bg-white h-160 lg:h-120 group cursor-pointer transition-transform hover:-translate-y-2">
                            <img
                                src={product.images[0]?.url}
                                alt={product.name}
                                className="w-full h-3/4 object-cover"
                            />

                            <div className="p-4 items-start justify-start flex flex-col font-semibold">
                                <h3 className="font-bold! lg:text-xl! text-slate-800">{product.name}</h3>
                                <p className="text-gray-400 text-lg lg:text-md! line-clamp-1">
                                    {product.description}
                                </p>

                                <div className="flex justify-start gap-3 text-md mb-3">
                                    <span className="text-green-600 font-semibold">
                                        {product.price} ₺
                                    </span>
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default BestsellerSmall;