'use client';
import { Combobox,ComboboxButton,ComboboxInput,ComboboxOption,ComboboxOptions,Transition } from '@headlessui/react';
import { SearchManufacturerProps } from '@/types'
import { manufacturers } from '@/constants';
import {useState,Fragment} from 'react'
import Image from 'next/image';

const SearchManufacturer = ({manufacturer, setManufacturer}:SearchManufacturerProps) => {
    const [search, setSearch] = useState('');

    const filteredManufacturers= 
       search === "" ? manufacturers: manufacturers.filter((item)=>(
        item.toLowerCase().replace(/\s+/g, "").includes(search.toLowerCase().replace(/\s+/g, ""))
       ))
  return (
    <div className='search-manufacturer'>
        <Combobox value={manufacturer} onChange={setManufacturer}>
            <div className='relative w-full'>
            <ComboboxButton className="absolute top-[14px]">
            <Image src="/public/car-logo.svg" width={20} height={20} className='ml-4' alt='Car logo'/>
          </ComboboxButton>
          <ComboboxInput className="search-manufacturer__input" placeholder='Volkswagen' displayValue={(manufacturer:string)=>manufacturer} onChange={(e)=> setSearch(e.target.value)}/>

         <Transition as="div" leave='transition ease-in duration-100' leaveFrom='opacity-100' leaveTo='opacity-0' afterLeave={()=>setSearch('')}>
            <ComboboxOptions>
                
                    {filteredManufacturers.map((item) => (
                        <ComboboxOption key={item} value={item} className="search-manufacturer_option">
                            {item}
                        </ComboboxOption>
                        )
                )}
            </ComboboxOptions>
            </Transition>
            </div>
        </Combobox>
    </div>
  )
}

export default SearchManufacturer