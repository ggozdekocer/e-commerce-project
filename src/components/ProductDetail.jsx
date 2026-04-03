import { ChevronRight, Heart, ShoppingCart, Eye } from 'lucide-react';
import ProductCarousel from './ProductCarousel';

const ProductDetail = ()=> {

    return (
        <>
            <div className='flex flex-col justify-center items-center pt-12 mt-5 gap-5 bg-light-gray pb-12 lg:items-start lg:px-12'>
                <p className='flex flex-row text-xl font-bold items-center lg:items-start'>Home<span className='text-custom-gray pt-1.5'><ChevronRight /></span><span className='text-custom-gray'>Shop</span></p>
                <div className='lg:flex lg:flex-row lg:justify-between'>
                    <div>
                        <ProductCarousel />
                    </div>

                    <div className='flex flex-col justify-start px-14 pt-10 gap-2 lg:max-w-160 lg:pt-0'>
                        <p className='font-normal text-2xl'>Floating Phone</p>
                        <h6 className='text-lg text-custom-gray pb-3'>10 Reviews</h6>
                        <h3 className='font-bold! text-2xl!'>$1,139.33</h3>
                        <h6 className='flex gap-2 text-custom-gray pb-4'>Availability  :<span className='text-sky-500'>In Stock</span></h6>
                        <p>Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.</p>
                        <div className="flex items-center gap-2 pb-3">
                            <span className="w-6 h-6 rounded-full bg-blue-500"></span>
                            <span className="w-6 h-6 rounded-full bg-green-500"></span>
                            <span className="w-6 h-6 rounded-full bg-orange-500"></span>
                            <span className="w-6 h-6 rounded-full bg-gray-800"></span>
                        </div>
                        <div className='flex flex-row items-center justify-content gap-2'>
                            <button className='border-2 rounded-lg! px-3.5 py-2.5 mb-3 bg-sky-500 text-white font-semibold text-md!'>Select Options</button>
                            <p className='border rounded-full p-2.5'><Heart /></p>
                            <p className='border rounded-full p-2.5'><ShoppingCart /></p>
                            <p className='border rounded-full p-2.5'><Eye /></p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='flex flex-col items-center justify-center mt-12 px-10'>
                <nav className='flex flex-row gap-2 list-none text-custom-gray mb-4 lg:gap-15!'>
                    <li className='underline'>Description</li>
                    <li className='font-semibold'>Additional Information</li>
                    <li className='font-semibold flex flex-row gap-1'>Reviews<span className='text-[#23856D]'>(0)</span></li>
                </nav>
                <div className='flex flex-col gap-5 lg:grid-cols-3 lg:grid lg:pt-10'>
                    <div className="relative w-full lg:col-span-1">
                        <div className="absolute -bottom-4 -right-4 w-full h-full bg-gray-100 rounded-lg"></div>
                        <img 
                            src="src/assets/description-img.png"
                            alt="product"
                            className="relative w-full rounded-lg shadow-sm lg:h-full"
                        />
                    </div>
                    <div className='flex flex-col gap-2.5 text-custom-gray font-semibold px-1 lg:col-span-1'>
                        <h3 className='text-detail-page font-bold! pb-3'>the quick fox jumps over </h3>
                        <p>Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.</p>
                        <p>Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.</p>
                        <p>Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.</p>
                    </div>
                    <div className='flex flex-col justify-start gap-2 text-custom-gray font-semibold lg:col-span-1'>
                        <p className='text-detail-page font-bold! text-lg!'>the quick fox jumps over </p>
                        <li className='list-none flex flex-row gap-1 items-center'><span><ChevronRight /></span>the quick fox jumps over the lazy dog</li>
                        <li className='list-none flex flex-row gap-1 items-center'><span><ChevronRight /></span>the quick fox jumps over the lazy dog</li>
                        <li className='list-none flex flex-row gap-1 items-center'><span><ChevronRight /></span>the quick fox jumps over the lazy dog</li>
                        <li className='list-none flex flex-row gap-1 items-center'><span><ChevronRight /></span>the quick fox jumps over the lazy dog</li>

                        <p className='text-detail-page font-bold! pt-5 text-lg!'>the quick fox jumps over </p>
                        <li className='list-none flex flex-row gap-1 items-center'><span><ChevronRight /></span>the quick fox jumps over the lazy dog</li>
                        <li className='list-none flex flex-row gap-1 items-center'><span><ChevronRight /></span>the quick fox jumps over the lazy dog</li>
                        <li className='list-none flex flex-row gap-1 items-center'><span><ChevronRight /></span>the quick fox jumps over the lazy dog</li>
                        <li className='list-none flex flex-row gap-1 items-center'><span><ChevronRight /></span>the quick fox jumps over the lazy dog</li>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductDetail;