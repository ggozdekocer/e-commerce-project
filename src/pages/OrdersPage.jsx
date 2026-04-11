import React, { useEffect, useState } from 'react';
import { useCartStore } from "../store/cart";
import { ChevronDown, ChevronUp, Package, Calendar, CreditCard } from 'lucide-react';

const OrdersPage = () => {
    const { orders, fetchOrders } = useCartStore();
    const [openOrderId, setOpenOrderId] = useState(null);

    useEffect(() => {
        fetchOrders();
    }, []);

    return (
        <div className="container mx-auto py-12 px-4 lg:px-20 min-h-screen font-montserrat">
            <h2 className="text-3xl font-bold mb-10 text-sky-500 flex items-center gap-3 border-b pb-4">
                <Package className="text-slate-500" size={32} /> Previous Orders
            </h2>
            
            <div className="flex flex-col gap-6">
                {orders.length === 0 ? (
                    <div className="text-center py-20 bg-gray-50 rounded-xl border-2 border-dashed">
                        <p className="text-gray-500 text-lg">You haven't placed any orders yet.</p>
                    </div>
                ) : (
                    orders.map((order) => (
                        <div key={order.id} className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                            <div 
                                onClick={() => setOpenOrderId(openOrderId === order.id ? null : order.id)}
                                className="p-5 flex flex-wrap justify-between items-center cursor-pointer bg-slate-50/50"
                            >
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 flex-1">
                                    <div>
                                        <p className="text-[10px] text-gray-400 uppercase font-bold tracking-wider">Order ID</p>
                                        <p className="text-sm font-bold text-slate-700">#{order.id}</p>
                                    </div>
                                    <div>
                                        <p className="text-[10px] text-gray-400 uppercase font-bold tracking-wider">Order Date</p>
                                        <p className="text-sm text-slate-600 flex items-center gap-1">
                                            <Calendar size={14}/> {new Date(order.order_date).toLocaleDateString()}
                                        </p>
                                    </div>
                                    <div>
                                        <p className="text-[10px] text-gray-400 uppercase font-bold tracking-wider">Total Amount</p>
                                        <p className="text-sm font-extrabold text-green-600">{order.price.toFixed(2)} ₺</p>
                                    </div>
                                    <div className="hidden md:block">
                                        <p className="text-[10px] text-gray-400 uppercase font-bold tracking-wider">Status</p>
                                        <span className="text-[10px] bg-sky-100 text-sky-700 px-2 py-1 rounded-full font-bold">Processing</span>
                                    </div>
                                </div>
                                <div className="ml-4 text-sky-500">
                                    {openOrderId === order.id ? <ChevronUp size={24}/> : <ChevronDown size={24}/>}
                                </div>
                            </div>

                            {openOrderId === order.id && (
                                <div className="p-6 bg-white animate-in fade-in slide-in-from-top-2 duration-300">
                                    <div className="overflow-x-auto">
                                        <table className="w-full text-left text-sm">
                                            <thead>
                                                <tr className="border-b text-slate-400">
                                                    <th className="pb-4 font-bold">Product Details</th>
                                                    <th className="pb-4 text-center font-bold">Quantity</th>
                                                    <th className="pb-4 text-right font-bold">Unit Price</th>
                                                </tr>
                                            </thead>
                                            <tbody className="divide-y divide-gray-100">
                                                {order.products.map((product, idx) => (
                                                    <tr key={idx} className="group">
                                                        <td className="py-4 flex items-center gap-4">
                                                            <div className="w-16 h-16 bg-gray-100 rounded-lg overflow-hidden shrink-0">
                                                                <img 
                                                                    src={product.images?.[0]?.url} 
                                                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform" 
                                                                    alt={product.name}
                                                                />
                                                            </div>
                                                            <div>
                                                                <p className="font-bold text-slate-800">{product.name}</p>
                                                                <p className="text-xs text-gray-400 line-clamp-1">{product.description}</p>
                                                            </div>
                                                        </td>
                                                        <td className="py-4 text-center text-slate-600 font-medium">
                                                            {product.count || 1}
                                                        </td>
                                                        <td className="py-4 text-right font-bold text-slate-700">
                                                            {product.price} ₺
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            )}
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default OrdersPage;