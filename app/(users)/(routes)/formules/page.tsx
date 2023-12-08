import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

const plans = [
  {
    name: 'Premium',
    description: 'Unlimited access to all books, CDs, DVDs, and other resources. Ideal for avid readers and multimedia enthusiasts.',
    price: '30€/month',
    image: '/plans.png' // Assurez-vous que le chemin d'accès est correct
  },
  {
    name: 'Student',
    description: 'Reduced rate for students, with access to a majority of resources. Perfect for academic and leisure needs.',
    price: '15€/month',
    image: '/plans.png'
  },
  {
    name: 'Starter',
    description: 'Basic access to the library resources. Suitable for occasional users.',
    price: '10€/month',
    image: '/plans.png'
  },
  // Add more plans here
];

const PlansPage = () => {
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-4xl font-bold text-center my-10">Our Plans</h1>
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
                Subscribe
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