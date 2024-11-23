import React, { useState, useEffect } from 'react'
import crossBanner from '../assets/bannerImages/cross banner.webp'
import citadelBanner from '../assets/bannerImages/citadel banner.webp'
import exhumaBanner from '../assets/bannerImages/exhuma banner.webp'
import legendsBanner from '../assets/bannerImages/legends banner.webp'

function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const banners = [
    { image: crossBanner, alt: "Cross Banner" },
    { image: citadelBanner, alt: "Citadel Banner" },
    { image: exhumaBanner, alt: "Exhuma Banner" },
    { image: legendsBanner, alt: "Legends Banner" }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === banners.length - 1 ? 0 : prev + 1))
    }, 3000)
    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => {
    setCurrentSlide(currentSlide === banners.length - 1 ? 0 : currentSlide + 1)
  }

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? banners.length - 1 : currentSlide - 1)
  }

  return (
    <div className=' h-[100vh] '>
      <section className="relative h-[150px] lg:h-[500px] ">
        <div className="relative h-full w-full">
          {banners.map((banner, index) => (
            <div
              key={index}
              className={`absolute h-full w-full transform transition-all duration-500 ease-in-out ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img
                src={banner.image}
                alt={banner.alt}
                className="lg:h-full lg:w-full  lg:object-cover"
              />
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white hover:bg-black/75"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white hover:bg-black/75"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Dots Navigation */}
        <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
          {banners.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2 w-2 rounded-full transition-all ${
                index === currentSlide ? 'bg-white w-4' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </section>
    </div>
  )
}

export default HomePage
