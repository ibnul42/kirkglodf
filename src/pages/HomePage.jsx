import React from 'react'
import Authentication from '../components/Authentication'
import Header from '../components/Header'
import InfoContact from '../components/InfoContact'

function HomePage() {
  return (
    <div className="h-fit w-fit flex flex-col overflow-hidden">
        <div className="px-10 md:px-20 lg:px-32 flex flex-col">
            <Header />
            <Authentication />
            {/* <InfoContact /> */}
        </div>
    </div>
  )
}

export default HomePage;