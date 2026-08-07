import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion"
import { features } from "../assets/data"

const FeaturesSection = () => {

    const [activeIndex, setActiveIndex] = useState(0)
    const [isPaused, setIsPaused] = useState(false)

    const intervalRef = useRef(null)

    // Auto Playing
    useEffect(()=>{
        if (!isPaused) {
            intervalRef.current = setInterval(() => {
                setActiveIndex((prev) => (prev + 1) % features.length);
            }, 4000)
        }

        return () => clearInterval(intervalRef.current)

    },[isPaused])


    // If user hovers, pause auto
    const handleHover = (index) => {
        setIsPaused(true)
        setActiveIndex(index)
    }

    const handleLeave = () => {
        setIsPaused(false)
    }




  return (
    <section id="features" className="container mx-auto scroll-mt-24 px-4 py-24">
        {/* Title */}
        <div className="max-w-2xl mb-20">
            <h2 className="text-5xl md:text-6xl mb-6 tracking-tight 
            clash-display text-left">
                Advanced Trading
                <br />
                <span className="font-mediu clash-display grad1">
                    Features & Tools
                </span>
            </h2>

            <p className="text-lg text-zinc-300/80 text-left">
                Experience professional-grade trading tools and features
                designed for both novice and experienced crypto traders.
            </p>
        </div>

        {/* Features Content */}
        <div className="w-full">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
                {/* Left: Tab Triggers */}
                <div className="md:col-span-5 space-y-3">
                    <div className="col w-full h-auto p-0 space-y-3">


                        {features.map((feature, index) => (
                        <div
                                key={index}
                                onMouseEnter={() => handleHover(index)}
                                onMouseLeave={handleLeave}
                                onClick={() => setActiveIndex(index)}



                                className={`flex items-center cursor-pointer gap-4 
                                    hover:bg-blue-500/10 p-3 transition-all duration-300 
                                    ease-out border rounded-xl ${
                                        activeIndex === index 
                                        ? "border-blue-400/40 bg-blue-500/10" 
                                        : "border-transparent"
                                    }`}
                            >
                            {/* Icon */}
                            <div className="">
                                {feature.icon}
                            </div>

                            {/* Content */}
                            <div className="col gap-1">
                                <h3 className="text-base clash-display text-blue-200">
                                    {feature.title}
                                </h3>

                                <p className="text-sm text-zinc-300/80">
                                    {feature.description}
                                </p>
                            </div>
                        </div>
                        ))}

                        
                    </div>    
                </div>
                {/* right: Tab Images */}
                <div className="md:col-span-7 min-h-[320px] centered-row">

                    <AnimatePresence mode="wait">
                        <motion.div 
                            key={features[activeIndex].title}
                            initial={{ 
                                opacity: 0, y:60
                            }}
                            animate={{ 
                                opacity: 1, y:0 
                            }}
                            exit={{ opacity: 0, x:-60}}
                            transition={{ duration: 0.5, ease: "easeInOut"}}
                            className="glass rounded-xl overflow-hidden w-full relative">
                            <div className="inset-0 bg-gradient-to-br
                                from-blue-500 to-transparent">
                                <img 
                                    src={features[activeIndex].image}
                                    alt="feature_image"
                                    className="w-full h-full object-contain relative z-10" 
                                />
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>





            </div>
        </div>
    </section>
  )
}

export default FeaturesSection;
