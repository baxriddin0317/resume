import { educations } from '@/lib/data'
import React from 'react'

export const Education = () => {
  return (
    <div data-aos="fade-up" className="bg-white rounded-25 border border-brand-gray-200/50 overflow-hidden w-full py-5 md:py-9 px-3 sm:px-6 md:px-12">
      {/* title */}
      <h2 className="text-brand-blue md:text-xl !leading-6 font-black uppercase">
       Education
      </h2>

      <div className='mt-6 pl-2 md:pl-7 space-y-2'>
        {educations.map((e,idx) => (
          <div className='flex items-center gap-2' key={idx}>
            <span>
            {e.icon}
            </span>
            <p className={`text-brand-black md:text-xl !leading-6 ${e.line ? 'line-through' : ''}`}>
              {e.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}