import React, { useEffect, useState } from 'react'

import { FaBars } from "react-icons/fa";
import { FaChevronUp } from "react-icons/fa";
import CheckBox from "/checkbox.png";
import CheckBoxChecked from "/checkboxpink.png";

import Nothing from "/nothing.png";
import rating1 from "/rating_1.png";
import rating2 from "/rating_2.png";
import rating3 from "/rating_3.png";
import rating4 from "/rating_4.png";
import rating5 from "/rating_5.png";
import SliderImg from "/slider.png";
import Item from '../components/Item';
const type = [
    {
        value: "Pan-fried",
        check: false
    },
    {
        value: "Grilled",
        check: true
    },
    {
        value: "Sauteed",
        check: false
    },
    {
        value: "Steamed",
        check: false
    },
    {
        value: "Stir-fried",
        check: false
    },
    {
        value: "Roasted",
        check: true
    },
    {
        value: "Baked",
        check: false
    },
    {
        value: "Stewed",
        check: false
    },
]
const rating = [
    {
        check: false,
        img: rating5
    },
    {
        check: false,
        img: rating4
    },
    {
        check: false,
        img: rating3
    },
    {
        check: true,
        img: rating2
    },
    {
        check: true,
        img: rating1
    },

]

function SearchPage() {
    const [data,setData] = useState([])
    useEffect(()=>{

        const fetchData = async ()=>{
            const res = await fetch("https://66f5f8bb436827ced97590b0.mockapi.io/api/v1/items");
            if(!res.ok){
                throw new Error("Something went wrong");
            }
            
            const data = await res.json();
            setData(data);

        }
        fetchData();
    },[])
  return (

     
        <div className='w-[1400px] p-10 ml-auto mr-auto grid grid-cols-[350px_auto]'>
            <div className='flex flex-col gap-4 border-gray-200 rounded-md shadow border-1'>
                <div className='flex items-center gap-2 p-4'> 
                      <FaBars size={24} />
                <h2 className='text-2xl font-black'>FILTERS</h2></div>
                <div className='p-4'>
                    <div className='flex items-center justify-between'>
                        <h3 className='text-xl font-bold'>Type</h3>
                        <FaChevronUp size={20} color='#f84c84'/>
                    </div>
                    <div className='grid grid-cols-2 gap-3 mt-4'>
                        {type.map((item,index)=>{
                            return(
                                <div className='flex items-center gap-2'>
                                    {item.check ? <img src={CheckBoxChecked} alt="checkbox" /> : <img src={CheckBox} alt="checkbox" />}
                                    <span>{item.value}</span>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div className='w-full h-0.5 bg-gray-200 '></div>
                <div className='p-4'>
                    <div className='flex items-center justify-between'>
                        <h3 className='text-xl font-bold'>Time</h3>
                        <FaChevronUp size={20} color='#f84c84'/>
                    </div>
                    <div className='relative mt-4'>
                        <p className='absolute text-sm text-gray-400 -top-5 left-[35%] -translate-x-1/2'>30 minutes</p>
                        <p className='absolute text-sm text-gray-400 -top-5 left-[70%] -translate-x-1/2'>50 minutes</p>
                        <img src={SliderImg} alt="" className='object-cover w-full' />
                    </div>
                </div>
                <div className='w-full h-0.5 bg-gray-200 '></div>
                <div className='p-4'>
                    <div className='flex items-center justify-between'>
                        <h3 className='text-xl font-bold'>Rating</h3>
                        <FaChevronUp size={20} color='#f84c84'/>
                    </div>
                    <div className='flex flex-col gap-4 mt-6'>
                        {rating.map((item,index)=>{
                            return(
                                <div className='flex items-center gap-3'>
                                    {item.check ? <img src={CheckBoxChecked} alt="checkbox" /> : <img src={CheckBox} alt="checkbox" />}
                                    <img src={item.img} alt="rating" />
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div className='w-full h-0.5 bg-gray-200 '></div>
                <div className='p-4'>
                    <button className='bg-[#f84c84] text-lg font-bold w-full text-white p-2 rounded-lg'>Apply</button>
                </div>
            </div>
            <div className='flex flex-col items-center gap-4 px-10'>
                <div className='flex justify-between w-full'>
                            <h2 className='font-bold text-3xl'>Result: {data?.length}</h2>
                            <select className='shadow rounded-xl min-w-[150px] border border-slate-200 px-2'>
                                <option value="" selected>A-Z</option>
                                <option value="">Z-A</option>
                            </select>
                </div>
            <div className=' grid grid-cols-3 gap-4 w-full'>
                    {
                        data.map((item,index)=>{
                            return <Item key={item.id} name={item.name} urlImg={item.urlImg} time={item.time}></Item>
                        })
                    }
            </div>   
            </div>
        </div>
       

  )
}

export default SearchPage