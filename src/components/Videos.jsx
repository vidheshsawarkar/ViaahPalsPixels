import React from 'react'
import { motion } from 'framer-motion';


const videos = [
    "https://www.youtube.com/embed/tlpBW7CcdOo?si=P5ZU26UitnErS-lW",
    "https://www.youtube.com/embed/StMyd9UppYY?si=tf6zf1WAK5HyUHk8",
    "https://www.youtube.com/embed/efeQSWpA6Z8?si=zJ1MsTNrvHw5gThC",
    "https://www.youtube.com/embed/Etfxrj-69nY?si=mROQGVc3pHEZl6Dy",
    "https://www.youtube.com/embed/csMFPbrYwas?si=rZGoEGqLv0GR1af1",
    "https://www.youtube.com/embed/qrcWhbOXWhM?si=DdLKVFZDk4uQAPkt",
  ];
const Videos = () => {
  return (       
    <div>
        <motion.div
         className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 px-5 py-10 bg-white">
          {videos.map((video) => (
            <div key={video.id} className="aspect-video overflow-hidden">
              <div className="relative pb-[56.25%] h-0">
                <iframe
                  src={video}
                  title={video.title}
                  className="absolute top-0 left-0 w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          ))}
        </motion.div>
    </div>

  )
}

export default Videos