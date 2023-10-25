'use client'
import { Education, Head, PostCard, Skills } from '@/components'
import { Posts } from '@/lib/data'
import Link from 'next/link';
import React,{useEffect} from "react";
// importing aos
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Home() {
  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      offset: 50,
      delay: 300,
      duration: 400
    });
  }, []);

    useEffect(() => {
    AOS.refresh();
  }, []);

  return (
    <main className="py-28">
      <Head />
      <div className='flex flex-col gap-10 md:gap-[60px] max-w-7xl px-1 md:px-10 mx-auto mt-14'>
        {Posts.length > 0 && Posts.map((post,idx) => (
          <PostCard key={idx} post={post} />
        ))}

        {/* skills */}
        <Skills />

        {/* education */}
        <Education />
      </div>

      <Link href={'#top'} className='flex w-full items-center justify-center mt-24 text-brand-black-100 font-semibold text-center text-xl leading-6'>Back to The Top</Link>
    </main>
  )
}
