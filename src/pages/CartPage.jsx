import React from 'react';
import { Trash2, Plus, Minus, ChevronRight, ShoppingBag, ChevronLeft } from 'lucide-react';
import { useHistory } from 'react-router-dom';
import { useCartStore } from "../store/cart";
import { useClientStore } from "../store/client";

const CartPage = () => {
    const history = useHistory();
    const { cart, setCart } = useCartStore();
    const user = useClientStore((state) => state.user);

    const updateCount = (productId, delta) => {
        const newCart = cart.map(item => {
            if (item.product.id === productId) {
                const newCount = Math.max(1, item.count + delta);
                return { ...item, count: newCount };
            }
            return item;
        });
        setCart(newCart);
    };

    const removeItem = (productId) => {
        const newCart = cart.filter(item => item.product.id !== productId);
        setCart(newCart);
    };

    const handleCheckout = () => {
        if (user) {
            history.push("/order");
        } else {
            history.push({
                pathname: "/login",
                state: { from: "/cart" }
            });
        }
    };

    const subtotal = cart.reduce((acc, item) => acc + (item.product.price * item.count), 0);
    const shipping = subtotal > 500 ? 0 : 29.99;
    const total = subtotal + shipping;

    return (
        <div className="bg-light-gray min-h-screen pb-20">
            <div className="px-10 lg:px-20 py-8 flex items-center justify-between">
                <p className="flex items-center gap-2 text-custom-gray font-bold">
                    Home <ChevronRight size={18} /> <span className="text-black">Shopping Cart</span>
                </p>
                <button onClick={() => history.goBack()} className="flex items-center text-sky-500 font-bold hover:underline">
                    <ChevronLeft size={20} /> Back
                </button>
            </div>

            <div className="px-10 lg:px-20 flex flex-col lg:flex-row gap-10">
                <div className="flex-2">
                    <h2 className="text-2xl font-bold mb-6">Shopping Cart ({cart.length} Items)</h2>
                    
                    {cart.length > 0 ? (
                        <div className="flex flex-col gap-4">
                            {cart.map((item) => (
                                <div key={item.product.id} className="bg-white p-6 rounded-lg shadow-sm flex flex-col sm:flex-row items-center gap-6 border border-transparent hover:border-sky-200 transition-all">
                                    <img src={item.product.images[0]?.url} alt={item.product.name} className="w-24 h-32 object-cover rounded-md" />
                                    
                                    <div className="flex-1">
                                        <h3 className="font-bold text-lg">{item.product.name}</h3>
                                        <p className="text-custom-gray text-sm mb-4 line-clamp-1">{item.product.description}</p>
                                        <div className="flex items-center gap-4">
                                            <div className="flex items-center border rounded-md bg-gray-50">
                                                <button onClick={() => updateCount(item.product.id, -1)} className="p-2 hover:bg-sky-100 transition-colors"><Minus size={16} /></button>
                                                <span className="px-4 font-bold text-sky-600">{item.count}</span>
                                                <button onClick={() => updateCount(item.product.id, 1)} className="p-2 hover:bg-sky-100 transition-colors"><Plus size={16} /></button>
                                            </div>
                                            <button onClick={() => removeItem(item.product.id)} className="text-red-500 hover:bg-red-50 p-2 rounded-full transition-colors"><Trash2 size={20} /></button>
                                        </div>
                                    </div>

                                    <div className="text-right">
                                        <p className="text-xl font-bold text-sky-500">{(item.product.price * item.count).toFixed(2)} ₺</p>
                                        <p className="text-xs text-gray-400">Unit: {item.product.price} ₺</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="bg-white p-20 rounded-lg shadow-sm text-center">
                            <ShoppingBag size={64} className="mx-auto text-gray-200 mb-4" />
                            <p className="text-custom-gray text-lg mb-6 font-semibold">Your cart is currently empty.</p>
                            <button onClick={() => history.push('/shop')} className="bg-sky-500 text-white px-10 py-3 rounded-md font-bold hover:bg-sky-600 transition-all shadow-lg shadow-sky-200">Start Shopping</button>
                        </div>
                    )}
                </div>

                <div className="flex-1 lg:max-w-96">
                    <div className="bg-white p-8 rounded-lg shadow-md sticky top-8 border-t-4 border-sky-500">
                        <h3 className="text-xl font-bold mb-6 border-b pb-4">Order Summary</h3>
                        <div className="flex flex-col gap-4 text-custom-gray font-medium">
                            <div className="flex justify-between"><span>Subtotal</span><span className="text-black font-bold">{subtotal.toFixed(2)} ₺</span></div>
                            <div className="flex justify-between"><span>Shipping</span><span className="text-black font-bold">{shipping === 0 ? "Free" : `${shipping.toFixed(2)} ₺`}</span></div>
                            <hr className="my-2" />
                            <div className="flex justify-between text-xl font-bold text-black"><span>Total</span><span className="text-sky-500">{total.toFixed(2)} ₺</span></div>
                        </div>
                        <button 
                            onClick={handleCheckout}
                            disabled={cart.length === 0}
                            className="w-full bg-sky-500 text-white mt-8 py-4 rounded-md font-bold text-lg hover:bg-sky-600 disabled:bg-gray-300 disabled:cursor-not-allowed transition-all shadow-lg shadow-sky-100"
                        >
                            Confirm Order
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartPage;