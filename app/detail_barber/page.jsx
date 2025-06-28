"use client";
import * as React from 'react'
// import { Calendar } from "@/components/ui/calendar"
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { DatePicker,Alert } from 'antd';
import { Check,MoveLeft } from "lucide-react";
import { useRouter } from 'next/navigation';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
const services = [
  { name: "Men's Haircut", duration: '30min', price: '$47' },
  { name: "Men's Buzz Cut", duration: '30min', price: '$35' },
  { name: 'Beard Trim', duration: '15min', price: '$22' },
  { name: "Men's Haircut &...", duration: '45min', price: '$62' },
  // Ajoutez d'autres services ici
];
 let timeSlots = [];

function DetailPage() {
  const [barberChosen,setBarberChosen] = React.useState("");
  const [serviceChosen,setServiceChosen] = React.useState("");
  const [servicePriceChosen,setServicePriceChosen] = React.useState("");
  const [timeChosen,setTimeChosen] = React.useState("");
  const [hourChosen,setHourChosen] = React.useState("");
    const [actifPolicyCancel,setActifPolicyCancel] = React.useState(false)
  const [confirmationReservation,setConfirmationReservation] = React.useState(false)
  const resetData =()=>{
setBarberChosen("")
setServiceChosen("")
setTimeChosen("")
setServicePriceChosen("")
setHourChosen("")
setActifPolicyCancel(false)
setConfirmationReservation(false)
  }
  return (
    <div className='p-2 relative'>
      <MyAlert />
      <HeaderDetail />
      <div className='md:flex md:flex-wrap items-center md:gap-5 w-full'>
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
        <div className='md:flex-1'>
          <InfoOrders
          hourChosen={hourChosen} 
          timeChosen={timeChosen}
          serviceChosen={serviceChosen}
          barberChosen={barberChosen}
          servicePriceChosen={servicePriceChosen}
          resetData={resetData}
            actifPolicyCancel={actifPolicyCancel}
  setActifPolicyCancel = {setActifPolicyCancel}
  confirmationReservation={confirmationReservation}
  setConfirmationReservation={setConfirmationReservation}
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
const router = useRouter();
 const handleGoBack = () => {
    router.back();
  };
 
  return(

    <>
   <div className='flex justify-center my-10'>
    <button className='flex gap-3 cursor-pointer' onClick={handleGoBack}>
         <MoveLeft /> <span>Retour</span>
    </button>
  
    <div className='flex gap-5 my-10'>
  <img className='h-25 w-25 rounded' src="/Barbershop.jpeg" alt="barbershop" />
    <div>
     <h1 className='text-2xl'>Barber shop n1</h1>
     <span className='text-gray-300'>199 Bay St, Toronto, ON, M5L 1G9</span>
    </div>
    </div>
   </div>
   <p className='text-2xl underline'>Coiffeurs</p>
   <p className='text-md my-2 text-gray-300 flex gap-3'> <span>Choisir un coiffeur</span> 
   {barberChosen && <span><Check className="text-green-900" /></span>}
   </p>
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
   
    <p className='text-md my-2 text-gray-300 flex gap-3'> <span>Choisir un service</span> 
   {serviceChosen && <span><Check className="text-green-900" /></span>}
   </p>
    <Services 
    setServiceChosen={setServiceChosen}
         serviceChosen={serviceChosen}
         setServicePriceChosen={setServicePriceChosen}
         barberChosen={barberChosen}
    />
    <p className='text-2xl underline'>Choisis le jour</p>

     <p className='text-md my-2 text-gray-300 flex gap-3'> <span>Choisir un jour</span> 
   {timeChosen && <span><Check className="text-green-900" /></span>}
   </p>
    <ChooseTime 
    setTimeChosen={setTimeChosen}
    serviceChosen={serviceChosen}
    />
    <p className='text-2xl underline my-10'>Créneaux horaires</p>
     <p className='text-md my-2 text-gray-300 flex gap-3'> <span>Choisir une heure</span> 
   {hourChosen && <span><Check className="text-green-900" /></span>}
   </p>
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
  serviceChosen,setServicePriceChosen,barberChosen}) => {
    
     const OPENING_TIME = '09:00';
     const CLOSING_TIME = '17:00';

  const calculateTimeSlots = (startTime, endTime, intervalMinutes) => {
    const slots = [];
     let [startHours, startMins] = startTime.split(':').map(Number);
     let [minutesLibelle , libelle] = intervalMinutes.split('min').map(Number);
  let [endHours, endMins] = endTime.split(':').map(Number);
   console.log({startMins,endMins,libelle,minutesLibelle})
    for (let time = startHours*60; time + minutesLibelle <= endHours*60; time += minutesLibelle) {
      const hours = Math.floor(time / 60);
      const minutes = time % 60;
      slots.push(`${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`);
    }
    console.log("slots",slots)
    timeSlots = slots;
    // return slots;
  };
  return (
    <div>
      <div className="flex justify-end items-center mb-4 mt-10">
        {/* <button className="text-blue-500">Show all 12 services</button> */}
      </div>
      <div className="flex gap-5 flex-wrap  items-center">
        {services.map((service, index) => (
          <button 
          disabled={!barberChosen}
          key={index} 
          onClick={()=>{
            calculateTimeSlots(OPENING_TIME,CLOSING_TIME,service.duration)
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
            
          </button>
        ))}
      </div>
    </div>
  );
};

const ChooseTime = ({setTimeChosen,serviceChosen}) => {
  const onChange = (date, dateString) => {
  console.log(date, dateString);
  setTimeChosen(dateString)
};
  return (
  <div className='my-5'>
  <DatePicker disabled={!serviceChosen} onChange={onChange} />
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

const InfoOrders = ({
  barberChosen,
  serviceChosen,servicePriceChosen,
  timeChosen,hourChosen,
  resetData,
  actifPolicyCancel,
  setActifPolicyCancel,
  confirmationReservation,
  setConfirmationReservation
})=>{

  return(
    <div className='rounded bg-white px-5 overflow-auto shadow-xl/30 border border-black h-full
     mx-auto md:w-90 sm:w-full mb-20'>
      {actifPolicyCancel && <PolicyCancel 
     setConfirmationReservation={setConfirmationReservation}
      setActifPolicyCancel={setActifPolicyCancel} /> }
      {confirmationReservation && <ConfirmReservation 
      resetData={resetData}
      setConfirmationReservation={setConfirmationReservation} />}
      {(!actifPolicyCancel && !confirmationReservation) &&
       <div className='py-8'>
        <div className='flex justify-between items-center'>
        <h1 className='text-2xl underline my-5'>Commandes</h1>
        {barberChosen && <span className='text-sm cursor-pointer text-red-500' onClick={()=>resetData()}>Annuler</span> }
        </div>
      {
        barberChosen && 
        <>
         <p className='text-green-500'>{barberChosen}</p>
      <div className='flex gap-5 justify-between w-full'>
        {serviceChosen &&
        <>
        <p className='font-extralight'>{serviceChosen}</p>
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
        className='bg-black py-5 mb-10 text-white btn w-full'>
         Continuer
          </button>
      </div>
        </>
      }
     </div> }
      
     {!barberChosen && <p className='text-center font-extralight'>Pas encore choisir de coiffeur ?</p>}
      
    </div>
  )
}
function PolicyCancel({setActifPolicyCancel,setConfirmationReservation}){
  return (
<div className='h-90 relative z-100' 
      style={{width:"100%",height:"100%"}}>
        <div className='flex justify-between gap-5 items-center mx-5'>
         <h1 className='text-xl underline'>Politique d'annulation</h1> 
         <span onClick={()=>setActifPolicyCancel(false)} 
         className='cursor-pointer text-red-900'>Fermer</span>
        </div>
        <div className='flex justify-between flex-col h-80'>
          <p className='mt-5'>
            Vous avez 
            jusqu'au 1er juillet 2025 à 11h00
             pour annuler ce rendez-vous sans frais.
          </p>
            <button 
        onClick={()=>{
          setConfirmationReservation(true)
          setActifPolicyCancel(false)
        }}
        className='bg-black py-5 mb-10 text-white btn w-full'>
         Je suis d'accord
          </button>    
         </div>
         
     </div>
  )
}

function ConfirmReservation({setConfirmationReservation,resetData}){
  return(
<div className='h-90 relative z-100' 
      style={{width:"100%",height:"100%"}}>
        <div className='flex justify-between gap-5 items-center p-3 mb-3'>
         <h1 className='text-2xl underline'>Confirmation</h1> 
         <span onClick={()=>setConfirmationReservation(false)} 
         className='cursor-pointer text-red-900'>Fermer</span>
         
        </div>
        <div className='flex justify-between flex-col h-80'>
          <div>
        <p className='text-sm text-gray-300 mb-5'>Mode de paiement</p>
           <Select className="bg-white">
      <SelectTrigger className="w-full">
        <SelectValue placeholder="sélectionne un mode de paiement" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup className="bg-white">
          <SelectLabel>Mode de paiement</SelectLabel>
          <SelectItem value="apple">En ligne</SelectItem>
          <SelectItem value="banana">En boutique</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
          </div>
          <div>
        <p className='text-sm text-gray-300 mt-9 mb-5'>Informations</p>
           <div className="grid gap-4">
            <div className="grid gap-3">
              <Label htmlFor="name-1">Nom</Label>
              <Input id="name-1" name="name-1" defaultValue={'adjobi'} />
            </div>
             <div className="grid gap-3">
              <Label htmlFor="name-4">Prénoms</Label>
              <Input id="name-4" name="name-4" defaultValue={'pierre'} />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="name-2">Email</Label>
              <Input id="name-2" type='email' name="email" defaultValue={'pierre@gmail.com'} />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="name-3">Contact</Label>
              <Input id="name-3" type='number' name="contact"  />
            </div>
          </div>
          </div>
          
            <button 
            onClick={()=>resetData()}
        className='bg-black py-5 my-10 text-white btn w-full'>
         Réserver
          </button>    
         </div>
         
     </div>
  );
}

function MyAlert(){
  return(
   <div className='fixed top-0 w-full p-10 z-200'>
    <Alert message="Warning" type="warning" style={{padding:"2em"}} showIcon closable /> 
   </div>
  )
}
export default DetailPage
