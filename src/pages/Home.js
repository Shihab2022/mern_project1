import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import img1 from '../accets/img1.jpg'
import img2 from '../accets/img2.jpg'
import img3 from '../accets/img3.jpg'
import img4 from '../accets/img4.jpg'
import BuyProduct from './BuyProduct';
const Home = () => {
    const navigate=useNavigate()
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
                        img:img1,
                        description:"Learn how to perform the following tasks using the Node.js driver in the Fundamentals section"
                    },
                    {
                        id:"212132",
                        name:"Second Image",
                        img:img2,
                        description:"Learn how to perform the following tasks using the Node.js driver in the Fundamentals section"
                    },
                    {
                        id:"212132",
                        name:"Third Image",
                        img:img3,
                        description:"Learn how to perform the following tasks using the Node.js driver in the Fundamentals section"
                    },
                    {
                        id:"21213e2",
                        name:"Fourth Image",
                        img:img4,
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
                        img:'https://i.ibb.co/3NsV9YT/dinner6.png',
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
    );
};

export default Home;