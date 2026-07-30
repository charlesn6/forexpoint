
const FeaturesSection = () => {
  return (
    <section className="container mx-auto px-4 py-24">
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

            <p className="">
                Experience professional-grade trading tools and features
                designed for both novice and experienced crypto traders.
            </p>
        </div>

        {/* Features Content */}
        <div className="">
            <div className="">
                {/* Left: Tab Triggers */}
                <div className="">
                    {/* Icon */}
                    <div className=""></div>
                    {/* Content */}
                    <div className="">
                        <h3 className="">
                            Feature Title
                        </h3>

                        <p className="">
                            Lorem ipsum dolor sit amet consectetur,
                            adipisicing elit. Mollitia consectetur 
                            ut aspernatur vitae optio impedit.
                        </p>
                    </div>

                </div>
                {/* Right: Tab Images*/}
                <div className="">
                    <div className="">

                    </div>
                </div>

            </div>
        </div>
    </section>
  )
}

export default FeaturesSection;