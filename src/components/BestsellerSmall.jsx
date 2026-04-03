const productCardImg = [
    {
        id: 1,
        img: "src/assets/bestseller-img.png",
        title: "Graphic Design",
        subtitle: "English Department",
        price: "$16.48",
        discountedPrice: "$6.48",
    },
    {
        id: 2,
        img: "src/assets/bestseller-img.png",
        title: "Graphic Design",
        subtitle: "English Department",
        price: "$16.48",
        discountedPrice: "$6.48",
    },
    {
        id: 3,
        img: "src/assets/bestseller-img.png",
        title: "Graphic Design",
        subtitle: "English Department",
        price: "$16.48",
        discountedPrice: "$6.48",
    },
    {
        id: 4,
        img: "src/assets/bestseller-img.png",
        title: "Graphic Design",
        subtitle: "English Department",
        price: "$16.48",
        discountedPrice: "$6.48",
    },
]

const BestsellerSmall = () => {
    return (
        <div className="font-montserrat flex flex-col items-center py-10 mt-30 px-4 lg:px-18! bg-light-gray">
            <h1 className="font-bold! text-detail-page!">BESTSELLER PRODUCTS</h1>
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-5 mt-10 w-full">
                {productCardImg.map((i) => (
                    <div key={i.id} className="bg-white h-160 lg:h-120">
                        <img
                            src={i.img}
                            alt={i.title}
                            className="w-full object-cover"
                        />

                        <div className="p-4 items-start justify-start flex flex-col font-semibold">
                            <h3 className="font-bold! lg:text-xl!">{i.title}</h3>
                            <p className="text-gray-400 text-lg lg:text-md!">
                                {i.subtitle}
                            </p>

                            <div className="flex justify-start gap-3 text-md mb-3">
                                <span className=" text-gray-400">
                                    {i.price}
                                </span>
                                <span className="text-green-600 font-semibold">
                                    {i.discountedPrice}
                                </span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default BestsellerSmall;