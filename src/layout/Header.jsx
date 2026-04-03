import { useState } from "react";
import { Search, ShoppingCart, TextAlignJustify, Phone, Mail, UserRound } from 'lucide-react';
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { topBar } from "../mock/mockData";
import { Link } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className='font-montserrat'>
      <div className="hidden lg:flex text-white bg-detail-page flex-row items-center gap-10 justify-between font-semibold pt-3 px-5">
        <div className='flex flex-row gap-4 items-center text-xs cursor-pointer'>
          <p className='flex flex-row gap-2 items-center'><Phone />{topBar.phone}</p>
          <p className='flex flex-row gap-2 items-center'><Mail />{topBar.mail}</p>
        </div>
        <p className='text-md'>{topBar.promoText}</p>
        <div className='flex flex-row gap-3 items-center text-sm'>
          <p>Follow Us:</p>
          <a href={topBar.facebook} target="_blank" className="text-white pb-3 hover:text-shadow-indigo-200">
            <FaFacebookF />
          </a>
          <a href={topBar.instagram} target="_blank" className="text-white pb-3 hover:text-shadow-indigo-200">
            <FaInstagram />
          </a>
          <a href={topBar.twitter} target="_blank" className="text-white pb-3 hover:text-shadow-indigo-200">
            <FaTwitter />
          </a>
          <a href={topBar.youtube} target="_blank" className="text-white pb-3 hover:text-shadow-indigo-200">
            <FaYoutube />
          </a>
        </div>
      </div>

      <div className="flex justify-between items-center py-4 px-5">
        <h1 className="text-2xl font-bold pb-3">Bandage</h1>

        <nav className="hidden lg:flex text-custom-gray text-lg font-semibold justify-center items-center gap-6 cursor-pointer">
          <Link to="/" className="text-custom-gray! no-underline! pb-3">Home</Link>
          <Link to="/shop" className="text-custom-gray! no-underline! pb-3">Shop</Link>
          <Link to="/about" className="text-custom-gray! no-underline! pb-3">About</Link>
          <p>Blog</p>
          <Link to="/team" className="text-custom-gray! no-underline! pb-3">Team</Link>
          <Link to="/contact" className="text-custom-gray! no-underline! pb-3">Contact</Link>
        </nav>

        <p className='hidden lg:flex flex-row gap-1 text-sky-500 font-semibold pl-10 cursor-pointer'>
          <UserRound />Login / Register
        </p>

        <div className="flex gap-4 pb-3 cursor-pointer">
          <Search />
          <ShoppingCart />
          <TextAlignJustify onClick={() => setMenuOpen(!menuOpen)} />
        </div>
      </div>

      {menuOpen && (
        <nav className="flex flex-col items-center gap-6 text-custom-gray text-4xl lg:hidden pb-30">
          <Link to="/" className="text-custom-gray! no-underline! pb-3">Home</Link>
          <Link to="/shop" className="text-custom-gray! no-underline! pb-3">Shop</Link>
          <Link to="/about" className="text-custom-gray! no-underline! pb-3">About</Link>
          <p>Blog</p>
          <Link to="/team" className="text-custom-gray! no-underline! pb-3">Team</Link>
          <Link to="/contact" className="text-custom-gray! no-underline! pb-3">Contact</Link>
        </nav>
      )}
    </header>
  );
};

export default Header;