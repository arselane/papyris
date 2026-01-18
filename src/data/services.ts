import serviceStickers from "@/assets/service-stickers.jpg";
import serviceNeonflex from "@/assets/service-neonflex.jpg";
import serviceEnseigne from "@/assets/service-enseigne.jpg";
import serviceLightbox from "@/assets/service-lightbox.jpg";

export const services = [
  {
    id: "autocollants",
    title: "Autocollants Toute Surface",
    shortTitle: "Autocollants",
    description: "Stickers haute qualité pour véhicules, vitrines, murs et toutes surfaces. Résistants aux intempéries et aux UV.",
    longDescription: "Nos autocollants professionnels sont conçus pour résister aux conditions les plus difficiles. Fabriqués à partir de vinyle premium, ils offrent une durabilité exceptionnelle et une qualité d'impression photo-réaliste. Que ce soit pour habiller votre flotte de véhicules, personnaliser votre vitrine ou créer une signalétique impactante, nos stickers s'adaptent à tous vos besoins.",
    image: serviceStickers,
    simulatorUrl: "/simulator/stickers",
    features: ["Vinyle premium", "Pose professionnelle", "Durabilité garantie"],
    benefits: [
      "Résistance aux UV et intempéries jusqu'à 7 ans",
      "Impression haute définition en couleurs vibrantes",
      "Découpe sur mesure selon vos designs",
      "Application possible sur véhicules, vitrines, murs, sols",
      "Finitions mat, brillant, satiné ou texturé disponibles",
      "Pose professionnelle incluse sur demande"
    ],
    applications: [
      "Covering véhicule partiel ou total",
      "Vitrophanie et décoration de vitrine",
      "Signalétique intérieure et extérieure",
      "Décoration murale et sols",
      "Habillage de mobilier et PLV"
    ],
    priceRange: "À partir de 6000DA/m²"
  },
  {
    id: "neonflex",
    title: "NeonFlex LED",
    shortTitle: "NeonFlex",
    description: "L'élégance du néon traditionnel avec la technologie LED moderne. Personnalisable à l'infini pour vos designs uniques.",
    longDescription: "Le NeonFlex combine le charme vintage du néon classique avec les avantages de la technologie LED moderne. Flexible, économe en énergie et disponible dans une palette infinie de couleurs, il permet de créer des enseignes et décorations lumineuses uniques. Idéal pour les intérieurs comme les extérieurs, il apporte une touche de caractère à n'importe quel espace.",
    image: serviceNeonflex,
    simulatorUrl: "/simulator",
    features: ["Basse consommation", "Couleurs illimitées", "Installation flexible"],
    benefits: [
      "Consommation énergétique réduite de 80% vs néon traditionnel",
      "Durée de vie supérieure à 50 000 heures",
      "Flexibilité permettant des formes complexes",
      "Pas de gaz dangereux, 100% sécuritaire",
      "Variateur d'intensité et modes dynamiques disponibles",
      "Installation intérieure et extérieure (IP65)"
    ],
    applications: [
      "Enseignes commerciales",
      "Décoration de bars et restaurants",
      "Signalétique artistique",
      "Événementiel et scénographie",
      "Décoration intérieure résidentielle"
    ],
    priceRange: "À partir de 600DA/mètre linéaire"
  },
  {
    id: "enseignes",
    title: "Enseignes Lumineuses",
    shortTitle: "Enseignes",
    description: "Enseignes LED sur-mesure pour commerces et entreprises. Visibilité maximale jour et nuit.",
    longDescription: "Nos enseignes lumineuses LED sont conçues sur mesure pour maximiser la visibilité de votre commerce. Fabriquées avec des matériaux premium et équipées de LED haute performance, elles offrent un éclairage puissant et homogène tout en minimisant la consommation énergétique. Nous gérons l'ensemble du processus, de la conception à l'installation et la maintenance.",
    image: serviceEnseigne,
    simulatorUrl: "/simulator",
    features: ["LED haute luminosité", "Design personnalisé", "Maintenance incluse"],
    benefits: [
      "Visibilité jour et nuit garantie",
      "Lettres découpées, caissons lumineux ou totems",
      "LED haute luminosité longue durée",
      "Fabrication sur mesure selon votre identité visuelle",
      "Installation conforme aux normes en vigueur",
      "Contrat de maintenance optionnel"
    ],
    applications: [
      "Façades de commerces",
      "Centres commerciaux",
      "Bureaux et sièges sociaux",
      "Hôtels et restaurants",
      "Stations-service et garages"
    ],
    priceRange: "Devis sur mesure"
  },
  {
    id: "cadres-lumineux",
    title: "Cadres Lumineux",
    shortTitle: "Cadres Lumineux",
    description: "Cadres photo rétroéclairés pour sublimer vos visuels. Parfaits pour expositions, commerces et décoration.",
    longDescription: "Nos cadres lumineux (lightbox) subliment vos visuels grâce à un rétroéclairage LED uniforme et puissant. Disponibles en formats standards ou sur mesure, ils sont parfaits pour mettre en valeur vos photos, affiches publicitaires ou œuvres d'art. Le système de fixation magnétique permet un changement rapide et facile des visuels.",
    image: serviceLightbox,
    features: ["Éclairage uniforme", "Formats sur mesure", "Changement facile"],
    benefits: [
      "Rétroéclairage LED homogène sur toute la surface",
      "Profils aluminium fins et élégants",
      "Système d'ouverture facile pour changement de visuel",
      "Impression sur bâche rétroéclairée incluse",
      "Faible épaisseur (à partir de 25mm)",
      "Simple ou double face disponible"
    ],
    applications: [
      "Galeries d'art et musées",
      "Vitrines de commerces",
      "Halls d'accueil et réceptions",
      "Menus de restaurants",
      "Affichage publicitaire"
    ],
    priceRange: "À partir de 180€ (format A2)"
  }
];

export const getServiceById = (id: string) => services.find(s => s.id === id);
