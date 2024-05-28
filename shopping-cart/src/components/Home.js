import React from 'react'
import { CartState } from '../context/Context'
import SingleProduct from './SingleProduct';
import "./styles.css"
import Filters from './Filters';

const Home = () => {

  const { state: {products:{items}} } = CartState();
  console.log(items)
  return (
    <div className='home'>
      <Filters/>
      <div className='productContainer'>
        {
          items.map((prod) => {
            return <SingleProduct prod = {prod} key={prod.id}/>
          })
        }
      </div>
    </div>
  )
}

export default Home