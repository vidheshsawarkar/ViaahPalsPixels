import { AnimatePresence, motion, useScroll, useTransform } from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react'



const videos = [
  {
    url: "https://res.cloudinary.com/dtdggyp4t/video/upload/v1740555236/000_ya7kbl.mp4",
  },
  {
    url: "https://res.cloudinary.com/dtdggyp4t/video/upload/v1740555194/0112_jrfrwe.mp4",
  },
  {
    url: "https://res.cloudinary.com/dtdggyp4t/video/upload/v1740554599/04_yq11q6.mp4",
  },
  {
    url: "https://res.cloudinary.com/dtdggyp4t/video/upload/v1740655576/VN20250227_165115_vzpwrk.mp4",
  },
];

const headerVariants = {
  hidden: {
    opacity: 0,
    scale: 0.95
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1.2,
      ease: "easeOut",
      staggerChildren: 0.3
    }
  }
};

const VideoCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const videoRefs = useRef(videos.map(() => null));
  const intervalRef = useRef(null);

  const resetInterval = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    intervalRef.current = setInterval(() => {
      moveToNext();
    }, 4000);
  };

  useEffect(() => {
    resetInterval();
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [currentIndex]);

  useEffect(() => {
    // Play current video and pause others
    videoRefs.current.forEach((videoRef, index) => {
      if (videoRef) {
        if (index === currentIndex) {
          videoRef.currentTime = 0;
          videoRef.play().catch(err => console.log("Video play error:", err));
        } else {
          videoRef.pause();
        }
      }
    });
  }, [currentIndex]);

  const moveToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % videos.length);
  };

  const moveToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + videos.length) % videos.length);
  };

  const goToIndex = (index) => {
    setCurrentIndex(index);
  };

  const scrollToContact = () => {
    const footer = document.querySelector('footer');
    if (footer) {
      footer.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const {scrollY} = useScroll();

  const scale = useTransform(scrollY, [0, 300], [1, 0.95]);

  return (
    <motion.div style={{scale}} className="relative w-full h-[40vh] sm:h-[76vh] xl:h-[96vh] mx-auto overflow-hidden aspect-video">
      {/* Videos */}
      <div className="relative w-full h-full">
        <AnimatePresence initial={false}>
          {videos.map((video, index) => (
            <motion.div
              key={video.url}
              className={`absolute inset-0 ${index === currentIndex ? 'z-10' : 'z-0'}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: index === currentIndex ? 1 : 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <video
                ref={el => videoRefs.current[index] = el}
                className="w-full h-full object-cover"
                src={video.url}
                muted
                playsInline
                loop
              >
                <source src={video.url} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="absolute bottom-0 left-0 right-0 p-4">
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Navigation Arrows */}
      {/* <button
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 px-1 sm:px-3 py-0 sm:py-2 text-white bg-black/50 rounded-full hover:bg-black/70 transition-colors"
        onClick={() => {
          moveToPrev();
          resetInterval();
        }}
      >
        ←
      </button>
      <button
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 px-1 sm:px-3 py-0 sm:py-2 text-white bg-black/50 rounded-full hover:bg-black/70 transition-colors"
        onClick={() => {
          moveToNext();
          resetInterval();
        }}
      >
        →
      </button> */}

      <motion.div
        initial={{ opacity: 0, x: 0 }}
        animate={{ opacity: 1, x: 20 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="absolute top-1 sm:top-2 md:top-3 z-20 px-0 py-1 sm:py-2 md:py-2">
          <img className="h-4 sm:h-8 md:h-12" src="https://res.cloudinary.com/dtdggyp4t/image/upload/v1740555995/viaahpals_png_xwachl.png" />
      </motion.div>

      <motion.button
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="absolute top-2 sm:top-4 md:top-6 right-5 sm:right-4 md:right-6 z-20 text-[8px] sm:text-sm md:text-base px-2 sm:px-5 md:px-6 py-1 sm:py-2 md:py-2 bg-white hover:bg-white/40 hover:text-white text-black rounded-full backdrop-blur-sm"
        onClick={scrollToContact}
      >
        Contact Us
      </motion.button>

      {/* Navigation Dots */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-20">
        {videos.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex 
                ? 'bg-white scale-110' 
                : 'bg-white/50 hover:bg-white/70'
            }`}
            onClick={() => {
              goToIndex(index);
              resetInterval();
            }}
            aria-label={`Go to video ${index + 1}`}
          />
        ))}
      </div>
      <div className="absolute animate-fade top-3/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10" >
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-semibold whitespace-nowrap font-Satisfy md:mb-2 text-white text-center">
          Viaah Pals & pixels
        </h1>
        <p className="text-xs sm:text-base md:text-lg text-gray-100 tracking-widest max-w-2xl font-light mx-auto px-4 text-center"
        >
          Exploring the world through the lens of artistic photography
        </p>
      </div>
    </motion.div>
  );
}

export default VideoCarousel