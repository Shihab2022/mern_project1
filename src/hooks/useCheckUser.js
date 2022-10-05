import  { useEffect, useState } from 'react';

const useCheckUser = (addUser) => {
    // console.log(addUser.email)
    const [user,setUser]=useState(false)
    const [error,setError]=useState(false)

    useEffect(()=>{
        if(addUser.email !==undefined || addUser.password!==undefined){

        fetch('https://dry-island-38030.herokuapp.com/login', {
        // fetch('http://localhost:5000/login', {
            method: 'POST', // or 'PUT'
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(addUser),
          })
            .then((response) => response.json())
            .then((data) => {
              if(data.acknowledged===true){
                localStorage.setItem("user","true")
              
                //   navigate('/')
                setUser(true)
                  setError(false)
              }
              else if(data.acknowledged===false){
                // console.log(data)
                  setError(true)
              }
            })
            .catch((error) => {
              console.error('Error:', error);
            });
        }

    },[addUser])
   
    return [user,error]
};

export default useCheckUser;