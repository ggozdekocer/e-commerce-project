import { useState, useEffect } from "react";
import { Search, ShoppingCart, TextAlignJustify, Phone, Mail, UserRound, ChevronDown, Package } from 'lucide-react';
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { topBar } from "../mock/mockData";
import { Link, useHistory } from "react-router-dom";
import Gravatar from "react-gravatar";
import { useClientStore } from "../store/client";
import { useProductStore } from "../store/product";
import { useCartStore } from "../store/cart";
import axiosInstance from "../api/axios";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const user = useClientStore((state) => state.user);
  const setUser = useClientStore((state) => state.setUser);
  const { categories, fetchCategories } = useProductStore();
  const cart = useCartStore((state) => state.cart);
  const history = useHistory();

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
    history.push("/");
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
        <h1 className="text-2xl font-bold pb-3 cursor-pointer" onClick={() => history.push("/")}>Bandage</h1>

        <nav className="hidden lg:flex text-custom-gray text-lg font-semibold justify-center items-center gap-6">
          <Link to="/" className="text-custom-gray! no-underline! pb-3">Home</Link>
          <div className="relative group flex items-center gap-1 pb-3 cursor-pointer">
            <Link to="/shop" className="text-custom-gray! no-underline!">Shop</Link>
            <ChevronDown size={16} className="text-custom-gray" />
            <div className="absolute hidden group-hover:flex top-full left-0 bg-white shadow-2xl rounded-lg p-8 min-w-100 gap-12 border border-gray-100">
              <div className="flex flex-col gap-3">
                <h3 className="text-black font-bold text-base mb-2">Kadın</h3>
                {femaleCategories.map(cat => (
                  <Link key={cat.id} to={`/shop/kadin/${cat.id}`} className="text-custom-gray! font-medium hover:text-sky-500 text-sm no-underline!">
                    {cat.title}
                  </Link>
                ))}
              </div>
              <div className="flex flex-col gap-3">
                <h3 className="text-black font-bold text-base mb-2">Erkek</h3>
                {maleCategories.map(cat => (
                  <Link key={cat.id} to={`/shop/erkek/${cat.id}`} className="text-custom-gray! font-medium hover:text-sky-500 text-sm no-underline!">
                    {cat.title}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <Link to="/about" className="text-custom-gray! no-underline! pb-3">About</Link>
          <Link to="/blog" className="text-custom-gray! no-underline! pb-3">Blog</Link>
          <Link to="/team" className="text-custom-gray! no-underline! pb-3">Team</Link>
          <Link to="/contact" className="text-custom-gray! no-underline! pb-3">Contact</Link>
        </nav>

        <div className="hidden lg:flex items-center min-w-37.5 justify-end">
          {user ? (
            <div className="relative group flex items-center gap-2 text-sky-500 font-semibold pl-10 py-3 cursor-pointer">
              <div className="flex items-center gap-2">
                <Gravatar email={user.email} size={32} className="rounded-full" />
                <span>{user.name}</span>
                <ChevronDown size={14} className="transition-transform group-hover:rotate-180" />
              </div>
              <div className="absolute top-full right-0 bg-white shadow-xl rounded-lg p-2 w-48 hidden group-hover:flex flex-col z-100 border border-gray-100">
                <Link 
                  to="/orders" 
                  className="w-full text-left hover:bg-sky-50 p-2.5 rounded no-underline! text-m  text-sky-500! font-bold flex items-center gap-2 transition-colors"
                >
                  <Package size={16} className="text-sky-500" /> Previous Orders
                </Link>
                <div className="border-t my-1"></div>
                <button 
                  onClick={logout} 
                  className="w-full text-left hover:bg-red-50 p-2.5 rounded text-sky-500 transition-colors text-sm font-bold flex items-center gap-2"
                >
                  Logout
                </button>
              </div>
            </div>
          ) : (
            <div className='flex flex-row gap-1 text-sky-500 font-semibold pl-10 cursor-pointer items-center'>
              <UserRound size={18} />
              <Link to="/login" className="text-sky-500! no-underline! hover:text-sky-700 transition-colors">Login</Link>
              <span className="text-sky-500">/</span>
              <Link to="/signup" className="text-sky-500! no-underline! hover:text-sky-700 transition-colors">Register</Link>
            </div>
          )}
        </div>

        <div className="flex gap-4 pb-3 cursor-pointer items-center">
          <Search size={20} className="hover:text-sky-500 transition-colors" />
          <div className="relative group flex items-center">
            <div 
              className="flex items-center cursor-pointer hover:text-sky-500 transition-all transform hover:scale-110"
              onClick={() => history.push("/cart")}
            >
              <ShoppingCart size={20} />
              {cart.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] w-5 h-5 flex items-center justify-center rounded-full font-bold">
                  {cart.reduce((total, item) => total + item.count, 0)}
                </span>
              )}
            </div>
            <div className="absolute right-0 top-full hidden group-hover:flex flex-col bg-white border border-gray-100 rounded-lg shadow-2xl p-4 w-72 z-50">
              <h4 className="text-black font-bold border-b pb-2 mb-2">My Cart ({cart.length})</h4>
              <div className="max-h-60 overflow-y-auto">
                {cart.length === 0 && <span className="text-center text-gray-500 py-4 block">Cart is empty</span>}
                {cart.map(item => (
                  <div key={item.product.id} className="flex gap-3 items-center mb-3 border-b border-gray-50 pb-2">
                    <img src={item.product.images[0]?.url} className="w-12 h-12 object-cover rounded" alt="" />
                    <div className="flex flex-col flex-1">
                      <span className="text-sm font-semibold truncate w-32 text-black">{item.product.name}</span>
                      <span className="text-xs text-gray-500">{item.count} x {item.product.price}₺</span>
                    </div>
                  </div>
                ))}
              </div>
              {cart.length > 0 && (
                <button 
                  onClick={() => history.push("/cart")}
                  className="mt-3 text-center bg-sky-500 text-white p-2 rounded-md font-bold hover:bg-sky-600 transition-colors"
                >
                  Go to Cart
                </button>
              )}
            </div>
          </div>
          <TextAlignJustify size={20} className="hover:text-sky-500 transition-colors" onClick={() => setMenuOpen(!menuOpen)} />
        </div>
      </div>

      {menuOpen && (
        <nav className="flex flex-col items-center gap-6 text-custom-gray text-4xl lg:hidden pb-30">
          <Link to="/" className="text-custom-gray! no-underline!">Home</Link>
          <Link to="/shop" className="text-custom-gray! no-underline!">Shop</Link>
          <Link to="/about" className="text-custom-gray! no-underline!">About</Link>
          <Link to="/blog" className="text-custom-gray! no-underline!">Blog</Link>
          <Link to="/team" className="text-custom-gray! no-underline!">Team</Link>
          <Link to="/contact" className="text-custom-gray! no-underline!">Contact</Link>
        </nav>
      )}
    </header>
  );
};

export default Header;