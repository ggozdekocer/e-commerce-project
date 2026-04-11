import React, { useEffect } from 'react';
import { useParams, useHistory } from "react-router-dom";
import { ChevronRight, Heart, ShoppingCart, Eye, Loader2, ChevronLeft } from 'lucide-react';
import ProductCarousel from './ProductCarousel';
import { useProductStore } from "../store/product";
import { useCartStore } from "../store/cart";

const ProductDetail = () => {
    const { productId } = useParams();
    const history = useHistory();
    const { currentProduct, fetchState, fetchProductDetail } = useProductStore();
    const addToCart = useCartStore(state => state.addToCart);

    useEffect(() => {
        fetchProductDetail(productId);
    }, [productId, fetchProductDetail]);

    if (fetchState === "FETCHING") {
        return (
            <div className="flex flex-col items-center justify-center min-h-screen gap-4">
                <Loader2 className="animate-spin text-sky-500" size={48} />
                <p className="text-xl font-bold text-custom-gray">Yükleniyor...</p>
            </div>
        );
    }

    if (!currentProduct) return null;

    return (
        <>
            <div className='flex flex-col justify-center items-center pt-12 mt-5 gap-5 bg-light-gray pb-12 lg:items-start lg:px-12'>
                <div className='flex flex-row justify-between w-85 lg:w-290'>
                    <button 
                        onClick={() => history.goBack()} 
                        className="flex items-center hover:text-sky-700 transition-colors pb-2 text-xl!"
                    >
                        <ChevronLeft /> Back
                    </button>
                    <p className='flex flex-row text-xl font-bold items-center'>
                        Home<span className='text-custom-gray pt-1.5'><ChevronRight /></span>
                        <span className='text-custom-gray'>Shop</span>
                    </p>
                </div>

                <div className='lg:flex lg:flex-row lg:justify-between w-full'>
                    <div>
                        <ProductCarousel images={currentProduct.images} />
                    </div>

                    <div className='flex flex-col justify-start px-14 pt-10 gap-2 lg:w-160 lg:pt-0'>
                        <p className='font-normal text-2xl'>{currentProduct.name}</p>
                        <h6 className='text-lg text-custom-gray pb-3'>{currentProduct.rating} / 5 Rating</h6>
                        <h3 className='font-bold! text-2xl!'>{currentProduct.price} ₺</h3>
                        <h6 className='flex gap-2 text-custom-gray pb-4'>
                            Availability :
                            <span className={currentProduct.stock > 0 ? 'text-sky-500' : 'text-red-500'}>
                                {currentProduct.stock > 0 ? 'In Stock' : 'Out of Stock'}
                            </span>
                        </h6>
                        <p>{currentProduct.description}</p>
                        <div className="flex items-center gap-2 pb-3">
                            <span className="w-6 h-6 rounded-full bg-blue-500"></span>
                            <span className="w-6 h-6 rounded-full bg-green-500"></span>
                            <span className="w-6 h-6 rounded-full bg-orange-500"></span>
                            <span className="w-6 h-6 rounded-full bg-gray-800"></span>
                        </div>
                        <div className='flex flex-row items-center justify-content gap-2'>
                            <button className='border-2 rounded-lg! px-3.5 py-2.5 mb-3 bg-sky-500 text-white font-semibold text-md! hover:bg-sky-600'>
                                Select Options
                            </button>
                            <p className='border rounded-full p-2.5 cursor-pointer hover:bg-gray-100'><Heart /></p>
                            <p 
                                className='border rounded-full p-2.5 cursor-pointer hover:bg-gray-100'
                                onClick={() => addToCart(currentProduct)}
                            >
                                <ShoppingCart />
                            </p>
                            <p className='border rounded-full p-2.5 cursor-pointer hover:bg-gray-100'><Eye /></p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='flex flex-col items-center justify-center mt-12 px-10'>
                <nav className='flex flex-row gap-2 list-none text-custom-gray mb-4 lg:gap-15!'>
                    <li className='underline cursor-pointer'>Description</li>
                    <li className='font-semibold cursor-pointer'>Additional Information</li>
                    <li className='font-semibold flex flex-row gap-1 cursor-pointer'>Reviews<span className='text-[#23856D]'>(0)</span></li>
                </nav>
                <div className='flex flex-col gap-5 lg:grid-cols-3 lg:grid lg:pt-10 mb-20'>
                    <div className="relative w-full lg:col-span-1">
                        <div className="absolute -bottom-4 -right-4 w-full h-full bg-gray-100 rounded-lg"></div>
                        <img 
                            src={currentProduct.images[0]?.url}
                            alt={currentProduct.name}
                            className="relative w-full rounded-lg shadow-sm lg:h-full object-cover"
                        />
                    </div>
                    <div className='flex flex-col gap-2.5 text-custom-gray font-semibold px-1 lg:col-span-1'>
                        <h3 className='text-detail-page font-bold! pb-3'>Product Specification</h3>
                        <p>{currentProduct.description}</p>
                        <p>Stock Amount: {currentProduct.stock}</p>
                        <p>Sales Count: {currentProduct.sell_count}</p>
                    </div>
                    <div className='flex flex-col justify-start gap-2 text-custom-gray font-semibold lg:col-span-1'>
                        <p className='text-detail-page font-bold! text-lg!'>Features</p>
                        <li className='list-none flex flex-row gap-1 items-center'><span><ChevronRight /></span> High quality materials</li>
                        <li className='list-none flex flex-row gap-1 items-center'><span><ChevronRight /></span> Durable construction</li>
                        <li className='list-none flex flex-row gap-1 items-center'><span><ChevronRight /></span> Modern design pattern</li>
                        <li className='list-none flex flex-row gap-1 items-center'><span><ChevronRight /></span> Versatile usage</li>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProductDetail;