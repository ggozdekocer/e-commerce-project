import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Contact = ()=> {
    return (
        <>
            <div className="flex flex-col justfiy-center px-12 py-50 gap-14 lg:px-70">
                <p className="text-5xl font-bold text-center text-detail-page">Get answers to all your questions.</p>
                <p className="text-3xl text-center text-custom-gray font-light lg:px-10">Problems trying to resolve the conflict between the two major realms of Classical physics: </p>
                <button className="bg-sky-500 py-3 rounded-lg! mx-3 text-md! text-white lg:mx-40! lg:text-xl!">CONTACT OUR COMPANY</button>
                <div className="text-muted-color flex flex-row gap-4 text-4xl justify-center lg:text-5xl">
                    <p><FaTwitter /></p>
                    <p><FaFacebook /></p>
                    <p><FaInstagram /></p>
                    <p><FaLinkedin /></p>
                </div>
            </div>
        </>
    )
}

export default Contact;