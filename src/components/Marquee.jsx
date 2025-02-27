import React from 'react'
import { motion } from 'framer-motion';


const Marquee = () => {

  const images = [
    "https://res.cloudinary.com/dtdggyp4t/image/upload/v1740642270/12_ad36gh.jpg",
    "https://res.cloudinary.com/dtdggyp4t/image/upload/v1740642229/03_sbuzye.jpg",
    "https://res.cloudinary.com/dtdggyp4t/image/upload/v1740559579/RUP_0673_fr7wvy.jpg",
    "https://res.cloudinary.com/dtdggyp4t/image/upload/v1740642351/24_knfkvr.jpg",
    "https://res.cloudinary.com/dtdggyp4t/image/upload/v1740642319/20_ovmqpz.jpg",
    "https://res.cloudinary.com/dtdggyp4t/image/upload/v1740642259/10_hwlhv1.jpg",
    "https://res.cloudinary.com/dtdggyp4t/image/upload/v1740559614/3V1A4563_hkppqn.jpg",
    "https://res.cloudinary.com/dtdggyp4t/image/upload/v1740642330/21_w3qwen.jpg",
    "https://res.cloudinary.com/dtdggyp4t/image/upload/v1740642248/09_loh680.jpg",
    "https://res.cloudinary.com/dtdggyp4t/image/upload/v1740642186/05_zpcj4b.jpg",
    "https://res.cloudinary.com/dtdggyp4t/image/upload/v1740642284/16_p8m8ya.jpg",
    "https://res.cloudinary.com/dtdggyp4t/image/upload/v1740560947/3V1A4583_1_rlvn02.jpg",
    "https://res.cloudinary.com/dtdggyp4t/image/upload/v1740642296/17_aopgqq.jpg", 
    "https://res.cloudinary.com/dtdggyp4t/image/upload/v1740642342/23_nxoa9g.jpg",
    "https://res.cloudinary.com/dtdggyp4t/image/upload/v1740642306/18_pbbsp3.jpg"
  ].map(url => `${url}?auto=format&fit=crop&w=800&q=80`);


  return (
    <div className='container mx-auto'>
      <div className='flex'>
        <motion.div 
          initial={{x: 0}} 
          animate={{x: "-100%"}} 
          transition={{duration: 80, repeat: Infinity, ease: "linear"}} className='flex flex-shrink-0'>
          {images.map((image, index) => {
            return <img className="h-64 sm:h-80 w-80 sm:w-96 pr-2 aspect-3/2 object-cover" src={image} key={index} />
          })} 
        </motion.div>

        <motion.div 
          initial={{x: 0}} 
          animate={{x: "-100%"}} 
          transition={{duration: 80, repeat: Infinity, ease: "linear"}} className='flex flex-shrink-0'>
          {images.map((image, index) => {
            return <img className="h-64 sm:h-80 w-80 sm:w-96 pr-2 aspect-3/2 object-cover" src={image} key={index} />
          })} 
        </motion.div>
      </div>
    </div>
  )
}

export default Marquee