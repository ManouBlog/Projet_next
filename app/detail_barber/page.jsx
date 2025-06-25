"use client";
import * as React from 'react'
// import { Calendar } from "@/components/ui/calendar"
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
  const [barberChosen,setBarberChosen] = React.useState("");
  const [serviceChosen,setServiceChosen] = React.useState("");
  const [servicePriceChosen,setServicePriceChosen] = React.useState("");
  const [timeChosen,setTimeChosen] = React.useState("");
  const [hourChosen,setHourChosen] = React.useState("");
  return (
    <div className='p-5'>
      <HeaderDetail />
      <div className='md:flex md:flex-wrap md:gap-5 w-full'>
        <div className='md:flex-2'>
         <MainDetail
         setServiceChosen={setServiceChosen}
         serviceChosen={serviceChosen}
         setBarberChosen={setBarberChosen} 
         barberChosen={barberChosen} 
         setServicePriceChosen={setServicePriceChosen}
         setTimeChosen={setTimeChosen}
         timeChosen={timeChosen}
         setHourChosen={setHourChosen}
         hourChosen={hourChosen}
         />
        </div>
        <div className='md:flex-1 md:relative'>
          <InfoOrders
          hourChosen={hourChosen} 
          timeChosen={timeChosen}
          serviceChosen={serviceChosen}
          barberChosen={barberChosen}
          servicePriceChosen={servicePriceChosen}
          />
        </div>
      
      </div>
      
    </div>
  );
}

function HeaderDetail(){
  return(
    <img className='h-80  w-full rounded' style={{objectFit:'cover'}} src="/Barbershop.jpeg" alt="barbershop" />
  );
}

function MainDetail({
  setBarberChosen,
  barberChosen,
  setServiceChosen,
  serviceChosen,
  setServicePriceChosen,
  setTimeChosen,
  timeChosen,
  setHourChosen,
    hourChosen
}){
  return(
    <>
   <div className='flex gap-5 my-10'>
    <img className='h-25 w-25 rounded' src="/Barbershop.jpeg" alt="barbershop" />
    <div>
     <h1 className='text-2xl'>Barber shop n1</h1>
     <span className='text-gray-300'>199 Bay St, Toronto, ON, M5L 1G9</span>
    </div>
   </div>
   <p className='text-2xl underline'>Coiffeurs</p>
   <p className='text-md my-2 text-gray-300'>Choisir un coiffeur</p>
   <div className="flex gap-5 items-center my-10">
      <BarberCard
        name="Chris M."
        rating="5.0"
        available="Today"
        imageUrl="/barber.jpeg"
        setBarberChosen={setBarberChosen}
        barberChosen={barberChosen}
      />
    </div>
    <p className='text-2xl underline'>Services</p>
    <p className='text-md my-2 text-gray-300'>Choisir un service</p>
    <Services 
    setServiceChosen={setServiceChosen}
         serviceChosen={serviceChosen}
         setServicePriceChosen={setServicePriceChosen}
    />
    <p className='text-2xl underline'>Choisis le jour</p>
    <p className='text-md my-2 text-gray-300'>Choisir un jour</p>
    <ChooseTime 
    setTimeChosen={setTimeChosen}
         
    />
    <p className='text-2xl underline my-10'>Horaires</p>
    <p className='text-md my-2 text-gray-300'>Choisir une heure</p>
    {timeChosen && <TimeSlotSelector
      date={new Date(timeChosen).toLocaleString('fr', {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
})}
 setHourChosen={setHourChosen}
         hourChosen={hourChosen}
      timeSlots={timeSlots}
    />}
    
   </>
  );
}


const BarberCard = ({ 
  name, rating, 
  available, imageUrl , 
  setBarberChosen,barberChosen}) => {
  
  return (
    <div 
    onClick={()=>setBarberChosen(name)}
    className="max-w-xs bg-white cursor-pointer rounded-xl shadow-md overflow-hidden">
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
      <div className="p-4 text-center"
      style={{background:barberChosen === name ? 'black':'white'
        ,
        color:barberChosen === name ? 'white':'black'}}
      >
        <h3 className="text-xl font-bold">{name}</h3>
        <p className="text-gray-600">Available {available}</p>
      </div>
    </div>
  );
};

