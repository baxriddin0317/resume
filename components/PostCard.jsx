'use client'
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper/modules';
import Image from 'next/image';
import Link from 'next/link';

export const PostCard = ({post}) => {
  
  return (
    <div data-aos="fade-up" className='rounded-25 border border-brand-gray-200/50 overflow-hidden w-full'>
      <Swiper 
        navigation={{
          prevEl: '.prev',
          nextEl: '.next',
        }} 
        modules={[Navigation]} 
        className="relative group w-full h-[400px] sm:h-[600px] lg:h-[900px] "
      >
        {post.images.map((img,idx) => (
          <SwiperSlide className='relative' key={idx}>
            <Image className="absolute object-cover w-full h-full" fill src={img} alt={post.title} />
          </SwiperSlide>
        ))}
        
        {/* prev */}
        <button className='group-hover:left-2 -left-10 absolute top-1/2  -translate-y-1/2 w-10 h-10 bg-brand-gray flex items-center justify-center rounded-full z-30 transition-all duration-700 ease-out prev'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </button>
        {/* next */}
        <button className='group-hover:right-2 absolute top-1/2 -right-10 -translate-y-1/2 w-10 h-10 bg-brand-gray flex items-center justify-center rounded-full z-30 transition-all duration-700 ease-out next'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </button>
      </Swiper>

      <div className='flex flex-col gap-4 md:gap-6 py-5 md:py-9 px-3 sm:px-6 md:px-12 bg-white'>
        <h2 className='text-brand-blue md:text-xl !leading-6 font-black uppercase'>
        {post.title}
        </h2>

        {/* points */}
        <div className='flex flex-col gap-1 pl-4 md:pl-8'>
          {post.points.map((point,idx) => (
            <p key={idx} className='text-sm md:text-xl !leading-6 !tracking-normal text-brand-black point'>
              {point.item}
            </p>
          ))}
        </div>

        {/* description */}
        <div>
          <p className='text-sm md:text-xl !leading-6 text-brand-black '>{post.description}</p>
        </div>

        {/* links */}
        <div>
          {post.links.map((link,idx) => (
            <Link key={idx} className='flex items-center gap-0.5 hover:text-brand-blue' href={link.href}>
              <span>&#62;</span>
              <span>{link.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}