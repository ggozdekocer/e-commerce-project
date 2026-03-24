const shopCardImg = [
    {
        id: 1,
        img: "./src/assets/shop-card.png",
        btnText: "MEN"
    },

    {
        id: 2,
        img: "./src/assets/shop-card-2.png",
        btnText: "WOMEN"
    }
]

const shopSmImg = [
    {
        id: 1,
        img: "./src/assets/shop-card-sm2.png",
        btnText: "ACCESSORIES"
    },
    {
        id: 2,
        img: "./src/assets/shop-card-sm.png",
        btnText: "KIDS"
    }
]


const ShopCard = () => {
    return (
        <div className="flex flex-col p-10 items-center bg-[#FAFAFA]">
            <h1 className="text-2xl pb-3 pt-20 font-bold">EDITOR’S PICK</h1>
            <p className="text-m px-20 font-light text-center mb-8">
                Problems trying to resolve the conflict between
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 w-full max-w-6xl pt-10">

                <div
                    className="relative h-150 bg-cover bg-center lg:col-span-2"
                    style={{ backgroundImage: `url(${shopCardImg[0].img})` }}
                >
                    <button className="absolute bottom-6 left-6 bg-white px-15 py-2 font-bold">
                        {shopCardImg[0].btnText}
                    </button>
                </div>

                <div
                    className="relative h-150 bg-cover bg-center lg:col-span-1"
                    style={{ backgroundImage: `url(${shopCardImg[1].img})` }}
                >
                    <button className="absolute bottom-6 left-6 bg-white px-15 py-2 font-bold">
                        {shopCardImg[1].btnText}
                    </button>
                </div>

                <div className="flex flex-col gap-4 lg:col-span-1">
                    {shopSmImg.map((i) => (
                        <div
                            key={i.id}
                            className="relative h-73 bg-cover bg-center"
                            style={{ backgroundImage: `url(${i.img})` }}
                        >
                            <button className="absolute bottom-6 left-4 bg-white px-10 py-2 font-bold">
                                {i.btnText}
                            </button>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default ShopCard;