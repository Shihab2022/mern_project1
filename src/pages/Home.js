import React from 'react';
import img1 from '../accets/img1.jpg'
import img2 from '../accets/img2.jpg'
import img3 from '../accets/img3.jpg'
import img4 from '../accets/img4.jpg'
const Home = () => {
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
},

    ]
    return (
        <div className='mt-20 px-20'>
            <div className='grid grid-cols-4 gap-5'>
                {
                fakeData.map(d=>
                <div className='bg-red-500 h-[450px] rounded-t-xl p-5'>
                
                <img className='h-[60%] w-[100%]' src={d.img} alt="" />
                <p className=''>{d.name}</p>
                <p>{d.description}</p>
                </div>)    
                }
            </div>
        </div>
    );
};

export default Home;