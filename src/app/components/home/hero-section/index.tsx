import Image from "next/image"

const index = () => {
    return (
        <section className="relative hero-section overflow-hidden pt-35 md:pt-40 pb-12 lg:pb-30 xl:pt-52">
            <div className="container">
                <div className="lg:flex grid grid-cols-1 sm:grid-cols-2 gap-7 md:gap-4 items-center">
                    <div className="flex flex-col gap-4 md:gap-7 max-w-2xl">
                        <div>
                            <div className="flex items-center gap-8">
                                <h1>Hi I'm Moiz</h1>
                                <div className="wave">
                                <Image src={"/images/home/banner/wave-icon.svg"} alt="wave-icon" width={62} height={62} className=""/>
                                </div>
                            </div>
                            <h1>Website Developer</h1>
                            <h3>Wordpress, Shopify, Frontend, SEO</h3>
                        </div>
                        <p className="text-secondary font-normal max-w-md xl:max-w-xl">I ensure businesses flourish by creating websites that are beautiful as fast. More than 6 years of creating the most trusted platforms on the web. I focus on transforming imaginative ideas into high speed, scalable and aesthetically refined digital products enabling companies to be at the forefront in their industry.</p>
                    </div>
                    <Image src={"/images/home/banner/banner-img-moiz.png"} alt="banner-img" width={685} height={650} className="block lg:hidden" />
                </div>
            </div>
            <div className="absolute right-0 top-0 hidden h-auto w-1/2 lg:block 2xl:h-171.5 2xl:w-187.5">
                <Image src={"/images/home/banner/banner-img-moiz.png"} alt="banner-img" width={685} height={650} className=" absolute right-0 top-0 z-1" />
            </div>
        </section>
    )
}

export default index