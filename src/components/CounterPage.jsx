import React, { useState } from 'react'
import CountUp from 'react-countup'
import { useInView } from 'react-intersection-observer';

const CounterPage = () => {
    const[counterState, setCounterState] = useState(false);
    const { ref, inView } = useInView();

  return (
    <div ref={ref} className="px-10 sm:px-5 md:px-10 lg:px-20 py-2 sm:py-10">
            <div className="grid grid-cols-1 sm:grid-cols-3 text-center md:px-20 lg:px-30 xl:px-40 py-10">
                <div className="justify-items-center pb-10">
                    <h2 className="text-5xl lg:text-6xl font-extrabold text-white">
                        {inView && <CountUp start={0} end={17} duration={2.75}></CountUp>}+
                    </h2>
                    <p className="whitespace-nowrap py-2 text-[#595959] font-medium">Years of experience</p>
                </div>
                <div className="justify-items-center pb-10">
                    <h2 className="text-5xl lg:text-6xl font-extrabold text-white">
                        {inView && <CountUp start={0} end={550} duration={2.75}></CountUp>}K
                    </h2>
                    <p className="whitespace-nowrap py-2 text-[#595959] font-medium">pictures and videos</p>
                </div>
                <div className="justify-items-center">
                    <h2 className="text-5xl lg:text-6xl font-extrabold text-white">
                        {inView && <CountUp start={100} end={500} duration={2.75}></CountUp>}+
                    </h2>
                    <p className="whitespace-nowrap py-2 text-[#595959] font-medium">Satisfied Client</p>
                </div> 
            </div>
    </div>
  )
}

export default CounterPage