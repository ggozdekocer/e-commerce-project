import { useState } from 'react';
import { LayoutGrid, List } from 'lucide-react';
import productImg1 from "../assets/product-card.png";
import productImg2 from "../assets/product-card-2.png";
import productImg3 from "../assets/product-card-3.png";

const productCard = [
    { id: 1, img: productImg1, title: "Graphic Design", subtitle: "English Department", price: "$16.48", discountedPrice: "$6.48" },
    { id: 2, img: productImg1, title: "Graphic Design", subtitle: "English Department", price: "$16.48", discountedPrice: "$6.48" },
    { id: 3, img: productImg1, title: "Graphic Design", subtitle: "English Department", price: "$16.48", discountedPrice: "$6.48" },
    { id: 4, img: productImg1, title: "Graphic Design", subtitle: "English Department", price: "$16.48", discountedPrice: "$6.48" },
    { id: 5, img: productImg1, title: "Graphic Design", subtitle: "English Department", price: "$16.48", discountedPrice: "$6.48" },
    { id: 6, img: productImg1, title: "Graphic Design", subtitle: "English Department", price: "$16.48", discountedPrice: "$6.48" },
    { id: 7, img: productImg1, title: "Graphic Design", subtitle: "English Department", price: "$16.48", discountedPrice: "$6.48" },
    { id: 8, img: productImg1, title: "Graphic Design", subtitle: "English Department", price: "$16.48", discountedPrice: "$6.48" },
    { id: 9, img: productImg2, title: "Graphic Design", subtitle: "English Department", price: "$16.48", discountedPrice: "$6.48" },
    { id: 10, img: productImg2, title: "Graphic Design", subtitle: "English Department", price: "$16.48", discountedPrice: "$6.48" },
    { id: 11, img: productImg2, title: "Graphic Design", subtitle: "English Department", price: "$16.48", discountedPrice: "$6.48" },
    { id: 12, img: productImg2, title: "Graphic Design", subtitle: "English Department", price: "$16.48", discountedPrice: "$6.48" },
    { id: 13, img: productImg2, title: "Graphic Design", subtitle: "English Department", price: "$16.48", discountedPrice: "$6.48" },
    { id: 14, img: productImg2, title: "Graphic Design", subtitle: "English Department", price: "$16.48", discountedPrice: "$6.48" },
    { id: 15, img: productImg2, title: "Graphic Design", subtitle: "English Department", price: "$16.48", discountedPrice: "$6.48" },
    { id: 16, img: productImg2, title: "Graphic Design", subtitle: "English Department", price: "$16.48", discountedPrice: "$6.48" },
    { id: 17, img: productImg3, title: "Graphic Design", subtitle: "English Department", price: "$16.48", discountedPrice: "$6.48" },
    { id: 18, img: productImg3, title: "Graphic Design", subtitle: "English Department", price: "$16.48", discountedPrice: "$6.48" },
    { id: 19, img: productImg3, title: "Graphic Design", subtitle: "English Department", price: "$16.48", discountedPrice: "$6.48" },
    { id: 20, img: productImg3, title: "Graphic Design", subtitle: "English Department", price: "$16.48", discountedPrice: "$6.48" },
    { id: 21, img: productImg3, title: "Graphic Design", subtitle: "English Department", price: "$16.48", discountedPrice: "$6.48" },
    { id: 22, img: productImg3, title: "Graphic Design", subtitle: "English Department", price: "$16.48", discountedPrice: "$6.48" },
    { id: 23, img: productImg3, title: "Graphic Design", subtitle: "English Department", price: "$16.48", discountedPrice: "$6.48" },
    { id: 24, img: productImg3, title: "Graphic Design", subtitle: "English Department", price: "$16.48", discountedPrice: "$6.48" },
];

const Products = () => {
    const [sortOption, setSortOption] = useState("popularity");
    const [currentPage, setCurrentPage] = useState(1);

    const itemsPerPage = 8;

    const handleSortChange = (e) => {
        setSortOption(e.target.value);
    };

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentProducts = productCard.slice(indexOfFirstItem, indexOfLastItem);

    const totalPages = Math.ceil(productCard.length / itemsPerPage);

    return (
        <div className='flex flex-col py-20'>
            <div className='flex flex-col items-center pb-18 font-bold text-custom-gray text-lg gap-3 px-18 lg:flex-row lg:justify-between'>
                <p className='pt-2'>Showing all {productCard.length} results</p>

                <p className='flex flex-row gap-4 items-center'>
                    Views:
                    <span className='border p-2 rounded-md'>
                        <LayoutGrid />
                    </span>
                    <span className='border p-2 rounded-md'>
                        <List />
                    </span>
                </p>

                <div className='flex flex-row gap-2 px-18'>
                    <select
                        value={sortOption}
                        onChange={handleSortChange}
                        className='w-40 border px-2 py-3 rounded-md'
                    >
                        <option value="popularity">Popularity</option>
                        <option value="newest">Newest</option>
                        <option value="price-low">Price: Low to High</option>
                        <option value="price-high">Price: High to Low</option>
                    </select>

                    <button className='border px-8 rounded-md bg-sky-500 text-white'>
                        Filter
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-3 w-full justify-items-center px-10">
                {currentProducts.map((i) => (
                    <div key={i.id} className="bg-white h-153.75 flex flex-col">
                        <img src={i.img} alt={i.title} className="w-full object-cover h-105"/>

                        <div className="pt-4 text-center flex-1 flex flex-col justify-between">
                            <div>
                                <h3 className="font-bold text-sm">{i.title}</h3>
                                <p className="text-gray-400 text-xs mb-2">{i.subtitle}</p>

                                <div className="flex justify-center gap-2 text-sm">
                                    <span className="line-through text-gray-400">{i.price}</span>
                                    <span className="text-green-600 font-semibold">{i.discountedPrice}</span>
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
                ))}
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
                            ${currentPage === index + 1
                                    ? "bg-sky-500 text-white"
                                    : "bg-light-gray"}`}
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