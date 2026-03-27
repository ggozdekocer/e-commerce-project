import containerImg from "../assets/container-img.png";

const Container = ()=> {
    return(
        <>
        <div className="lg:hidden font-montserrat flex flex-col justify-center items-center gap-20 mt-25">
            <div className="flex flex-col justify-center items-center gap-3 text-center ">
                <h6 className="font-bold text-[#BDBDBD]">SUMMER 2020</h6>
                <p className="font-bold px-20 text-5xl">Part of the Neural Universe</p>
                <p className="font-light text-custom-gray px-28 text-xl">We know how large objects will act, but things on a small scale.</p>
            </div>
            <div className="flex flex-col justify-center items-center gap-6 font-bold">
                <button className="text-white bg-sky-500 border-2 border-sky-500 rounded-md px-10 py-3">BUY NOW</button>
                <button className="border-2 text-sky-500 border-sky-500 rounded-md px-10 py-3">Learn More</button>
            </div>
            <img src={containerImg}/>
        </div>

        <div className="hidden lg:flex font-montserrat flex-row justify-center items-center gap-20 px-20">
            <img 
            className="h-130"
            src={containerImg}/>
            <div className="flex flex-col justify-center items-start gap-4">
                <h6 className="font-bold text-[#BDBDBD]">SUMMER 2020</h6>
                <p className="font-bold text-5xl">Part of the Neural Universe</p>
                <p className="font-normal text-custom-gray text-lg pr-40">We know how large objects will act, but things on a small scale.</p>

                <div className="flex flex-row justify-center items-center gap-3 font-bold">
                    <button className="text-white bg-[#2DC071] border-2 border-[#2DC071] rounded-md px-6 py-2.5">BUY NOW</button>
                    <button className="border-2 text-[#2DC071] border-[#2DC071] rounded-md px-6 py-2.5">Learn More</button>
                </div>
            </div>
        </div>
        </>
    )
}

export default Container;