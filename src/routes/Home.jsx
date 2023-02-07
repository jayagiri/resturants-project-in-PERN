import React from 'react'
import AddRestaurant from '../components/AddRestaurant'
import Header from '../components/Header'
import Login from '../components/Login'
import RestaurantsList from '../components/RestaurantsList'
const Home = () => {
  return (
    <div>
      <Login/>
      <Header/>
      <AddRestaurant/>
      <RestaurantsList/>
    </div>
  )
}

export default Home
