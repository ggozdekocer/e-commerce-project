import { FaAws, FaLyft, FaStripe, FaHooli, FaRedditAlien} from "react-icons/fa";

const Brands = ()=> {
    return (
        <>
            <div 
            className="bg-light-gray py-20 flex flex-col justify-center items-center text-custom-gray gap-3 text-9xl lg:flex-row lg:justify-between lg:px-18"
            >
                <FaHooli />
                <FaLyft />
                <FaStripe />
                <FaAws />
                <FaRedditAlien />
            </div>
        </>
    )
}

export default Brands;