import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


import BuyProduct from './BuyProduct';

const Product = () =>{const navigate=useNavigate()
const [buy,setBuy]=useState(false)
const [data,setData]=useState({})
const handleNavigate=(d)=>{
    setBuy(true)
    setData(d)
    navigate('/buyProduct')

}
console.log(data)
const fakeData=[
                {
                    id:"21232",
                    name:"First Image",
                    img:'https://i.ibb.co/hRFTw49/breakfast2.png',
                    description:"Learn how to perform the following tasks using the Node.js driver in the Fundamentals section"
                },
                {
                    id:"212132",
                    name:"Second Image",
                    img:'https://i.ibb.co/b5VC2nw/breakfast1.png',
                    description:"Learn how to perform the following tasks using the Node.js driver in the Fundamentals section"
                },
                {
                    id:"212132",
                    name:"Third Image",
                    img:'https://i.ibb.co/16CRhHR/lunch5.png',
                    description:"Learn how to perform the following tasks using the Node.js driver in the Fundamentals section"
                },
                {
                    id:"21213e2",
                    name:"Fourth Image",
                    img:'https://i.ibb.co/X71pX9F/dinner3.png',
                    description:"Learn how to perform the following tasks using the Node.js driver in the Fundamentals section"
                },
                {
                    id:"212132",
                    name:"Third Image",
                    img:'https://i.ibb.co/RDkXzRV/dinner5.png',
                    description:"Learn how to perform the following tasks using the Node.js driver in the Fundamentals section"
                },
                {
                    id:"21213e2",
                    name:"Fourth Image",
                    img:'https://i.ibb.co/3NsV9YT/dinner6.png',
                    description:"Learn how to perform the following tasks using the Node.js driver in the Fundamentals section"
                },
                {
                    id:"212132",
                    name:"Third Image",
                    img:'https://i.ibb.co/Hd4yfk2/dinner4.png',
                    description:"Learn how to perform the following tasks using the Node.js driver in the Fundamentals section"
                },
                {
                    id:"21213e2",
                    name:"Fourth Image",
                    img:'https://i.ibb.co/n8vhCPc/lunch4.png',
                    description:"Learn how to perform the following tasks using the Node.js driver in the Fundamentals section"
                },
                {
                    id:"21213e2",
                    name:"Fourth Image",
                    img:'https://i.ibb.co/myz1hmC/lunch3.png',
                    description:"Learn how to perform the following tasks using the Node.js driver in the Fundamentals section"
                }

]
return (
    <div className='mt-20 py-10 px-20'>
        <div className='grid grid-cols-4 gap-5'>
            {
            fakeData.map(d=>
            <div className='bg-gradient-to-r from-cyan-300 to-cyan-700 h-[450px] rounded-t-xl p-5'>
            
            <img className='h-[60%] w-[100%] rounded-md' src={d.img} alt="" />
            <p className='text-2xl py-1 font-semibold'>{d.name}</p>
            <p className=''>{d.description}</p>
            <div className='flex justify-center items-center py-5'>
            <button onClick={()=>handleNavigate(d)}  className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 px-7 py-2 text-white rounded-md'> Buy</button>

           
             </div>
            </div>)    
            }
        </div>

         {
           buy&& <BuyProduct ></BuyProduct>
            }
    </div>
);}

export default Product;