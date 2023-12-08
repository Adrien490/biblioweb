import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const HomePage = () => {
  return (
    <div>
      {/* Section Hero */}
      <section className=" bg-center h-96 py-8 grayscale-0">
        <div className="container mx-auto px-6 md:px-12">
          <h1 className="text-5xl font-bold mt-0 mb-6">Bienvenue à la Médiathèque!</h1>
          <h3 className="text-2xl mb-8">Découvrez, apprenez et explorez avec notre vaste collection de livres, CD, et DVDs.</h3>
          <Link href="/catalogue">
            <Button>
              Explorer le Catalogue
            </Button>
          </Link>
        </div>
      </section>


    </div>
  );
};

export default HomePage;
