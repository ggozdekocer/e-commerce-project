import { useState, useEffect } from "react";
import { Search, ShoppingCart, TextAlignJustify, Phone, Mail, UserRound, ChevronDown } from 'lucide-react';
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { topBar } from "../mock/mockData";
import { Link } from "react-router-dom";
import Gravatar from "react-gravatar";
import { useClientStore } from "../store/client";
import { useProductStore } from "../store/product";
import axiosInstance from "../api/axios";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);

  const user = useClientStore((state) => state.user);
  const setUser = useClientStore((state) => state.setUser);
  
  const { categories, fetchCategories } = useProductStore();

  useEffect(() => {
    fetchCategories();
  }, []);

  const femaleCategories = categories.filter(cat => cat.gender === "k");
  const maleCategories = categories.filter(cat => cat.gender === "e");

  const logout = () => {
    setUser(null);
    localStorage.removeItem("token");
    sessionStorage.removeItem("token");
    delete axiosInstance.defaults.headers.common["Authorization"];
  };

  return (
    <header className='font-montserrat relative z-50'>
      <div className="hidden lg:flex text-white bg-detail-page flex-row items-center gap-10 justify-between font-semibold pt-3 px-5">
        <div className='flex flex-row gap-4 items-center text-xs cursor-pointer'>
          <p className='flex flex-row gap-2 items-center'><Phone size={14} />{topBar.phone}</p>
          <p className='flex flex-row gap-2 items-center'><Mail size={14} />{topBar.mail}</p>
        </div>
        <p className='text-md'>{topBar.promoText}</p>
        <div className='flex flex-row gap-3 items-center text-sm'>
          <p>Follow Us:</p>
          <a href={topBar.facebook} target="_blank" className="text-white pb-3"><FaFacebookF /></a>
          <a href={topBar.instagram} target="_blank" className="text-white pb-3"><FaInstagram /></a>
          <a href={topBar.twitter} target="_blank" className="text-white pb-3"><FaTwitter /></a>
          <a href={topBar.youtube} target="_blank" className="text-white pb-3"><FaYoutube /></a>
        </div>
      </div>

      <div className="flex justify-between items-center py-4 px-5">
        <h1 className="text-2xl font-bold pb-3">Bandage</h1>

        <nav className="hidden lg:flex text-custom-gray text-lg font-semibold justify-center items-center gap-6">
          <Link to="/" className="text-custom-gray! no-underline! pb-3">Home</Link>

          <div className="relative group flex items-center gap-1 pb-3 cursor-pointer">
            <Link to="/shop" className="text-custom-gray! no-underline!">Shop</Link>
            <ChevronDown size={16} className="text-custom-gray" />
    
            <div className="absolute hidden group-hover:flex top-full left-0 bg-white shadow-2xl rounded-lg p-8 min-w-100 gap-12 border border-gray-100">
              
              <div className="flex flex-col gap-3">
                <h3 className="text-black font-bold text-base mb-2">Kadın</h3>
                {femaleCategories.map(cat => (
                  <Link 
                    key={cat.id}
                    to={`/shop/kadin/${cat.code.split(':')[1]}/${cat.id}`} 
                    className="text-custom-gray! font-medium hover:text-sky-500 text-sm no-underline!"
                  >
                    {cat.title}
                  </Link>
                ))}
              </div>

              <div className="flex flex-col gap-3">
                <h3 className="text-black font-bold text-base mb-2">Erkek</h3>
                {maleCategories.map(cat => (
                  <Link 
                    key={cat.id}
                    to={`/shop/erkek/${cat.code.split(':')[1]}/${cat.id}`}
                    className="text-custom-gray! font-medium hover:text-sky-500 text-sm no-underline!"
                  >
                    {cat.title}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <Link to="/about" className="text-custom-gray! no-underline! pb-3">About</Link>
          <p className="pb-3 cursor-pointer">Blog</p>
          <Link to="/team" className="text-custom-gray! no-underline! pb-3">Team</Link>
          <Link to="/contact" className="text-custom-gray! no-underline! pb-3">Contact</Link>
        </nav>

        <div className="hidden lg:flex items-center min-w-37.5 justify-end">
          {user ? (
            <div className="relative flex items-center gap-2 text-sky-500 font-semibold pl-10">
              <div
                className="flex items-center gap-2 cursor-pointer"
                onClick={() => setUserMenuOpen(!userMenuOpen)}
              >
                <Gravatar email={user.email} size={32} className="rounded-full" />
                <span>{user.name}</span>
              </div>
              {userMenuOpen && (
                <div className="absolute top-10 right-0 bg-white shadow-lg rounded-lg p-3 w-40 z-50">
                  <button onClick={logout} className="w-full text-left hover:bg-gray-100 p-2 rounded text-red-500">Logout</button>
                </div>
              )}
            </div>
          ) : (
            <div className='flex flex-row gap-1 text-sky-500 font-semibold pl-10 cursor-pointer items-center'>
              <UserRound size={18} />
              <Link to="/login" className="text-sky-500! no-underline!">Login</Link>
              <span className="text-sky-500">/</span>
              <Link to="/signup" className="text-sky-500! no-underline!">Register</Link>
            </div>
          )}
        </div>

        <div className="flex gap-4 pb-3 cursor-pointer items-center">
          <Search size={20} />
          <ShoppingCart size={20} />
          <TextAlignJustify size={20} onClick={() => setMenuOpen(!menuOpen)} />
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