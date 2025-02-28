import React from 'react'

const OurServices = () => {
  return (
    <div className="pt-14 sm:pt-20 pb-6 sm:pb-20 justify-items-center">
        <div className="text-2xl font-semi-bold font-kanit text-white pb-1 mb-10 border-b-4 border-indigo-500">
            <h1>Our Services</h1>
        </div>
        {/* <div className="flex justify-around bg-white text-black tracking-wider py-2 px-4 sm:px-10 md:px-20 lg:px-30 xl:px-60 w-full overflow-x-auto"> */}
        <div className="grid justify-items-center grid-cols-1 sm:grid-cols-4 sm:bg-white text-white sm:text-black tracking-wider px-4 sm:px-10 md:px-20 lg:px-30 xl:px-60 w-full"> 
          <div className="flex items-center">
            <a href="https://www.flaticon.com/free-icons/marriage" title="marriage icons" target="_blank"><img className="h-7 w-7" src="https://res.cloudinary.com/dtdggyp4t/image/upload/v1740631348/rings_zoeuhw.png"/></a>
            <p className="hover:text-indigo-500 my-3 p-2">Engagement</p>
          </div>
          <div className="flex items-center">
            <a href="https://www.flaticon.com/free-icons/marriage" title="marriage icons" target="_blank"><img className="h-8 w-8" src="https://res.cloudinary.com/dtdggyp4t/image/upload/v1740631002/wedding_fa9nlx.png"/></a>
            <p className="hover:text-indigo-500 my-3 p-2 whitespace-nowrap">Pre-wedding</p>
          </div>
          <div className="flex items-center">
            <a href="https://www.flaticon.com/free-icons/wedding" title="wedding icons" target="_blank"><img className="h-6 w-8" src="https://res.cloudinary.com/dtdggyp4t/image/upload/v1740627307/hindu-wedding_i0ft7q.png"/></a>
            <p className="hover:text-indigo-500 my-3 p-2">Wedding</p>
          </div>
          <div className="flex items-center">
            <a href="https://www.flaticon.com/free-icons/pregnant" title="pregnant icons" target="_blank"><img className="h-7 w-7" src="https://res.cloudinary.com/dtdggyp4t/image/upload/v1740631650/mother_n1yzam.png"/></a>
            <p className="hover:text-indigo-500 my-3 p-2">Maternity</p>
          </div>        
        </div>
    </div>
  )
}

export default OurServices