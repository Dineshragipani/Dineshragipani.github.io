import React, { useRef } from 'react'
import Card from '../components/Card'
import { Globe } from '../components/globe';
import CopyEmailButton from '../components/CopyEmailButton';
import { Frameworks } from '../components/Frameworks';


const About = () => {
  const grid2Container = useRef();
  return (
    <section className='c-space section-spacing'>
        <h2 className='text-heading'>
            About me
        </h2>
        <div className='grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12'>

          {/*Grid View 1*/}
          <div className='flex items-end grid-default-color grid-1'>
            <img src='assets/coding-pov.png' className='absolute scale-[1.75] -right-[5rem] -top-[1rem] md:scale-[3] md:left-50 md:inset-y-10 lg:scale-[1.6]'/>
            <div className='z-10'>
              <p className='headtext'>Hi, I am Dinesh Ragipani</p>
              <p className='subtext'>
                I developed the frontend and backend development skill
                to deliver dynamic software and web applications.
              </p>
            </div>
            <div className='absolute inset-x-0 pointer-events-none -bottom-4 h-1/2 sm:h-1/3 bg-gradient-to-t from-indigo'/>
          </div>

          {/**Grid view 2 */}
          <div  className='flex items-end grid-default-color grid-2'>
            <div ref={grid2Container} className='flex items-center justify-center w-full h-full'>
              <p className='flex items-end text-5xl text-gray-500'>
                CODE IS CRAFT
              </p>
              <Card style={{rotate:'40deg', top:"30%", left:"20%" }} containerRef={grid2Container} text="GRASP"/>
              <Card style={{rotate:'-30deg', top:"60%", left:"45%" }} containerRef={grid2Container} text="SOLID"/>
              <Card style={{rotate:'90deg', top:"30%", left:"70%" }} containerRef={grid2Container} text="Design Patterns"/>
              <Card style={{rotate:'45deg', top:"55%", left:"0%" }} containerRef={grid2Container} text="Design Principles"/>
              <Card style={{rotate:'20deg', top:"10%", left:"30%" }} containerRef={grid2Container} text="UI"/>
              <Card style={{rotate:'20deg', top:"10%", left:"30%" }} containerRef={grid2Container} text="UI" image="assets/logos/ "/>
              <Card style={{rotate:"30deg", top:"70%" ,left:"70%"}} containerRef={grid2Container} image="assets/logos/csharp-pink.png"/>
              <Card style={{rotate:"-50deg", top:"80%" ,left:"25%"}} containerRef={grid2Container} image="assets/logos/dotnet-pink.png"/>
              <Card style={{rotate:"-45deg", top:"5%" ,left:"10%"}} containerRef={grid2Container} image="assets/logos/blazor-pink.png"/>
            </div>
          </div>

          {/*Grid view 3 */}
          <div className='relative flex items-end grid-black-color grid-3 min-h-[300px]'>
            <div className='z-10 w-[40%]'>
              <p className='headtext'> Excited and Hobbies </p>
              <p className='subtext'>I am very enthusiast about the animations and building one of those is my exciting works that I will be doing.
                I like to develop the responsive and animative websites. 
                Which are very cozy and grand to look.
              </p>
            </div>
            <figure className='absolute left-[45%] top-[5%] w-[300px] h-[300px]'>
              <Globe/>
            </figure>
          </div>

          {/**Grid view 4 */}
          <div className='flex items-center grid-special-color grid-4'>
            <div className='flex flex-col items-center  justify-center gap-3 size-4/2'>
              <p className='flex text-center headtext'>Do you want to start a beautiful project together?</p>
              <CopyEmailButton/>
            </div>
          </div>

          {/**Grid view 5 */}
          <div className='flex items-end grid-default-color grid-5'>
            <div className='z-10 w-[50%]'>
              <p className='headtext'>Tech Stack</p>
              <p className='subtext'> I am specialize in many languages, frameworks and tools that allow me to build robust and scalable applications.</p>
            </div>
            <div className='absolute inset-y-0 md:inset-y-9 w-full h-full start-[130px] md:scale-125'>
              <Frameworks/>
            </div>
          </div>
        </div>
    </section>
  )
}

export default About