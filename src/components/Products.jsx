import React, { useState, useEffect } from 'react';
import { LayoutGrid, List, Loader2 } from 'lucide-react';
import { Link, useParams } from "react-router-dom";
import { useProductStore } from "../store/product";

const Products = () => {
    const { categoryId } = useParams();
    const [sortOption, setSortOption] = useState("");
    const [filterText, setFilterText] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 8;

    const { productList, fetchState, fetchProducts } = useProductStore();

    useEffect(() => {
        fetchProducts(categoryId, filterText, sortOption);
    }, [categoryId, sortOption, filterText, fetchProducts]); 

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentProducts = productList.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(productList.length / itemsPerPage);

    return (
        <div className='flex flex-col py-20'>
            <div className='flex flex-col items-center pb-18 font-bold text-custom-gray text-lg gap-3 px-18 lg:flex-row lg:justify-between'>
                <p className='pt-2'>Showing all {productList.length} results</p>

                <p className='flex flex-row gap-4 items-center'>
                    Views:
                    <span className='border p-2 rounded-md'><LayoutGrid /></span>
                    <span className='border p-2 rounded-md'><List /></span>
                </p>

                <div className='flex flex-row gap-2 px-18 items-center'>
                    <input 
                        type="text"
                        placeholder="Search..."
                        value={filterText}
                        onChange={(e) => setFilterText(e.target.value)}
                        className="border px-4 py-3 rounded-md w-40 text-sm font-normal"
                    />

                    <select
                        value={sortOption}
                        onChange={(e) => setSortOption(e.target.value)}
                        className='w-40 border px-2 py-3 rounded-md text-sm cursor-pointer'
                    >
                        <option value="">Sort by</option>
                        <option value="price:asc">Price: Low to High</option>
                        <option value="price:desc">Price: High to Low</option>
                        <option value="rating:asc">Rating: Low to High</option>
                        <option value="rating:desc">Rating: High to Low</option>
                    </select>

                    <button className='border px-8 py-3 rounded-md bg-sky-500 text-white'>
                        Filter
                    </button>
                </div>
            </div>

            <div className="relative min-h-100">
                {fetchState === "FETCHING" && (
                    <div className="absolute inset-0 bg-white/50 z-10 flex flex-col items-center justify-start pt-20 gap-4">
                        <Loader2 className="animate-spin text-sky-500" size={48} />
                        <p className="text-custom-gray font-bold text-xl">Yükleniyor...</p>
                    </div>
                )}

                <div className={`grid grid-cols-1 lg:grid-cols-4 gap-3 w-full justify-items-center px-10 transition-opacity ${fetchState === "FETCHING" ? 'opacity-30' : 'opacity-100'}`}>
                    {currentProducts.map((product) => (
                        <Link to={`/product/${product.id}`} key={product.id} className="no-underline! text-inherit!">
                            <div className="bg-white h-153.75 flex flex-col cursor-pointer hover:shadow-md transition-all">
                                <img 
                                    src={product.images[0]?.url} 
                                    alt={product.name} 
                                    className="w-full object-cover h-105"
                                />

                                <div className="pt-4 text-center flex-1 flex flex-col justify-between">
                                    <div>
                                        <h3 className="font-bold text-sm px-2 line-clamp-1">{product.name}</h3>
                                        <p className="text-gray-400 text-xs mb-2 px-2 line-clamp-1">{product.description}</p>
                                        <div className="flex justify-center gap-2 text-sm">
                                            <span className="text-green-600 font-bold">{product.price} ₺</span>
                                        </div>
                                        <div className="flex justify-center gap-2 mt-6">
                                            <span className="w-3 h-3 rounded-full bg-blue-500"></span>
                                            <span className="w-3 h-3 rounded-full bg-green-500"></span>
                                            <span className="w-3 h-3 rounded-full bg-orange-500"></span>
                                            <span className="w-3 h-3 rounded-full bg-gray-800"></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>

            <div className="flex justify-center mt-10">
                <div className="flex border rounded-lg overflow-hidden">
                    <button
                        onClick={() => setCurrentPage(1)}
                        disabled={currentPage === 1}
                        className="px-4 py-3 border bg-light-gray disabled:opacity-50"
                    >
                        First
                    </button>

                    {Array.from({ length: totalPages }, (_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentPage(index + 1)}
                            className={`px-4 py-3 border 
                            ${currentPage === index + 1 ? "bg-sky-500 text-white" : "bg-light-gray"}`}
                        >
                            {index + 1}
                        </button>
                    ))}

                    <button
                        onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                        disabled={currentPage === totalPages}
                        className="px-4 py-3 border bg-light-gray disabled:opacity-50"
                    >
                        Next
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Products;