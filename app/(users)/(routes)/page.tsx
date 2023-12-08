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

      {/* Section Nouveautés */}
      <section className="container mx-auto px-6 md:px-12 my-12">
        <h2 className="text-4xl font-bold text-center mb-8">Nouveautés</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {/* Ici, ajoutez des composants de carte pour les nouveaux articles */}
        </div>
      </section>

      {/* Section Formules */}
      <section className="bg-muted py-12">
        <div className="container mx-auto px-6 md:px-12">
          <h2 className="text-4xl font-bold text-center mb-8">Nos Formules</h2>
          <div className="flex flex-wrap justify-center">
            {/* Ici, ajoutez des composants de carte pour les différentes formules */}
          </div>
        </div>
      </section>

    </div>
  );
};

export default HomePage;
