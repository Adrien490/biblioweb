import { Button } from "@/components/ui/button";
import { ResourceProps } from "@/lib/types";

export const Resource = ({ resource }: { resource: ResourceProps }) => {
  return (
    <div className="shadow-lg rounded-lg p-6 mb-4 break-words border-b">
      <h2 className="text-xl font-bold mb-2">{resource.title}</h2>
      <p className="mb-4">{resource.description}</p> 
      {resource.typeOfResource && <p>Type: <span className="font-semibold">{resource.typeOfResource.name}</span></p>}
      <p className="mb-4">Quantité: {resource.quantity} - <span className={resource.available ? 'font-semibold' : ''}>{resource.available ? 'Disponible' : 'Non disponible'}</span></p>
      <h3 className="text-lg font-semibold mb-2">Auteurs</h3>
      {resource.authors.map(author => (
        <div key={author.id} className="mb-3">
          <p className="font-semibold">{author.name}</p>
          <p className="">{author.biography}</p> 
        </div>
      ))}
      <h3 className="text-lg font-semibold mb-2">Genres</h3>
      {resource.genres.map(genre => (
        <div key={genre.id} className="mb-3">
          <p className="font-semibold">{genre.name}</p>
          <p className="line-clamp-2">{genre.description}</p> {/* Limite à 2 lignes */}
        </div>
      ))}
      <Button>Emprunter</Button>
    </div>
  );
};
