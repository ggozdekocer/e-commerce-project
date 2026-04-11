import React, { useEffect, useState } from 'react';
import { useCartStore } from '../store/cart';
import { Plus, Edit, Trash2, CheckCircle, X, CreditCard, PartyPopper } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { useHistory } from 'react-router-dom';

const CreateOrderPage = () => {
    const history = useHistory();
    const { 
        addressList, fetchAddresses, addAddress, deleteAddress, 
        cardList, fetchCards, addCard, deleteCard, cart, createOrder 
    } = useCartStore();

    const [activeTab, setActiveTab] = useState('address');
    const [showAddressForm, setShowAddressForm] = useState(false);
    const [showCardForm, setShowCardForm] = useState(false);
    const [selectedAddressId, setSelectedAddressId] = useState(null);
    const [selectedCard, setSelectedCard] = useState(null);
    const [ccv, setCcv] = useState("");
    const [isOrderSuccess, setIsOrderSuccess] = useState(false);

    const addressForm = useForm();
    const cardForm = useForm();

    useEffect(() => {
        fetchAddresses();
        fetchCards();
    }, []);

    const onAddressSubmit = (data) => {
        addAddress(data);
        setShowAddressForm(false);
        addressForm.reset();
    };

    const onCardSubmit = (data) => {
        const payload = {
            ...data,
            expire_month: parseInt(data.expire_month),
            expire_year: parseInt(data.expire_year)
        };
        addCard(payload);
        setShowCardForm(false);
        cardForm.reset();
    };

    const handleOrderSubmit = async () => {
        const subtotal = cart.reduce((acc, item) => acc + (item.product.price * item.count), 0);
        const totalPrice = subtotal + 29.99;

        const orderPayload = {
            address_id: selectedAddressId,
            order_date: new Date().toISOString().slice(0, 19),
            card_no: parseInt(selectedCard.card_no),
            card_name: selectedCard.name_on_card,
            card_expire_month: selectedCard.expire_month,
            card_expire_year: selectedCard.expire_year,
            card_ccv: parseInt(ccv),
            price: totalPrice,
            products: cart.map(item => ({
                product_id: item.product.id,
                count: item.count,
                detail: `${item.product.name} - ${item.count} items`
            }))
        };

        try {
            await createOrder(orderPayload);
            setIsOrderSuccess(true);
            toast.success("Your order has been received successfully!");
        } catch (error) {
            toast.error("An error occurred while creating the order.");
        }
    };

    if (isOrderSuccess) {
        return (
            <div className="h-180 flex flex-col items-center justify-center bg-white p-5 text-center font-montserrat">
                <div className="bg-green-100 p-6 rounded-full mb-6">
                    <PartyPopper size={64} className="text-green-600 animate-bounce" />
                </div>
                <h1 className="text-4xl font-bold text-custom-gray mb-4">Congratulations!</h1>
                <p className="text-xl text-gray-600 mb-8">Your order has been successfully created. Thank you for choosing us.</p>
                <button 
                    onClick={() => history.push("/")}
                    className="bg-sky-500 text-white px-10 py-4 rounded-lg font-bold hover:bg-sky-600 transition-all shadow-lg"
                >
                    Continue Shopping
                </button>
            </div>
        );
    }

    const subtotal = cart.reduce((acc, item) => acc + (item.product.price * item.count), 0);

    return (
        <div className="bg-light-gray min-h-screen py-10 px-5 lg:px-20 font-montserrat">
            <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-8">
                <div className="flex-[2]">
                    <div className="flex mb-6 border-b">
                        <button onClick={() => setActiveTab('address')} className={`flex-1 py-4 font-bold transition-colors ${activeTab === 'address' ? 'text-sky-500 border-b-2 border-sky-500' : 'text-gray-400'}`}>
                            1. Address Information
                        </button>
                        <button disabled={!selectedAddressId} onClick={() => setActiveTab('payment')} className={`flex-1 py-4 font-bold transition-colors ${activeTab === 'payment' ? 'text-sky-500 border-b-2 border-sky-500' : 'text-gray-400'} disabled:opacity-50`}>
                            2. Payment Options
                        </button>
                    </div>

                    {activeTab === 'address' && (
                        <div className="bg-white p-6 rounded-lg shadow-sm">
                            <div className="flex justify-between items-center mb-6">
                                <h2 className="text-xl font-bold">Delivery Address</h2>
                                <button onClick={() => setShowAddressForm(true)} className="flex items-center gap-2 text-sky-500 font-bold hover:underline">
                                    <Plus size={18} /> Add New Address
                                </button>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {addressList.map((addr) => (
                                    <div key={addr.id} onClick={() => setSelectedAddressId(addr.id)} className={`p-4 border-2 rounded-lg cursor-pointer relative transition-all ${selectedAddressId === addr.id ? 'border-sky-500 bg-sky-50' : 'border-gray-100'}`}>
                                        {selectedAddressId === addr.id && <CheckCircle className="absolute top-2 right-2 text-sky-500" size={20} />}
                                        <p className="font-bold">{addr.title}</p>
                                        <p className="text-sm">{addr.name} {addr.surname}</p>
                                        <p className="text-xs text-gray-500 mt-2">{addr.neighborhood} {addr.district} / {addr.city}</p>
                                        <button onClick={(e) => { e.stopPropagation(); deleteAddress(addr.id); }} className="mt-4 text-red-500 text-xs font-bold flex items-center gap-1"><Trash2 size={14}/> Delete</button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {activeTab === 'payment' && (
                        <div className="bg-white p-6 rounded-lg shadow-sm">
                            <div className="flex justify-between items-center mb-6">
                                <h2 className="text-xl font-bold">Card Information</h2>
                                <button onClick={() => setShowCardForm(true)} className="flex items-center gap-2 text-sky-500 font-bold hover:underline">
                                    <Plus size={18} /> Add New Card
                                </button>
                            </div>
                            <div className="flex flex-col gap-4">
                                {cardList.map((card) => (
                                    <div key={card.id} onClick={() => setSelectedCard(card)} className={`p-4 border-2 rounded-lg cursor-pointer flex items-center justify-between transition-all ${selectedCard?.id === card.id ? 'border-sky-500 bg-sky-50' : 'border-gray-100'}`}>
                                        <div className="flex items-center gap-4">
                                            <div className="bg-gray-100 p-3 rounded-full"><CreditCard className="text-custom-gray" /></div>
                                            <div>
                                                <p className="font-bold">{card.name_on_card}</p>
                                                <p className="text-sm text-gray-500">**** **** **** {card.card_no.slice(-4)}</p>
                                                <p className="text-xs text-gray-400">{card.expire_month}/{card.expire_year}</p>
                                            </div>
                                        </div>
                                        {selectedCard?.id === card.id && (
                                            <div className="flex items-center gap-4">
                                                <input 
                                                    type="password" 
                                                    placeholder="CCV" 
                                                    maxLength="3" 
                                                    className="w-16 border p-2 rounded text-center outline-none focus:ring-1 focus:ring-sky-500" 
                                                    value={ccv}
                                                    onChange={(e) => setCcv(e.target.value)}
                                                    onClick={(e) => e.stopPropagation()}
                                                />
                                                <CheckCircle className="text-sky-500" size={24} />
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>

                <div className="flex-1 lg:max-w-md">
                    <div className="bg-white p-8 rounded-lg shadow-md sticky top-10 border-t-4 border-sky-500">
                        <h3 className="text-xl font-bold mb-6">Order Summary</h3>
                        <div className="flex flex-col gap-4">
                            <div className="flex justify-between"><span>Product Total</span><span className="font-bold">{subtotal.toFixed(2)} ₺</span></div>
                            <div className="flex justify-between"><span>Shipping Total</span><span className="font-bold">29.99 ₺</span></div>
                            <hr />
                            <div className="flex justify-between text-xl font-bold text-sky-500"><span>Grand Total</span><span>{(subtotal + 29.99).toFixed(2)} ₺</span></div>
                        </div>
                        {activeTab === 'address' ? (
                            <button onClick={() => setActiveTab('payment')} disabled={!selectedAddressId} className="w-full bg-sky-500 text-white mt-8 py-4 rounded-md font-bold hover:bg-sky-600 disabled:bg-gray-200 transition-all">Continue</button>
                        ) : (
                            <button onClick={handleOrderSubmit} disabled={!selectedCard || ccv.length < 3} className="w-full bg-green-500 text-white mt-8 py-4 rounded-md font-bold hover:bg-green-600 disabled:bg-gray-200 transition-all">Complete Order</button>
                        )}
                    </div>
                </div>
            </div>

            {showCardForm && (
                <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-[100] p-4 backdrop-blur-sm">
                    <div className="bg-white rounded-xl p-8 w-full max-w-md relative shadow-2xl">
                        <button onClick={() => setShowCardForm(false)} className="absolute top-4 right-4 text-gray-400 hover:text-black"><X /></button>
                        <h2 className="text-2xl font-bold mb-6 text-custom-gray">Add Card</h2>
                        <form onSubmit={cardForm.handleSubmit(onCardSubmit)} className="flex flex-col gap-4">
                            <div className="flex flex-col gap-1">
                                <label className="text-sm font-bold text-gray-600">Name on Card</label>
                                <input {...cardForm.register('name_on_card')} className="border p-3 rounded-lg outline-none" placeholder="Ali Baş" required />
                            </div>
                            <div className="flex flex-col gap-1">
                                <label className="text-sm font-bold text-gray-600">Card Number</label>
                                <input {...cardForm.register('card_no')} className="border p-3 rounded-lg outline-none" placeholder="1234123412341234" maxLength="16" required />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="flex flex-col gap-1">
                                    <label className="text-sm font-bold text-gray-600">Month</label>
                                    <input type="number" {...cardForm.register('expire_month')} className="border p-3 rounded-lg outline-none" placeholder="MM" min="1" max="12" required />
                                </div>
                                <div className="flex flex-col gap-1">
                                    <label className="text-sm font-bold text-gray-600">Year</label>
                                    <input type="number" {...cardForm.register('expire_year')} className="border p-3 rounded-lg outline-none" placeholder="YYYY" min="2024" required />
                                </div>
                            </div>
                            <button type="submit" className="bg-sky-500 text-white py-4 rounded-lg font-bold mt-4 hover:bg-sky-600 transition-colors">Save Card</button>
                        </form>
                    </div>
                </div>
            )}

            {showAddressForm && (
                <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-100 p-4 backdrop-blur-sm">
                    <div className="bg-white rounded-xl p-8 w-full max-w-2xl relative shadow-2xl">
                        <button onClick={() => setShowAddressForm(false)} className="absolute top-4 right-4 text-gray-400 hover:text-black"><X /></button>
                        <h2 className="text-2xl font-bold mb-6 text-custom-gray">Add New Address</h2>
                        <form onSubmit={addressForm.handleSubmit(onAddressSubmit)} className="grid grid-cols-2 gap-4">
                            <div className="col-span-2 flex flex-col gap-1">
                                <label className="text-sm font-bold text-gray-600">Address Title</label>
                                <input {...addressForm.register('title')} className="border p-3 rounded-lg outline-none" placeholder="e.g. My Home" required />
                            </div>
                            <div className="flex flex-col gap-1"><label className="text-sm font-bold text-gray-600">Name</label><input {...addressForm.register('name')} className="border p-3 rounded-lg outline-none" required /></div>
                            <div className="flex flex-col gap-1"><label className="text-sm font-bold text-gray-600">Surname</label><input {...addressForm.register('surname')} className="border p-3 rounded-lg outline-none" required /></div>
                            <div className="flex flex-col gap-1"><label className="text-sm font-bold text-gray-600">Phone</label><input {...addressForm.register('phone')} className="border p-3 rounded-lg outline-none" required /></div>
                            <div className="flex flex-col gap-1">
                                <label className="text-sm font-bold text-gray-600">City</label>
                                <select {...addressForm.register('city')} className="border p-3 rounded-lg outline-none" required>
                                    <option value="istanbul">Istanbul</option><option value="ankara">Ankara</option><option value="izmir">Izmir</option>
                                </select>
                            </div>
                            <div className="flex flex-col gap-1"><label className="text-sm font-bold text-gray-600">District</label><input {...addressForm.register('district')} className="border p-3 rounded-lg outline-none" required /></div>
                            <div className="flex flex-col gap-1"><label className="text-sm font-bold text-gray-600">Neighborhood</label><input {...addressForm.register('neighborhood')} className="border p-3 rounded-lg outline-none" required /></div>
                            <button type="submit" className="col-span-2 bg-sky-500 text-white py-4 rounded-lg font-bold mt-4 hover:bg-sky-600 transition-colors">Save Address</button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CreateOrderPage;