"use client";
import * as React from 'react'
import { Calendar } from "@/components/ui/calendar"
import { DatePicker } from 'antd';
const services = [
  { name: "Men's Haircut", duration: '30min', price: '$47' },
  { name: "Men's Buzz Cut", duration: '30min', price: '$35' },
  { name: 'Beard Trim', duration: '15min', price: '$22' },
  { name: "Men's Haircut &...", duration: '45min', price: '$62' },
  // Ajoutez d'autres services ici
];
 const timeSlots = [
    '9:00am', '9:15am', '9:30am',
    '9:45am', '10:00am', '10:15am',
    '10:30am', '10:45am', '11:00am',
    '11:15am'
  ];
function DetailPage() {
  return (
    <div className='p-5'>
      <HeaderDetail />
      <div className='md:flex md:flex-wrap md:gap-5 w-full'>
        <div className='md:flex-1'>
         <MainDetail />
        </div>
        <div className='md:flex-1 md:relative'>
          <InfoOrders />
        </div>
      
      </div>
      
    </div>
  );
}

function HeaderDetail(){
  return(
   <div className='h-80 w-full bg-red-500 rounded mx-auto'>
   </div>
  );
}

function MainDetail(){
  return(
    <>
   <div className='flex gap-5 my-10'>
    <img className='h-25 w-25 rounded' src="/Barbershop.jpeg" alt="barbershop" />
    <div>
     <h1 className='text-2xl'>Barber shop n1</h1>
     <span className='text-gray-300'>199 Bay St, Toronto, ON, M5L 1G9</span>
    </div>
   </div>
   <p className='my-10 text-2xl underline'>Coiffeurs</p>
   <div className="flex gap-5 items-center my-10">
      <BarberCard
        name="Chris M."
        rating="5.0"
        available="Today"
        imageUrl="/barber.jpeg"
      />
    </div>
    <p className='text-2xl underline my-10'>Services</p>
    <Services />
    <p className='text-2xl underline my-10'>Choisis le jour</p>
    <ChooseTime />
    <p className='text-2xl underline my-10'>Horaires</p>
     <TimeSlotSelector
      barberName="Rene M."
      service="Beard Trim"
      date="JUNE 25, 2025"
      timeSlots={timeSlots}
    />
   </>
  );
}


const BarberCard = ({ name, rating, available, imageUrl }) => {
  return (
    <div className="max-w-xs bg-white rounded-xl shadow-md overflow-hidden">
      <div className="relative">
        <img
          className="w-full h-25"
          style={{objectFit:'cover'}}
          src={imageUrl}
          alt={name}
        />
        <div className="absolute top-0 right-0 bg-yellow-400 text-white px-2 py-1 m-2 rounded-full flex items-center">
          <span className="text-sm font-bold">{rating}</span>
          <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
            <path d="M12 .587l3.668 7.431 8.2 1.192-5.923 5.762 1.406 8.177L12 18.896l-7.351 3.956 1.406-8.177L.532 9.21l8.2-1.192L12 .587z"/>
          </svg>
        </div>
      </div>
      <div className="p-4 text-center">
        <h3 className="text-xl font-bold">{name}</h3>
        <p className="text-gray-600">Available {available}</p>
      </div>
    </div>
  );
};

const Services = () => {
  return (
    <div>
      <div className="flex justify-end items-center mb-4">
        <button className="text-blue-500">Show all 12 services</button>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {services.map((service, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="font-bold">{service.name}</h3>
            <div className='flex justify-between gap-2'>
            <p className="text-gray-600">{service.duration}</p>
            <p className="font-bold">{service.price}</p>
            </div>
            
          </div>
        ))}
      </div>
    </div>
  );
};

const ChooseTime = () => {
  const onChange = (date, dateString) => {
  console.log(date, dateString);
};
  return (
  <div className='my-5'>
  <DatePicker onChange={onChange} />
  </div>
  );
};

const TimeSlotSelector = ({ barberName, service, date, timeSlots }) => {
  return (
    <div className="p-4 mb-10 w-full">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center">
          <img
            src="https://via.placeholder.com/50"
            alt={barberName}
            className="w-10 h-10 rounded-full mr-2"
          />
          <div>
            <h2 className="font-bold">{barberName}</h2>
            <p className="text-gray-600">{service}</p>
          </div>
        </div>
        <div className="text-right">
          <p className="font-semibold">{date}</p>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-2">
        {timeSlots.map((slot, index) => (
          <button
            key={index}
            className="border border-gray-300 p-2 rounded-lg hover:bg-gray-100"
          >
            {slot}
          </button>
        ))}
      </div>
    </div>
  );
};

const InfoOrders = ()=>{
  return(
    <div className='p-5 rounded bg-white overflow-auto shadow-xl/30 border border-black h-90 mx-auto md:w-100 sm:w-full md:fixed mb-20'>
      <h1 className='text-2xl'>Commandes</h1>
      <div className='flex gap-5 justify-between w-full p-5'>
        <p>Service</p>
        <h5>50 fcfa</h5>
      </div>
      <div>
        <button className='bg-black py-5 text-white btn w-full'>Enregistrer</button>
      </div>
    </div>
  )
}
export default DetailPage
