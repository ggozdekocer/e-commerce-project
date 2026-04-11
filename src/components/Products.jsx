import React, { useState, useEffect } from 'react';
import { LayoutGrid, List, Loader2 } from 'lucide-react';
import { Link, useParams } from "react-router-dom";
import { useProductStore } from "../store/product";

const Products = () => {
    const { categoryId } = useParams();
    const [sortOption, setSortOption] = useState("");
    const [filterText, setFilterText] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 25;

    const { productList, fetchState, fetchProducts, total } = useProductStore();

    useEffect(() => {
        fetchProducts(categoryId, filterText, sortOption, currentPage, itemsPerPage);
    }, [categoryId, sortOption, filterText, currentPage]);

    const createSlug = (name) => name.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '');

    const totalPages = Math.ceil(total / itemsPerPage);

    const getPaginationItems = () => {
        const pages = [];
        if (totalPages <= 7) {
            for (let i = 1; i <= totalPages; i++) pages.push(i);
        } else {
            if (currentPage <= 4) {
                pages.push(1, 2, 3, 4, 5, '...', totalPages);
            } else if (currentPage > totalPages - 4) {
                pages.push(1, '...', totalPages - 4, totalPages - 3, totalPages - 2, totalPages - 1, totalPages);
            } else {
                pages.push(1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages);
            }
        }
        return pages;
    };

    return (
        <div className='flex flex-col py-20'>
            <div className='flex flex-col items-center pb-18 font-bold text-custom-gray text-lg gap-3 px-18 lg:flex-row lg:justify-between'>
                <p className='pt-2'>Showing all {total} results</p>

                <p className='flex flex-row gap-4 items-center'>
                    Views:
                    <span className='border p-2 rounded-md cursor-pointer hover:bg-gray-100 transition-colors'><LayoutGrid /></span>
                    <span className='border p-2 rounded-md cursor-pointer hover:bg-gray-100 transition-colors'><List /></span>
                </p>

                <div className='flex flex-row gap-2 px-20 items-center'>
                    <input 
                        type="text"
                        placeholder="Search..."
                        value={filterText}
                        onChange={(e) => {
                            setFilterText(e.target.value);
                            setCurrentPage(1);
                        }}
                        className="border px-4 py-3 rounded-md w-30 text-sm font-normal focus:outline-none focus:ring-2 focus:ring-sky-500"
                    />

                    <select
                        value={sortOption}
                        onChange={(e) => {
                            setSortOption(e.target.value);
                            setCurrentPage(1);
                        }}
                        className='w-30 border px-2 py-3 rounded-md text-sm cursor-pointer focus:outline-none'
                    >
                        <option value="">Sort by</option>
                        <option value="price:asc">Price: Low to High</option>
                        <option value="price:desc">Price: High to Low</option>
                        <option value="rating:asc">Rating: Low to High</option>
                        <option value="rating:desc">Rating: High to Low</option>
                    </select>

                    <button className='border px-8 py-3 rounded-md bg-sky-500 text-white hover:bg-sky-600 transition-colors font-bold'>
                        Filter
                    </button>
                </div>
            </div>

            <div className="relative min-h-100">
                {fetchState === "FETCHING" && (
                    <div className="absolute inset-0 bg-white/50 z-20 flex flex-col items-center justify-start pt-20 gap-4">
                        <Loader2 className="animate-spin text-sky-500" size={48} />
                        <p className="text-custom-gray font-bold text-xl">Yükleniyor...</p>
                    </div>
                )}

                <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full justify-items-center px-10 transition-opacity duration-300 ${fetchState === "FETCHING" ? 'opacity-30' : 'opacity-100'}`}>
                    {productList.map((product) => (
                        <Link 
                            to={`/shop/${product.gender === 'k' ? 'kadin' : 'erkek'}/${product.category_id}/${product.id}/${createSlug(product.name)}`} 
                            key={product.id} 
                            className="no-underline! text-inherit! block w-full"
                        >
                            <div className="bg-white flex flex-col cursor-pointer transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl group border border-transparent hover:border-gray-100 rounded-sm">
                                <div className="overflow-hidden relative">
                                    <img 
                                        src={product.images[0]?.url} 
                                        alt={product.name} 
                                        className="w-full object-cover h-105 transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                                </div>

                                <div className="pt-6 pb-8 text-center flex-1 flex flex-col justify-between px-4">
                                    <div>
                                        <h3 className="font-bold text-base line-clamp-1 mb-2 group-hover:text-sky-500 transition-colors text-slate-800 no-underline!">{product.name}</h3>
                                        <p className="text-custom-gray text-sm mb-3 line-clamp-1 font-medium no-underline!">{product.description}</p>
                                        
                                        <div className="flex justify-center gap-2 text-base mt-2">
                                            <span className="text-green-700 font-bold">{product.price} ₺</span>
                                        </div>

                                        <div className="flex justify-center gap-2 mt-4">
                                            <span className="w-4 h-4 rounded-full bg-blue-500 hover:scale-125 transition-transform cursor-pointer"></span>
                                            <span className="w-4 h-4 rounded-full bg-green-500 hover:scale-125 transition-transform cursor-pointer"></span>
                                            <span className="w-4 h-4 rounded-full bg-orange-500 hover:scale-125 transition-transform cursor-pointer"></span>
                                            <span className="w-4 h-4 rounded-full bg-gray-800 hover:scale-125 transition-transform cursor-pointer"></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>

            {totalPages > 1 && (
                <div className="flex justify-center mt-16">
                    <div className="flex border rounded-lg overflow-hidden shadow-sm">
                        <button
                            onClick={() => { setCurrentPage(1); window.scrollTo(0, 0); }}
                            disabled={currentPage === 1}
                            className="px-4 py-3 border-r text-sky-500 bg-white hover:bg-gray-50 disabled:bg-sky-100 disabled:text-sky-200 font-bold transition-colors"
                        >
                            First
                        </button>

                        {getPaginationItems().map((page, index) => (
                            <button
                                key={index}
                                onClick={() => {
                                    if (page !== '...') {
                                        setCurrentPage(page);
                                        window.scrollTo(0, 0);
                                    }
                                }}
                                disabled={page === '...'}
                                className={`px-4 py-3 border-r font-bold transition-all
                                ${currentPage === page ? "bg-sky-500 text-white" : "bg-white text-sky-500 hover:bg-sky-50"}
                                ${page === '...' ? "cursor-default text-gray-400! bg-gray-50" : "cursor-pointer"}`}
                            >
                                {page}
                            </button>
                        ))}

                        <button
                            onClick={() => { setCurrentPage((prev) => Math.min(prev + 1, totalPages)); window.scrollTo(0, 0); }}
                            disabled={currentPage === totalPages}
                            className="px-4 py-3 bg-white text-sky-500 hover:bg-gray-50 disabled:bg-sky-100 disabled:text-sky-200 font-bold transition-colors"
                        >
                            Next
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Products;