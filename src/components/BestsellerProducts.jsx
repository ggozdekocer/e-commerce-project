import React from 'react';
import { useProductStore } from "../store/product";
import { Link } from "react-router-dom";

const BestsellerProducts = () => {
    const { productList } = useProductStore();
    const bestsellerList = productList.slice(0, 8);

    const createSlug = (name) => name.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '');

    return (
        <div className="font-montserrat flex flex-col items-center mt-20 px-4 lg:px-20 mb-10">
            <div className="text-center flex flex-col gap-2">
                <h3 className="text-custom-gray font-light">Featured Products</h3>
                <h1 className="font-extrabold px-20 text-2xl">BESTSELLER PRODUCTS</h1>
                <p className="px-20 text-custom-gray font-medium text-sm">Problems trying to resolve the conflict between </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mt-10 w-full">
                {bestsellerList.map((product) => (
                    <Link 
                        key={product.id} 
                        to={`/shop/${product.gender === 'k' ? 'kadin' : 'erkek'}/${product.category_id}/${product.id}/${createSlug(product.name)}`}
                        className="no-underline! text-inherit! block"
                    >
                        <div className="bg-white h-150 group cursor-pointer transition-all hover:shadow-lg">
                            <img
                                src={product.images[0]?.url}
                                alt={product.name}
                                className="w-full h-107.5 object-cover"
                            />

                            <div className="p-4 text-center">
                                <h3 className="font-bold text-sm text-slate-800 line-clamp-1">{product.name}</h3>
                                <p className="text-gray-400 text-xs mb-2 line-clamp-1">
                                    {product.description}
                                </p>

                                <div className="flex justify-center gap-2 text-sm mb-3">
                                    <span className="text-green-600 font-semibold">
                                        {product.price} ₺
                                    </span>
                                </div>

                                <div className="flex justify-center gap-2">
                                    <span className="w-3 h-3 rounded-full bg-blue-500 transition-transform hover:scale-125"></span>
                                    <span className="w-3 h-3 rounded-full bg-green-500 transition-transform hover:scale-125"></span>
                                    <span className="w-3 h-3 rounded-full bg-orange-500 transition-transform hover:scale-125"></span>
                                    <span className="w-3 h-3 rounded-full bg-gray-800 transition-transform hover:scale-125"></span>
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default BestsellerProducts;