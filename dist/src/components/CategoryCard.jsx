import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react';
export default function CategoryCard(_a) {
    var categoryDescription = _a.categoryDescription, categoryImage = _a.categoryImage, categoryName = _a.categoryName, categorySlug = _a.categorySlug, _id = _a._id;
    var router = useRouter();
    return (<div onClick={function () { return router.push("/category/category-product/".concat(_id)); }} className="card card-compact text-black cursor-pointer m-3 w-80 bg-gray-50 shadow-xl relative">
            <div className='w-full rounded relative h-60'>
                <Image src={categoryImage || '/images98.jpg'} alt='no Image' className='rounded' fill/>
            </div>
            <div className="card-body">
                <h2 className="card-title mb-1">{categoryName} </h2>
                <button className='btn text-white tracking-widest btn-wide mt-2'>View Products</button>
            </div>
        </div>);
}
