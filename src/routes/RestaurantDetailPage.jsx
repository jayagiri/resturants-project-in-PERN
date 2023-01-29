import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { RestaurantsContext } from '../context/RestaurantsContext'
import ResturantFinder from '../apis/ResturantFinder'
import StarRating from '../components/StarRating'

import Reviews from '../components/Reviews'
import AddReview from '../components/AddReview'

const RestaurantDetailPage = () => {
  const { id } = useParams()
  const { selectedRestaurant, setSelectedRestaurant } = useContext(RestaurantsContext);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await ResturantFinder.get(`/${id}`);
        setSelectedRestaurant(response.data.data)
      } catch (err) {
        console.log(err)
      }


    }
    fetchData();
  }, []);
  return (
    < div >
      {selectedRestaurant && (
        <>
          <div className="mt-3">
            <Reviews reviews={selectedRestaurant.reviews}/>
          </div>
          <AddReview/>
        </>
      )} 
    </div >

  )
};

export default RestaurantDetailPage;
