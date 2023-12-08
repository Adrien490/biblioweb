export const getAllResources = async () => {
  const url = 'https://api-biblioweb.georgio-sorin.fr/resource';
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Erreur HTTP: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Erreur lors de la récupération des ressources:', error);
    throw error; // Propager l'erreur pour une gestion ultérieure
  }
};
