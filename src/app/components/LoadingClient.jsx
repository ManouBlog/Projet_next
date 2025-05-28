"use client";
import React from 'react';
import { useSelector } from 'react-redux';

export default function LoadingClient() {
    const isLoading = useSelector(state=>state.loading.isLoading)
    console.log('isLoading',isLoading)
  return (
    isLoading ? <div className='fixed flex justify-center place-items-center
     place-content-center w-full h-full loading_client z-999999999'>
      {/* <h1 className='font-bold text-white'>Chargement...</h1> */}
      <h1 className='font-semibold text-2xl text-white'>CHOISSIS
        TON PRO...</h1>
    </div>:<div></div>
  )
}
