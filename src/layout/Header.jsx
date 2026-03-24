import { Search, ShoppingCart, TextAlignJustify, Phone, Mail, UserRound } from 'lucide-react';
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const topBar = {
  phone: "(225) 555-0118",
  mail: "michelle.rivera@example.com",
  promoText: "Follow Us  and get a chance to win 80% off",
  instagram: "https://www.instagram.com",
  youtube: "https://www.youtube.com",
  facebook: "https://www.facebook.com",
  twitter: "https://www.twitter.com",
}


const Header = () => {
  return (
    <header className='font-montserrat'>
      <div className="hidden lg:flex text-white bg-[#252B42] flex-row items-center gap-10 justify-between font-semibold pt-3 px-5">
        <div className='flex flex-row gap-4 items-center text-xs cursor-pointer'>
          <p className='flex flex-row gap-2 items-center'><Phone />{topBar.phone}</p>
          <p className='flex flex-row gap-2 items-center'><Mail />{topBar.mail}</p>
        </div>
        <p className='text-md'>{topBar.promoText}</p>
        <div className='flex flex-row gap-3 items-center text-sm'>
          <p>Follow Us:</p>
          <a href={topBar.facebook} target="_blank" className="text-white pb-3 hover:text-shadow-indigo-200">
            <FaFacebookF /></a>

          <a href={topBar.instagram} target="_blank" className="text-white pb-3 hover:text-shadow-indigo-200">
            <FaInstagram /></a>

          <a href={topBar.twitter} target="_blank" className="text-white pb-3 hover:text-shadow-indigo-200">
            <FaTwitter /></a>

          <a href={topBar.youtube} target="_blank" className="text-white pb-3 hover:text-shadow-indigo-200">
            <FaYoutube /></a>
        </div>
      </div>
      <div className="flex justify-between items-center py-4 px-5">
            <h1 className="text-2xl font-bold pb-3">Bandage</h1>
            <nav className="hidden lg:flex text-custom-gray text-lg font-semibold justify-center items-center gap-6 cursor-pointer">
              <p>Home</p>
              <p>Shop</p>
              <p>About</p>
              <p>Blog</p>
              <p>Contact</p>
              <p>Pages</p>
            </nav>
            <p className='hidden lg:flex flex-row gap-1 text-sky-500 font-semibold pl-10 cursor-pointer'><UserRound />Login / Register</p>
            <div className="flex gap-4 pb-3 cursor-pointer">
                <Search />
                <ShoppingCart />
                <TextAlignJustify />
            </div>
      </div>
        <nav className="flex flex-col items-center gap-6 text-custom-gray text-4xl lg:hidden">
          <p>Home</p>
          <p>Product</p>
          <p>Pricing</p>
          <p>Contact</p>
        </nav>
    </header>
  );
};

export default Header;