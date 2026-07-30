import { ArrowRight, Command } from "lucide-react"


const HeroSection = () => {
  return (
    <section className="relative container mx-auto px-4 pt-40 pb-20">
        {/* Decorative: Sub-Title */}

        <div className="flex w-fit py-2 mb-4 px-4 cursor-pointer
                rounded-full glass">
            <span className="text-sm font-medium text-zinc-300">
                <Command className="w-4 h-4 inline-block mr-2"/>
                Next-gen Forex Trading Platform
            </span>
        </div>

        {/* Hero Text */}

        <div className="max-w-4xl relative z-10">
            {/* Heading */}
            <h1 className="text-5xl md:text-7xl mb-4 tracking-tight text-left">
                <span className="clash-display grad1">
                    Trade Forex with
                </span>
                <br />
                <span className="text-zinc-50 font-medium">
                    Confidence & Security
                </span>
            </h1>

            {/* Para */}
            <p className="text-lg text-zinc-300/80 mb-8 max-w-2xl text-left">
                Experience seamless forex trading with advanced features, real=time 
                analytics, and institutional-grade security.

                <span className="text-zinc-200">
                    Start trading in minutes.
                </span>
            </p>

            {/* Buttons */}
            <div className="col sm:flex-row gap-4 items-start">
                <button className="bg-blue-500 text-base clash-display
                px-4 py-3 rounded-full cursor-point hover:-translate-y-1
                transition2 hover:bg-blue-500/20">
                    Star Trading Now
                </button>

                <button className="text-zinc-50 text-base clash-display glass
                px-4 centered-row gap-2 py-3 rounded-full cursor-pointer
                hover:-translate-y-1 transition2 hover:bg-blue-500/20">
                    View Markets <ArrowRight className=""/>
                </button>
            </div>

        </div>

        {/* Hero Image: UI Image */}

        <div className="relative mx-auto max-w-5xl mt-20">
            <div className="glass rounded-xl overflow-hidden">
                <img src="/chart2.png" alt="hero_image" className="w-full h-auto" />
            </div>
        </div>

        {/* ---END SECT--- */}
    </section>
  
)}

export default HeroSection