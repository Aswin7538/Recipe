import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
import axios from 'axios'
import './Main.css'
import img1 from './image/main.jpg'
import { Link } from 'react-router-dom';




export const Main = () => {
  const [data,setData]=useState([])
    
    const [isLoading, setIsLoading] = useState(true);
   
    useEffect(()=>{
        const fetchData= async()=>{
            try {
                const response = await axios.get('https://www.themealdb.com/api/json/v1/1/categories.php');
                setData(response.data);
                console.log(response.data); 
                setIsLoading(false);
            } catch (error) {
                console.error('Error fetching data:', error);
                setIsLoading(false);
            }
        };
        fetchData()
        
    },[])

  return (
    <div>
           <div className="container-fluid">
      <div className="row">
        <div className="col-12 background-container" style={{backgroundImage: `url(${img1})`}}>
          <div className="overlay-text">
            <h1>Find recipes for every occasion <br />
                       cCooking never was easier</h1>
            <button>FIND YOUR RECIPES</button>
          </div>
        </div>
      </div>
    </div>
          

           <div className='cat'>Catogories</div>

                   <div className='d-flex  flex-wrap align-items-center justify-content-center mt-3  '>
      {data.categories && data.categories.length > 0 ? (
          data.categories.map((categories, index) => (
             <Link className='text-decoration-none ' to={`/detials/${categories.strCategory}`}> <Card  className='  m-3 ' key={index} style={{ width: '18rem' }}>
      <Card.Img className='image-card' variant="top" src={categories.strCategoryThumb} />
      <Card.Body>
        <Card.Title className='text-center '>{categories.strCategory}</Card.Title>   
       
      </Card.Body>
    </Card> </Link>
  ))
  ) : (
      <p><div className='loading-spinner'>
        </div></p>
      )}
    </div>
      </div>
           

          

            
  
  )
}
