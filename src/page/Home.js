import React from 'react'
import Layout from '../component/layout/Layout'
import Banner from '../images/banner.jpeg'
import '../style/HomeStyle.css'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <Layout>
      <div className="home" style={{backgroundImage: `url(${Banner})`}}>
        <div className="headContainer">
           <h1>Food Website</h1>
           <p>Best Food in Peshawar</p>
           <Link to='/menu' >
             <button>ORDER NOW</button>
           </Link> 
        </div>
      </div>
    </Layout>
  )
}

export default Home
