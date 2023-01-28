import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { RestaurantsContext } from '../context/RestaurantsContext'
import ResturantFinder from '../apis/ResturantFinder'
import StarRating from '../components/StarRating'



const RestaurantDetailPage = () => {
  const { id } = useParams()
  const { selectedRestaurant, setSelectedRestaurant } = useContext(RestaurantsContext);


  useEffect(() => {
    const fetchData = async () => {
      try {
      const response = await ResturantFinder.get(`/${id}`);
      setSelectedRestaurant(response.data.data.restaurant)
      }catch(err){
        console.log(err)
      }


    }
    fetchData()
  },[])















  return (
    <div>
      {selectedRestaurant && <StarRating rating={3}/>  }
    </div>
  )
}

export default RestaurantDetailPage