const Services = ({setServiceChosen,
  serviceChosen,setServicePriceChosen}) => {
  return (
    <div>
      <div className="flex justify-end items-center mb-4 mt-10">
        <button className="text-blue-500">Show all 12 services</button>
      </div>
      <div className="flex gap-5 flex-wrap  items-center">
        {services.map((service, index) => (
          <div 
          key={index} 
          onClick={()=>{
            setServiceChosen(service.name)
            setServicePriceChosen(service.price)
          }}
          style={{
            background:serviceChosen === service.name ? 'black':'white'
            ,color:serviceChosen === service.name ? 'white':'black'}}
          className="bg-white 
          cursor-pointer p-4 rounded-lg shadow-md">
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

const ChooseTime = ({setTimeChosen}) => {
  const onChange = (date, dateString) => {
  console.log(date, dateString);
  setTimeChosen(dateString)
};
  return (
  <div className='my-5'>
  <DatePicker onChange={onChange} />
  </div>
  );
};

const TimeSlotSelector = ({ date, timeSlots ,setHourChosen , hourChosen }) => {
  return (
    <div className="p-4 mb-10 w-full">
      <div className="flex justify-between items-center mb-4">
        <div className="text-right">
          <p className="font-semibold">{date}</p>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-2">
        {timeSlots.map((slot, index) => (
          <button
          onClick={()=>setHourChosen(slot)}
          style={{background:hourChosen === slot ? 'black':'white',color:hourChosen === slot ? 'white':'black'}}
            key={index}
            className="border cursor-pointer border-gray-300 p-2 rounded-lg hover:bg-gray-100"
          >
            {slot}
          </button>
        ))}
      </div>
    </div>
  );
};

const InfoOrders = ({barberChosen,
  serviceChosen,servicePriceChosen,
  timeChosen,hourChosen
})=>{
  const [actifPolicyCancel,setActifPolicyCancel] = React.useState(false)
  return(
    <div className='rounded bg-white  overflow-auto shadow-xl/30 border border-black h-90
     mx-auto md:w-90 sm:w-full md:fixed mb-20'>
      {actifPolicyCancel && <PolicyCancel setActifPolicyCancel={setActifPolicyCancel} /> }
      {!actifPolicyCancel && <div>
     <h1 className='text-2xl'>Commandes</h1>
      {
        barberChosen && 
        <>
         <p>Coiffeur : {barberChosen}</p>
      <div className='flex gap-5 justify-between w-full'>
        {serviceChosen &&
        <>
        <p>{serviceChosen}</p>
        <h5>{servicePriceChosen}</h5>
        </>
         }
      </div>
      {timeChosen && <p className='my-5 font-thin text-sm flex justify-between w-full'>
        <span>Prévu  le : {timeChosen}</span>
        <span>{hourChosen ? hourChosen:null}</span>
      </p> }
      
      <div>
        {servicePriceChosen && 
          <p className='flex justify-between items-center my-5'> 
          <span>Total:</span> <span>{servicePriceChosen}</span>
          </p> }
        <button 
        onClick={()=>setActifPolicyCancel(true)}
        className='bg-black py-5 text-white btn w-full'>
         Continuer
          </button>
      </div>
        </>
      }
     </div> }
      
     
      
    </div>
  )
}
function PolicyCancel({setActifPolicyCancel}){
  return (
<div className='h-90 relative z-100' 
      style={{width:"100%",height:"100%"}}>
        <div className='flex justify-between gap-5 items-center mx-5'>
         <h1>Politique d'annulation</h1> 
         <span onClick={()=>setActifPolicyCancel(false)} 
         className='cursor-pointer'>Fermer</span>
         
        </div>
        <div>
          <p>You have time until 11:00AM UTC−4 on 
          July 1, 2025 to cancel this appointment without being charged.</p>
            <button 
        onClick={()=>setActifPolicyCancel(true)}
        className='bg-black py-5 text-white btn w-full'>
         Je suis d'accord
          </button>    
         </div>
         
     </div>
  )
}
export default DetailPage
