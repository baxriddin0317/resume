import Image from 'next/image'
import React from 'react'
import Profile from "@/public/img/profile-img.png"
import { GithubIcon, LinkednIcon, MailIcon, SmsIcon, TwitterIcon } from '@/public/icons'
import Link from 'next/link'

export const Head = () => {
  return (
    <div className='max-w-7xl mx-auto px-5 lg:px-10' id='top'>
      <div className='space-y-12 md:px-12'>
        {/* profile descriptions */}
        <div  className='flex flex-col sm:flex-row items-center sm:items-stretch gap-5 md:gap-12'>
          <div data-aos="fade-up" className='relative overflow-hidden w-[204px] h-[252px] rounded-25'>
            <Image className='absolute w-full h-full object-cover' src={Profile} alt='profile img' fill />
          </div>
          {/* content */}
          <div data-aos="fade-up" className='flex-1 flex flex-col gap-4 justify-between'>
            {/*  */}
            <div className='relative'>
              <span>
                <SmsIcon />
              </span>
              <span className='absolute top-3.5 left-5 text-xl font-bold !leading-6 text-white'>Hi, I’m Peter 👋</span>
            </div>
            {/*  */}
            <div className='font-semibold max-w-lg md:pr-10 text-xl !leading-6 text-brand-black'>
              <h3 className=''>I love building products &#62; 3 </h3>
              <p className='mt-6'>
              Throughout my career, I’ve dedicated myself to exploring user behaviours and uncovering market truths.
              </p>
            </div>
            {/* contact links */}
            <div className='flex items-center gap-5'>
              <Link href={'#'}>
                <TwitterIcon />
              </Link>
              <Link href={'#'}>
                <GithubIcon />
              </Link>
              <Link href={'#'}>
                <LinkednIcon />
              </Link>
              <Link href={'#'}>
                <MailIcon />
              </Link>
            </div>
          </div>
        </div>
        {/* profile tab route */}
        <div data-aos="fade-up" className='flex flex-wrap justify-center md:justify-start items-center gap-4'>
          <span className='bg-brand-blue text-center font-bold text-xl !leading-6 text-white uppercase px-30 py-1 rounded-full'>
            timeline
          </span>
          <span className='text-center font-bold text-xl !leading-6 text-brand-black uppercase px-30 py-1 rounded-full'>
            resume
          </span>
          <span className='text-center font-bold text-xl !leading-6 text-brand-black uppercase px-30 py-1 rounded-full'>
            blog post
          </span>
        </div>
      </div>
    </div>
  )
}