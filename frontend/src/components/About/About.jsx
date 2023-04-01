import React from 'react'
import aboutImg from '../../assets/about-img.jpg'

const About = () => {
  return (
    <div className='about mt-20 py-20' id='about'>
      <div className='mb-10 flex flex-col items-center justify-center '>
            <h1 className="sm:text-3xl text-4xl  font-medium title-font text-center text-gray-900 my-3">About Us
            </h1>
            <div className='w-1/5 my-1 bg-blue-500 h-1 rounded-md '></div>
            <div className='w-[10%] my-1 bg-red-500 h-1 rounded-md '></div>
          </div>

      <div className='my-5 flex flex-col md:flex-row  justify-center'>
        <div className="left flex justify-center items-center md:w-[40%]">
          <img src={aboutImg} alt="aboutImg" className='rounded-full w-[40%]' />
        </div>
        <div className="right px-3 text-justify md:w-[50%]">
          <p className='my-5'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat quae hic ipsum magnam, quasi ducimus dolorum et! Voluptates itaque possimus enim soluta voluptate unde vel inventore eos iste cupiditate dicta nostrum, voluptatem odio ab ratione expedita excepturi reprehenderit temporibus reiciendis maiores laborum! Quas, et nobis?
          </p>
          <p className='my-5'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut, voluptas ipsam eos optio magni cum, nihil dolore eius quas aliquam nam tenetur doloribus?
          </p>
          <p className='my-5'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut, voluptas ipsam eos optio magni cum, nihil dolore eius quas aliquam nam tenetur doloribus?
          </p>
        </div>

      </div>
    </div>
  )
}

export default About