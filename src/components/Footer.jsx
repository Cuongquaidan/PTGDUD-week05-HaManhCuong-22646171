import React from 'react'

import LogoWhite from "/chefifywhite.png";
function Footer() {
  return (
    <footer className='w-full font-semibold text-neutral-200 bg-neutral-800'>
    <div className='grid grid-cols-2 gap-28 container w-[1400px] mx-auto min-h-[350px]'>
        <div className='flex flex-col p-10 mx-auto'>
           <div className='flex flex-col gap-4'>
           <h3 className='text-xl font-black'>About Us</h3>
            <p>Welcome to our website, a wonderful place to explore and learn how to cook like a pro.</p>
            <div className='flex gap-2'>
                <input type="text" placeholder='Enter your email' className='flex-1 p-2 bg-white rounded text-neutral-500 outline-0'/>
                <button className='bg-[#f84c84] text-md font-bold text-white p-2 rounded-lg'>Send</button>
            </div>
           </div>
           <div className='flex items-center justify-between mt-auto'>
            <img src={LogoWhite} alt="" />
            <p className='text-sm'>2023 Chefify Company</p>
            <p className='text-sm'>Terms of Service| Privacy Policy</p>
           </div>
        </div>
        <div className='grid justify-end grid-cols-2 gap-8 p-10 '>
                <div className='flex flex-col justify-between text-sm'>
                    <div className='flex flex-col gap-4'>
                        <p className='font-black'>Learn More</p>
                        <p>Our Cooks</p>
                        <p>See Our Features</p>
                        <p>FAQ</p>
                    </div>
                    <div className='flex flex-col gap-4'>
                        <p className='font-black'>Shop</p>
                        <p>Gift Subscription</p>
                        <p>Send Us Feedback</p>
                    </div>
                </div>
                <div className='flex flex-col gap-4 text-sm'>
                <p className='font-black'>Recipes</p>
                        <p>What to Cook This Week</p>
                        <p>Pasta</p>
                        <p>Dinner</p>
                        <p>Healthy</p>
                        <p>Vegetarian</p>
                        <p>Vegan</p>
                        <p>Christmas</p>
                </div>
        </div>
    </div>
</footer>
  )
}

export default Footer
