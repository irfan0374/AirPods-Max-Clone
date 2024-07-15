import React, { useLayoutEffect, useRef } from 'react';
import Navbar from './component/Navbar';
import airpods from './assets/airpods.png';
import airpods2 from './assets/airpods2.png';
import image1 from './assets/image1.jpeg';
import air1 from './assets/air1.png';
import air2 from './assets/air2.png';
import air3 from './assets/air3.png';
import air4 from './assets/air4.png';
import air5 from './assets/air5.jpeg';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import 'tailwindcss/tailwind.css'; // Ensure you have Tailwind CSS set up

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  const ref = useRef(null);
  const airpods2Ref = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const t1 = gsap.timeline({
        scrollTrigger: {
          trigger: ".two",
          start: "5% 45%", // Trigger animation when top of .two is 95% from the top of viewport
          end: "45% 100%", // End animation when top of .two is 50% from the top of viewport
          scrub: true,
          // markers: true // Enable markers for debugging
        }
      });
      t1.to("#airpods", {
        y: 470, // Move down by pixels
        x: 300, // Move right by pixels
        scale: 0.8, // Scale down to 90% of original size
        duration: 2, // Animation duration in seconds
        rotate: 25,
        ease: "power2.inOut" // Use a strong easing function for quick acceleration
      });


      t1.to("#airpods", {
        y: 1000, // Move down by pixels
        x: 40, // Move right by pixels
        scale: 1, // Scale down to 90% of original size
        duration: 0.3, // Animation duration in seconds
        rotate: 0,
        ease: "back.inOut" // Use a strong easing function for quick acceleration
      }, "airpods");


      if (airpods2Ref.current) {
        const t2 = gsap.timeline({
          scrollTrigger: {
            trigger: ".five",
            start: "55% 75%",
            end: "80% 100%",
            scrub: true,

          }
        });
        t2.to(airpods2Ref.current, {
          y: 240,
          x: 500,
          scale: 1.5,
          duration: 2,
          rotate: 16,
          ease: "power2.inOut"
        });
        t2.to(airpods2Ref.current, {
          y: 560,
          x: -1,
          scale: 1.1,
          duration: 2,
          rotate: 12,
          ease: "power2.inOut"
        });

      }
    }, ref);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <div className='overflow-hidden'>
        <Navbar />
        <div className="h-screen bg-white relative one" ref={ref}>
          <div className="relative flex w-full">
            <img id='airpods' className="w-[460px] h-[460px] items-center justify-center z-10 ml-96" src={airpods} alt="AirPods Max" />
            <h1 className="absolute top-16 left-5 text-12xl font-bold tracking-tight z-0">
              AirPods Max
            </h1>
          </div>
        </div>

        <div className='two h-96 '>

          <div className='flex flex-col'>
            <div className='w-[600px] mx-12 my-7'>
              <h1 className='font-bold text-2xl'>Design</h1>
              <h1 className='text-6xl font-bold'>A radically original composition.</h1>
              <h1 className='my-7 w-[500px]'> The over-ear headphone has been completely reimagined. From cushion to canopy, AirPods Max are designed for an uncompromising fit that creates the optimal acoustic seal for many different head shapes — fully immersing you in every sound.</h1>
            </div>
          </div>
        </div>


        <div className='three h-[600px] '>
          <h1 className='ml-[600px] w-[600px] font-semibold'>The beautifully anodised aluminium cups feature a revolutionary mechanism that allows each cup to rotate independently and balance pressure.</h1>
        </div>

        {/* second screen */}
        <div className='h-[300px] bg-black '>
          <div className='flex flex-col-2 justify-between mx-24 pt-12 '>
            <div className='flex'>
              <img className='w-46 h-56' src={air4} alt="" />
              <img ref={airpods2Ref} id='airpods2' className='w-46 h-56' src={airpods2} alt="" />
            </div>
            <div>
              <h1 className='font-bold text-white text-4xl my-14'><span className='text-gray-400'>Super</span> Performance</h1>
            </div>
          </div>
        </div>
        <div className='  h-[300px] bg-black five '>
          <div className='w-[600px] mx-12'>
            <h1 className='text-white text-2xl font-bold py-24'><span className='text-gray-600'>A custom-designed</span> mesh textile wraps the ear cushions to provide pillow-like softness while listening.</h1>
          </div>
        </div>
        <div className='h-screen bg-white flex flex-col mt-4'>
          <div className='flex'>
            <img className='w-[600px] h-[500px] object-contain' src={image1} alt="" />
            <img className='w-[600px] h-[500px] object-contain' src={air5} alt="" />
          </div>
        </div>
        {/* footer */}
<div >


        <div className='bg-gray-200 h-96 rounded-lg ' >
          <div className='flex '>
            <div className=' w-96 m-20'>
              <h1 className='text-3xl font-bold font-mono mb-7 '>Magical Experience</h1>
              <p className='font-thin'><span className='font-extrabold text-4xl font-serif '>20</span> hours of listening, movie watching or talk time — with Active Noise Cancellation and Spatial Audio enabled.5 Simply charge via Lightning connector. A quick 5-minute charge delivers 1.5 hours of listening.6</p>
              <button className='border border-gray-400 px-1 rounded-full mx-28 mt-5 font-mono text-sm'>Buy Now</button>
            </div>
            <div className='ml-32'>
              <img className='h-[350px] w-[350px]  ' src={air2} alt="" />
            </div>
          </div>
        </div>

      </div>
</div>
    </>
  )
}

export default App
