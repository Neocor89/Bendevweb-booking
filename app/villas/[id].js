import { useRouter } from "next/router";
import recommanded_data from "@/data/recommended";

export default function VillaDetails() {
  const router = useRouter();
  const { id } = router.query; // Récupère l'identifiant de la villa depuis les paramètres d'URL

  // const villa = recommanded_data.find((villa) => villa.id === Number(id));

  // Utilisez l'identifiant pour récupérer les détails de la villa depuis votre source de données (par exemple, une API ou une base de données)
  // Affichez les détails de la villa ici

  return (
    <div>
      {/* <h1>Détails de la villa {id}</h1> */}
      <p>Titre : {recommanded_data}</p>
      {/* Affichez les autres informations de la villa ici */}
    </div>
  );
}
