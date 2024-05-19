import React from 'react'
import { SerachManufacturer } from './SerachManufacturer'
import { useState } from 'react'
import magnifying from '../assets/images/magnifying-glass.svg'
import modelIcon from '../assets/images/model-icon.png'
import { useNavigate , useLocation } from 'react-router-dom'


export const SearchBar = () => {
  const SearchButton = ({otherClasses}: {otherClasses: string} )=>(
    <button className={`-ml-3 z-10 ${otherClasses}`}>
      <img width={40} height={40} className='object-contain' src={magnifying} alt="" />
    </button>
  )
    const [manufacturer , setManufacturer] = useState('')
    const [model, setModel] = useState('')
    const location = useLocation()
    const navigate = useNavigate()
    const handleSerach = (e:React.FormEvent<HTMLFormElement>)=>{
      e.preventDefault();
      if(manufacturer === '' && model===''){
        return alert('please fill in the searchbar')
      }
      updateSerachParams(model.toLowerCase() , manufacturer.toLowerCase());

    }
    const updateSerachParams = (model:string, manufacturer: string)=>{
      const searchParams = new URLSearchParams(location.search);
      if(model){
        searchParams.set('model' , model)
      }
      else{
        searchParams.delete('model')
      }
      if(manufacturer){
        searchParams.set('manufacturer' , manufacturer)
      }
      else{
        searchParams.delete('manufacturer')
      }
      const newPathname = `${location.pathname}?${searchParams.toString()}`;
      navigate(newPathname);
      
    }
  return (
    <form className='searchbar' onSubmit={handleSerach}>
        <div className='searchbar__item'>
            <SerachManufacturer manufacturer= {manufacturer} setManufacturer={setManufacturer}  />  
        </div>
        <div className='searchbar__item ml-4'>
          <img width={25} height={25} className='absolute w-[20px] h-[20px] ml-4' src={modelIcon} alt="car model" />
          <input type="text" name='model' onChange={(e)=> setModel(e.target.value)} placeholder='Tiguan' className='searchbar__input' />
          <SearchButton otherClasses='sm:hidden' />
        </div>
        <SearchButton otherClasses='max-sm:hidden' />
       
    </form>
  )
}
