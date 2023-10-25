"use client";
import { SkillsData } from "@/lib/data";
import { Disclosure, Transition } from "@headlessui/react";
// import { ChevronUpIcon } from '@heroicons/react/20/solid'

export const Skills = () => {
  return (
    <div data-aos="fade-up" className="bg-white rounded-25 border border-brand-gray-200/50 overflow-hidden w-full py-5 md:py-9 px-3 sm:px-6 md:px-12">
      {/* title */}
      <h2 className="text-brand-blue md:text-xl !leading-6 font-black uppercase">
        TECHNICAL SKILLS
      </h2>
      {/* skills */}
      <div className="flex flex-col gap-5 items-start mt-6 pl-2 md:pl-7">
        {SkillsData.map((item, idx) => (
          <Disclosure key={idx}>
            {({ open }) => (
              <>
                <Disclosure.Button className="w-full text-left font-bold md:text-xl !leading-6 text-brand-black capitalize">
                  {item.category}
                </Disclosure.Button>

                <Transition
                  show={idx===0 ? !open : open}
                  enter="transition duration-300 ease-out"
                  enterFrom="transform scale-95 opacity-0"
                  enterTo="transform scale-100 opacity-100"
                  leave="transition duration-75 ease-out"
                  leaveFrom="transform scale-100 opacity-100"
                  leaveTo="transform scale-95 opacity-0"
                >
                  {/*
                  Don't forget to add `static` to your `Disclosure.Panel`!
                */}
                  <Disclosure.Panel static className="flex flex-col gap-1 pl-2 md:pl-7">
                    {item.skills.map((skill,idx) => (
                      <>
                        <div key={idx} className="flex items-center gap-2">
                          <p className="font-semibold text-sm md:text-xl !leading-6 text-brand-black">{skill.name}</p>
                          <span className="bg-brand-gray-100 rounded py-px px-1.5 font-medium text-brand-red text-sm">{skill.expertise}</span>
                        </div>
                         
                        {skill.related && <div className="py-2 space-y-1">
                          {skill.related.map((s,idx) => (
                            <div key={idx} className="flex items-center gap-2 pl-2 md:pl-5">
                              <span className="bg-brand-black block w-1 h-1 rounded-full"></span>
                              <p className="font-semibold text-sm md:text-xl !leading-6 text-brand-black">{s.name}</p>
                              <span className="bg-brand-gray-100 rounded py-px px-1.5 font-medium text-brand-red text-sm">{s.expertise}</span>
                            </div>
                          ))}
                        </div>}
                      </>
                    ))}
                  </Disclosure.Panel>
                </Transition>
              </>
            )}
          </Disclosure>
        ))}
      </div>
    </div>
  );
};
