'use client';
/*
import {Fragment,useState} from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { Listbox,ListboxButton,ListboxOption,ListboxOptions,Transition } from '@headlessui/react'
import { CustomFilterProps } from '@/types'
import { updateSearchParams } from '@/utils'
const CustomFilter = ({title, options}:CustomFilterProps) => {
  const router = useRouter();
  const [selected,setSelected]=useState(options[0])

const handleUpdateParams=(e: {title:string,value:string})=>{
  const newPathName=updateSearchParams(title,e.value.toLowerCase());
  router.push(newPathName);
}

  return (
    <div className='w-fit'>
      <Listbox value={selected} 
      onChange={(e)=> {
        setSelected(e);
        handleUpdateParams(e)
        }}>
        <div className='relative w-fit z-10'>
          <ListboxButton className="custom-filter__btn">
            <span className='block truncate'>{selected.title}</span>
            <Image src='/chevron-up-down.svg' width={20} height={20} className='ml-4 object-contain' alt='chevron up down' />
          </ListboxButton>
          <Transition as={Fragment} leave='transition ease-in duration-100' leaveFrom='opacity-100' leaveTo='opacity-0'>
            <ListboxOptions className='custom-filter__options'>
              {options.map((option)=>(
                <ListboxOption key={option.title} value={option} className='relative cursor-default select-none py-2 px-4'>
                  {({selected})=>(
                    <span className='block truncate'>{option.title}</span>
                  )}
                </ListboxOption>
              ))}
            </ListboxOptions>
          </Transition>
        </div>
      </Listbox>
    </div>
  )
}

export default CustomFilter
*/


import { Fragment, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Listbox, ListboxButton, ListboxOption, ListboxOptions, Transition } from "@headlessui/react";

import { CustomFilterProps } from "@/types";
import { updateSearchParams } from "@/utils";

export default function CustomFilter({ title, options }: CustomFilterProps) {
  const router = useRouter();
  const [selected, setSelected] = useState(options[0]); // State for storing the selected option

  // update the URL search parameters and navigate to the new URL
  const handleUpdateParams = (e: { title: string; value: string }) => {
    const newPathName = updateSearchParams(title, e.value.toLowerCase());

    router.push(newPathName);
  };

  return (
    <div className='w-fit'>
      <Listbox
        value={selected}
        onChange={(e) => {
          setSelected(e); // Update the selected option in state
          handleUpdateParams(e); // Update the URL search parameters and navigate to the new URL
        }}
      >
        <div className='relative w-fit z-10'>
          {/* Button for the listbox */}
          <ListboxButton className='custom-filter__btn'>
            <span className='block truncate'>{selected.title}</span>
            <Image src='/public/chevron-up-down.svg' width={20} height={20} className='ml-4 object-contain' alt='chevron_up-down' />
          </ListboxButton>
          {/* Transition for displaying the options */}
          <Transition
            as={Fragment} // group multiple elements without introducing an additional DOM node i.e., <></>
            leave='transition ease-in duration-100'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <ListboxOptions className='custom-filter__options'>
              {/* Map over the options and display them as listbox options */}
              {options.map((option) => (
                <ListboxOption
                  key={option.title}
                  className='relative cursor-default select-none py-2 px-4'
                  value={option}
                >
                  {({ selected }) => (
                    <>
                      <span className={`block truncate ${selected ? "font-medium" : "font-normal"}`} >
                        {option.title}
                      </span>
                    </>
                  )}
                </ListboxOption>
              ))}
            </ListboxOptions>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
}