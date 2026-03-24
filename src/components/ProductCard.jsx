const productCardImg = [
    {
        id: 1,
        img: "./src/assets/product-card.png",
        title: "Graphic Design",
        subtitle: "English Department",
        price: "$16.48",
        discountedPrice: "$6.48",
    },

    {
        id: 2,
        img: "./src/assets/product-card.png",
        title: "Graphic Design",
        subtitle: "English Department",
        price: "$16.48",
        discountedPrice: "$6.48",
    },

    {
        id: 3,
        img: "./src/assets/product-card.png",
        title: "Graphic Design",
        subtitle: "English Department",
        price: "$16.48",
        discountedPrice: "$6.48",
    },

    {
        id: 4,
        img: "./src/assets/product-card.png",
        title: "Graphic Design",
        subtitle: "English Department",
        price: "$16.48",
        discountedPrice: "$6.48",
    },

    {
        id: 5,
        img: "./src/assets/product-card.png",
        title: "Graphic Design",
        subtitle: "English Department",
        price: "$16.48",
        discountedPrice: "$6.48",
    },

    {
        id: 6,
        img: "./src/assets/product-card.png",
        title: "Graphic Design",
        subtitle: "English Department",
        price: "$16.48",
        discountedPrice: "$6.48",
    },

    {
        id: 7,
        img: "./src/assets/product-card.png",
        title: "Graphic Design",
        subtitle: "English Department",
        price: "$16.48",
        discountedPrice: "$6.48",
    },

    {
        id: 8,
        img: "./src/assets/product-card.png",
        title: "Graphic Design",
        subtitle: "English Department",
        price: "$16.48",
        discountedPrice: "$6.48",
    },
]


const ProductCard = () => {
    return (
        <div className="font-montserrat flex flex-col items-center mt-20 px-4 lg:px-20">
            <div className="text-center flex flex-col gap-2">
                <h3 className="text-custom-gray font-light">Featured Products</h3>
                <h1 className="font-extrabold px-20">BESTSELLER PRODUCTS</h1>
                <p className="px-20 text-custom-gray font-medium">Problems trying to resolve the conflict between </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mt-10 w-full">
                {productCardImg.map((i) => (
                    <div key={i.id} className="bg-white h-[680px]">
                        <img
                            src={i.img}
                            alt={i.title}
                            className="w-full object-cover"
                        />

                        <div className="p-4 text-center">
                            <h3 className="font-bold text-sm">{i.title}</h3>
                            <p className="text-gray-400 text-xs mb-2">
                                {i.subtitle}
                            </p>

                            <div className="flex justify-center gap-2 text-sm mb-3">
                                <span className="line-through text-gray-400">
                                    {i.price}
                                </span>
                                <span className="text-green-600 font-semibold">
                                    {i.discountedPrice}
                                </span>
                            </div>

                            <div className="flex justify-center gap-2">
                                <span className="w-3 h-3 rounded-full bg-blue-500"></span>
                                <span className="w-3 h-3 rounded-full bg-green-500"></span>
                                <span className="w-3 h-3 rounded-full bg-orange-500"></span>
                                <span className="w-3 h-3 rounded-full bg-gray-800"></span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ProductCard;