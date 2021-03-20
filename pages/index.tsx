import React from 'react'
import Header from '../components/Header'
import BuildingSearch from '../components/BuildingSearch'
import Head from 'next/head'

const Home: React.FC = () => {
  return (
    <div className="flex flex-col h-screen">
      <Head>
        <script async src="https://maps.googleapis.com/maps/api/js?key=&libraries=places"></script>
        <link
          href="https://fonts.googleapis.com/css?family=Montserrat:100,200,300"
          rel="stylesheet"
        ></link>
      </Head>
      <Header />
      <BuildingSearch />
    </div>
  )
}

export default Home
