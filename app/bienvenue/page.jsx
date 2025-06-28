"use client"
import * as React from 'react'
import Header from '../components/bienvenue/Header'
import CardVisuel from '../components/bienvenue/CardVisuel'
import { Pagination } from 'antd';
const data = [
  {
    "id": 1,
    "name": "Tony's Classic Barbershop",
    "specialite": "Coupe homme, Barbe, Rasage traditionnel",
    "adresse": "15 Rue du Vieux Port, Marseille"
  },
  {
    "id": 2,
    "name": "L'Atelier de Margaux",
    "specialite": "Coupe femme, Balayage, Soins capillaires",
    "adresse": "22 Avenue George V, Paris"
  },
  {
    "id": 3,
    "name": "Le Barbier Urbain",
    "specialite": "Tattoo capillaire, Coupe dégradé, Barbe",
    "adresse": "5 Rue de la Liberté, Lyon"
  },
  {
    "id": 4,
    "name": "Salon Élégance",
    "specialite": "Mariage, Coiffure vintage, Extensions",
    "adresse": "30 Boulevard Victor Hugo, Lille"
  },
  {
    "id": 5,
    "name": "Barbier & Fils",
    "specialite": "Coupe enfant, Coupe classique, Coloration homme",
    "adresse": "12 Place du Marché, Bordeaux"
  },
  {
    "id": 6,
    "name": "The Bold Barber",
    "specialite": "Style hipster, Barbe sculptée, Piercing",
    "adresse": "8 Rue des Arts, Toulouse"
  },
  {
    "id": 7,
    "name": "Cheveux d'Ébène",
    "specialite": "Coiffure afro, Tresses, Locks",
    "adresse": "17 Rue de Belleville, Paris"
  }
];

function Bienvenue() {
     const [current, setCurrent] = React.useState(1);
  const pageSize = 6;

  const onChange = (page) => {
    setCurrent(page);
  };
    return (
        <div>
            <Header />
            {/* <section className='flex w-full place-content-center flex-wrap gap-2'>
                {data.map((item)=>(
              <CardVisuel
               name={item.name}
               specialite={item.specialite}
               key={item.id}
               adresse={item.adresse}
               />
               ))
               }
        
            </section> */}
            <div className="p-4">
      <div className='flex w-full place-content-center flex-wrap gap-2 mb-5'>
        {data.slice((current - 1) * pageSize, current * pageSize).map((item, index) => (
          <CardVisuel
               name={item.name}
               specialite={item.specialite}
               key={index}
               adresse={item.adresse}
               />
        ))}
      </div>
      <Pagination
        current={current}
        total={data.length}
        pageSize={pageSize}
        onChange={onChange}
        className="flex justify-center"
      />
    </div>
           
        </div>
    )
}

export default Bienvenue
