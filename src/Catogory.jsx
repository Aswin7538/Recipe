import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './Category.css'
import { Link } from 'react-router-dom'


export const Catagory = () => {

    const [data,setData]=useState([])
    useEffect(()=>{
        let fetchdata=async()=>{
            let response=await axios.get(`https://www.themealdb.com/api/json/v1/1/categories.php`)
            console.log(response);
            setData(response.data.categories)
          }
        fetchdata()
},[])
  return (
    <div className='cat'>


            {
                data.map((item)=>(
                    <div className=' p-5 '>
                    <div className='items'>

                    <Link to={`/detail/${item.strCategory}`}><img src={item.strCategoryThumb} alt={item.strCategoryThumb} className=' img-fluid ' /></Link>
                        <h2>{item.strCategory}</h2>
                    </div>
                    </div>
                ))
            }
             
    </div>
    
  )
}
