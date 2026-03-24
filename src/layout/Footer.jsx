import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = ()=> {
    return (
        <div className="mt-20">
            <div className="bg-light-gray p-12 flex flex-col gap-4 lg:flex-row lg:justify-between lg:py-8">
                <p className="font-bold text-3xl">Bandage</p>
                <div className="text-sky-500 flex flex-row gap-4 text-3xl">
                    <p><FaFacebook /></p>
                    <p><FaInstagram /></p>
                    <p><FaTwitter /></p>
                </div>
            </div>

            <div className="px-12 py-5 grid grid-cols-1 lg:grid-cols-6 gap-8 text-xl">

                <div>
                    <p className="font-bold">Company Info</p>
                    <ul className="list-none p-0 m-0 flex flex-col gap-2 text-custom-gray font-semibold">
                        <li>About Us</li>
                        <li>Carrier</li>
                        <li>We are hiring</li>
                        <li>Blog</li>
                    </ul>
                </div>

                <div>
                    <p className="font-bold">Legal</p>
                    <ul className="list-none p-0 m-0 flex flex-col gap-2 text-custom-gray font-semibold">
                        <li>About Us</li>
                        <li>Carrier</li>
                        <li>We are hiring</li>
                        <li>Blog</li>
                    </ul>
                </div>

                <div>
                    <p className="font-bold">Features</p>
                    <ul className="list-none p-0 m-0 flex flex-col gap-2 text-custom-gray font-semibold">
                        <li>Business Marketing</li>
                        <li>User Analytic</li>
                        <li>Live Chat</li>
                        <li>Unlimited Support</li>
                    </ul>
                </div>

                <div>
                    <p className="font-bold">Resources</p>
                    <ul className="list-none p-0 m-0 flex flex-col gap-2 text-custom-gray font-semibold">
                        <li>IOS & Android</li>
                        <li>Watch a Demo</li>
                        <li>Customers</li>
                        <li>API</li>
                    </ul>
                </div>

                <div className="lg:col-span-2">
                    <p className="font-bold">Get In Touch</p>
                    <div className="flex flex-col lg:flex-row gap-2 mt-2">
                        <input
                            type="email"
                            placeholder=" Your Email"
                            className="border border-gray-300 py-3 px-4 rounded-l-lg focus:outline-none flex-1"
                        />
                        <button className="bg-sky-500 text-white px-4 py-3 rounded-r-lg">
                            Subscribe
                        </button>
                    </div>
                    <p className="text-custom-gray text-lg mt-2">Lore imp sum dolor Amit</p>
                </div>

            </div>

            <div className="bg-light-gray p-8 text-custom-gray font-semibold text-lg text-center">
                <p>Made With Love By Finland All Right Reserved </p>
            </div>
        </div>
    )
}

export default Footer;