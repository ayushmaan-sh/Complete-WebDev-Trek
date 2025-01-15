import React from 'react'

function Card({ productone, producttwo, productthree, productfour}) {
    return (

        <>
            <div className="max-w-xs rounded-md shadow-md bg-black text-gray-100 ml-4 border-solid border-2 border-white">
                <img
                    src="https://th.bing.com/th/id/OIG1.wQ7nqzXG6LLji1s3MrOP"
                    alt=""
                    className="object-cover object-center w-full rounded-t-md h-72 bg-gray-500"
                />
                <div className="flex flex-col justify-between p-6 space-y-8">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-semibold tracking-wide">{[productone, producttwo, productthree, productfour]}</h2>
                        <p className="text-gray-400">
                            (MCB / SPD / FUSE & FUSE HOLDER : SIBASS (TUV CERTIFIED), BOX-IDIS INDIA SIZE- 130X180X100 (IP67,IK08,UL-94-V2 CERTIFIED),
                            Gland and Terminal-6MM FTC, Wiring - 4.0 sqmm AC & DC Wire)
                        </p>
                        <h2 className='text-yellow-300 text-2xl'>Rs.875 <span className='text-xs'>+gst</span></h2>
                    </div>
                    <div className='flex gap-2'>
                        <button
                            type="button"
                            className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-gray-800 text-gray-200"
                        >
                            Buy Now!
                        </button>
                        <button
                            type="button"
                            className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-gray-800 text-gray-200"
                        >
                            Add To Cart
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card
