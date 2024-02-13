import { useRouter } from 'next/router';
import { recommanded_data } from '@/data/recommended';


export default function VillaDetails () {
  const router = useRouter();
  const { villaId } = router.query;
  
  
  const selectedVilla = recommanded_data.find((data) => data.id === Number(villaId));
  console.log(selectedVilla);

  if (!selectedVilla) {
    return <div>Villa introuvable.</div>;
  }

  return (
    <div>
      <h1>{selectedVilla.badge_text}</h1>
      <img src={selectedVilla.src} alt={selectedVilla.title} />
      {/* Affichez d'autres détails de la villa ici */}
    </div>
  );
}
