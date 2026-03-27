import { ChevronRight, AlarmClock, ChartArea } from 'lucide-react';
import blogImg from "../assets/blog-item.png";

const blogItems = [
    {
        id: 1,
        img: blogImg,
        categories1: "Google",
        categories2: "Trending",
        categories3: "New",
        title: "Loudest à la Madison #1 (L'integral)",
        description: "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
        date: "22 April 2021",
        comment: "10",
    },
    {
        id: 2,
        img: blogImg,
        categories1: "Google",
        categories2: "Trending",
        categories3: "New",
        title: "Loudest à la Madison #1 (L'integral)",
        description: "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
        date: "22 April 2021",
        comment: "10",
    },
    {
        id: 3,
        img: blogImg,
        categories1: "Google",
        categories2: "Trending",
        categories3: "New",
        title: "Loudest à la Madison #1 (L'integral)",
        description: "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
        date: "22 April 2021",
        comment: "10",
    }
]

const Blog = () => {
    return (
        <div className="font-montressat flex flex-col justify-center items-center mt-30 px-12 lg:px-20">
            <div className="flex flex-col justify-center items-center gap-1 mb-10 text-center lg:py-18">
                <p className="text-sky-500 text-2xl font-bold">Practice Advice</p>
                <p className="text-6xl font-bold">Featured Products</p>
                <p className="lg:hidden text-custom-gray text-xl font-normal">
                    Problems trying to resolve the conflict between the two major
                </p>
                <p className="hidden lg:flex text-custom-gray text-xl font-normal pt-6 px-40">
                    Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics
                </p>
                <p className="text-5xl font-extralight text-pink-400 lg:hidden">-</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {blogItems.map((item) => (
                    <div key={item.id} className='border-custom-gray shadow-xl rounded-sm'>
                        <img className='w-full' src={item.img} alt={item.title} />

                        <div className="flex flex-row justify-start items-center gap-4 text-md pt-2 px-3">
                            <p className="text-sky-500">{item.categories1}</p>
                            <p className="text-custom-gray">{item.categories2}</p>
                            <p className="text-custom-gray">{item.categories3}</p>
                        </div>

                        <p className="text-2xl px-3">{item.title}</p>
                        <p className="text-custom-gray font-semibold pt-2 px-3">
                            {item.description}
                        </p>

                        <div className="flex flex-row gap-5 pt-3 px-3">
                            <p className='flex flex-row gap-2'>
                                <span className='text-sky-500'><AlarmClock /></span>
                                {item.date}
                            </p>
                            <p className='flex flex-row gap-2'>
                                <span className='text-green-700'><ChartArea /></span>
                                {item.comment} 
                                <span className='hidden lg:flex'>comments</span>
                            </p>
                        </div>

                        <p className="flex flex-row gap-2 text-custom-gray justify-start items-center font-bold text-2xl py-3 px-3">
                            Learn More 
                            <span className="text-sky-500">
                                <ChevronRight />
                            </span>
                        </p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Blog;