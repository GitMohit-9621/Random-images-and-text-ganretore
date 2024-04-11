import React, { useEffect, useState } from 'react'


function Random (){


const [res,setsrc]=useState('')
const [text ,settext]=useState('')

const fethapi= async()=>{

    const response=await fetch('https://dog.ceo/api/breeds/image/random')
    const data=await response.json();

  setsrc(data.message)
  

}

const fethtext= async()=>{
    const response=await fetch('https://api.chucknorris.io/jokes/random')

    const data=await response.json()

settext(data.value)

}

useEffect(()=>{
   
},[res,text])

    return (
        <div className='app'>
            <h2>Random images and thougth ganretore using React API</h2>
            <div className='app-img'>
<img src={res} alt='' className='img'></img>
            </div>
            <p className='pharagraph'>{text}</p>
            <button className='btn1' onClick={(e)=>fethapi()}>Click Now</button>
            <button className='btn2' onClick={(e)=>fethtext()}>Click text</button>


        </div>
    )
}
export default Random