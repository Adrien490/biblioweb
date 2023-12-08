import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

const plans = [
  {
    name: 'Premium',
    description: 'Accès illimité à tous les livres, CD, DVD et autres ressources. Idéal pour les lecteurs assidus et les passionnés de multimédia.',
    price: '30€/mois',
    image: '/plans.png' // Assurez-vous que le chemin d'accès est correct
  },
  {
    name: 'Étudiant',
    description: 'Tarif réduit pour les étudiants, avec accès à la majorité des ressources. Parfait pour les besoins académiques et de loisirs.',
    price: '15€/mois',
    image: '/plans.png'
  },
  {
    name: 'Débutant',
    description: 'Accès de base aux ressources de la bibliothèque. Adapté pour les utilisateurs occasionnels.',
    price: '10€/mois',
    image: '/plans.png'
  },
];


const PlansPage = () => {
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-4xl font-bold text-center my-10">Nos formules</h1>
      <div className="grid md:grid-cols-3 gap-6">
        {plans.map((plan, index) => (
          <div key={index} className="border rounded-lg p-4 shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <div className='relative w-full h-64'>
            <Image fill src={plan.image} alt={plan.name} className="absolute" />
            </div>
            
            <div className="p-4">
              <h2 className="text-2xl font-bold mb-3">{plan.name}</h2>
              <p className="mb-4">{plan.description}</p>
              <span className="text-lg font-semibold block mb-4">{plan.price}</span>
              <Link href="/subscribe">
                <Button>
                Je souscris maintenant
                </Button>
                  
                
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlansPage;