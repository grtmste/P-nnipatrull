export interface Product {
  slug: string;
  title: string;
  price: string;
  compareAtPrice?: string;
  image: string;
  images: string[];
  badge?: "LAOS" | "SOODUS" | "UUS";
  shortDescription: string;
  specs: string[];
  category: "elektriauto" | "atv" | "traktor" | "varuosa";
}

export const products: Product[] = [
  {
    slug: "laste-elektriauto-willys-4x200w-3-kohaline",
    title: "Laste elektriauto Willys, 4x200W, 3-kohaline",
    price: "540,00 €",
    image:
      "https://ponnipatrull.ee/wp-content/uploads/2026/04/mc-1-768x576.webp",
    images: [
      "https://ponnipatrull.ee/wp-content/uploads/2026/04/mc-1-768x576.webp",
      "https://ponnipatrull.ee/wp-content/uploads/2026/01/DSC_5736-768x513.jpg",
    ],
    badge: "LAOS",
    shortDescription:
      "Robustne ja võimas 3-kohaline Willys-stiilis elektriauto lastele. Neli 200W mootorit tagavad suurepärase maastikuvõimekuse.",
    specs: [
      "4 × 200W mootor",
      "3 istekohta",
      "12V / 20Ah aku",
      "Max kiirus: 8 km/h",
      "Koormus kuni 100 kg",
      "Pults kuni 30 m",
      "USB / MP3 / Bluetooth",
    ],
    category: "elektriauto",
  },
  {
    slug: "mercedes-g63-amg-xxl-valge-2x280w",
    title: "Mercedes G63 AMG XXL VALGE, 2x280W (vaiksed mootorid)",
    price: "750,00 €",
    image:
      "https://ponnipatrull.ee/wp-content/uploads/2026/01/DSC_5883-768x513.jpg",
    images: [
      "https://ponnipatrull.ee/wp-content/uploads/2026/01/DSC_5883-768x513.jpg",
      "https://ponnipatrull.ee/wp-content/uploads/2026/01/DSC_5736-768x513.jpg",
    ],
    badge: "LAOS",
    shortDescription:
      "Prestiižne Mercedes G63 AMG XXL elektriauto valges värvis. Vaiksed 280W mootorid ja luksuslik viimistlus.",
    specs: [
      "2 × 280W vaikne mootor",
      "2 istekohta",
      "24V / 20Ah aku",
      "Max kiirus: 10 km/h",
      "Nahkkatted, LED tuled",
      "Bluetooth kõlar",
      "Eva-rehvid",
    ],
    category: "elektriauto",
  },
  {
    slug: "mercedes-g63-amg-xxl-punane-2x280w",
    title:
      "Laste elektriauto Mercedes G63 AMG XXL PUNANE, 2x280W (vaiksed mootorid)",
    price: "750,00 €",
    image:
      "https://ponnipatrull.ee/wp-content/uploads/2024/04/A032-plastic-red-2-2-768x512.jpg",
    images: [
      "https://ponnipatrull.ee/wp-content/uploads/2024/04/A032-plastic-red-2-2-768x512.jpg",
      "https://ponnipatrull.ee/wp-content/uploads/2024/07/DSC_5811-768x513.jpg",
    ],
    badge: "LAOS",
    shortDescription:
      "Silmapaistev punane Mercedes G63 AMG XXL elektriauto. Vaiksed mootorid ja tõeline luksustunne.",
    specs: [
      "2 × 280W vaikne mootor",
      "2 istekohta",
      "24V / 20Ah aku",
      "Max kiirus: 10 km/h",
      "Nahkkatted, LED tuled",
      "Bluetooth kõlar",
      "Eva-rehvid",
    ],
    category: "elektriauto",
  },
  {
    slug: "mercedes-g63-amg-xxl-must-2x280w",
    title:
      "Laste elektriauto Mercedes G63 AMG XXL MUST, 2x280W (vaiksed mootorid)",
    price: "750,00 €",
    image:
      "https://ponnipatrull.ee/wp-content/uploads/2022/04/DSC_7222-768x513.jpg",
    images: [
      "https://ponnipatrull.ee/wp-content/uploads/2022/04/DSC_7222-768x513.jpg",
      "https://ponnipatrull.ee/wp-content/uploads/2024/07/DSC_5811-768x513.jpg",
    ],
    badge: "LAOS",
    shortDescription:
      "Elegantne must Mercedes G63 AMG XXL elektriauto. Spordilik välimus ja vaiksed võimsad mootorid.",
    specs: [
      "2 × 280W vaikne mootor",
      "2 istekohta",
      "24V / 20Ah aku",
      "Max kiirus: 10 km/h",
      "Nahkkatted, LED tuled",
      "Bluetooth kõlar",
      "Eva-rehvid",
    ],
    category: "elektriauto",
  },
  {
    slug: "can-am-maverick-utv-rs-roosa-4x200w",
    title:
      "Laste elektriauto CAN-AM MAVERICK UTV RS ROOSA, 4x200W, ÕHKREHVID",
    price: "690,00–730,00 €",
    image:
      "https://ponnipatrull.ee/wp-content/uploads/2025/04/DSC_6560-768x513.jpg",
    images: [
      "https://ponnipatrull.ee/wp-content/uploads/2025/04/DSC_6560-768x513.jpg",
      "https://ponnipatrull.ee/wp-content/uploads/2024/08/DSC_1270-768x513.jpg",
    ],
    badge: "UUS",
    shortDescription:
      "Uus CAN-AM MAVERICK UTV RS roosas värvis. Õhkrehvid ja 4×200W mootorid maastikuseiklusteks.",
    specs: [
      "4 × 200W mootor",
      "2 istekohta",
      "24V aku",
      "Õhkrehvid",
      "Max kiirus: 10 km/h",
      "Pults kuni 30 m",
      "LED tuled",
    ],
    category: "elektriauto",
  },
  {
    slug: "laste-elektriline-traktor-haagisega-roheline",
    title: "Laste elektriline traktor haagisega, roheline",
    price: "570,00 €",
    image:
      "https://ponnipatrull.ee/wp-content/uploads/2024/04/Traktor_roh-768x541.jpg",
    images: [
      "https://ponnipatrull.ee/wp-content/uploads/2024/04/Traktor_roh-768x541.jpg",
      "https://ponnipatrull.ee/wp-content/uploads/2025/03/602_6069-768x513.jpg",
    ],
    badge: "LAOS",
    shortDescription:
      "Reaalne elektriline traktor koos haagisega. Lastele ideaalne põllumajandusseiklus õues.",
    specs: [
      "2 × 200W mootor",
      "1 istekoht + haagis",
      "12V / 12Ah aku",
      "Max kiirus: 5 km/h",
      "Koormus kuni 40 kg",
      "Pults olemas",
    ],
    category: "traktor",
  },
  {
    slug: "laste-atv-quad-road-power-4x4-400w",
    title: "Laste ATV Quad ROAD-POWER 4×4 400W",
    price: "390,00 €",
    image:
      "https://ponnipatrull.ee/wp-content/uploads/2025/11/DSC_4926-768x513.jpg",
    images: [
      "https://ponnipatrull.ee/wp-content/uploads/2025/11/DSC_4926-768x513.jpg",
      "https://ponnipatrull.ee/wp-content/uploads/2025/11/DSC_5273-768x513.jpg",
    ],
    badge: "LAOS",
    shortDescription:
      "Võimas 4×4 ATV quad lastele. 400W mootor ja robustne ehitus igasuguse maastiku jaoks.",
    specs: [
      "4 × 100W mootor (400W kokku)",
      "1 istekoht",
      "12V / 12Ah aku",
      "Max kiirus: 6 km/h",
      "Eva-rehvid",
      "Turvapidurid",
    ],
    category: "atv",
  },
  {
    slug: "laste-elektriauto-audi-q7-must",
    title: "Laste elektriauto Audi Q7 must",
    price: "265,00 €",
    compareAtPrice: "529,00 €",
    image:
      "https://ponnipatrull.ee/wp-content/uploads/2023/02/PHOTO-2023-02-23-05-12-401-768x512.jpg",
    images: [
      "https://ponnipatrull.ee/wp-content/uploads/2023/02/PHOTO-2023-02-23-05-12-401-768x512.jpg",
      "https://ponnipatrull.ee/wp-content/uploads/2023/02/PHOTO-2023-02-23-05-14-53-768x512.jpg",
    ],
    badge: "SOODUS",
    shortDescription:
      "Elegantne must Audi Q7 elektriauto lastele soodushinnaga. Suurepärane kvaliteet soodsa hinnaga.",
    specs: [
      "2 × 45W mootor",
      "1–2 istekohta",
      "12V / 7Ah aku",
      "Max kiirus: 6 km/h",
      "MP3 / USB",
      "Pults olemas",
    ],
    category: "elektriauto",
  },
  {
    slug: "laste-elektriauto-lamborghini-veneno-kahekohaline",
    title: "Laste elektriauto Lamborghini Veneno kahekohaline",
    price: "390,00 €",
    compareAtPrice: "499,00 €",
    image:
      "https://ponnipatrull.ee/wp-content/uploads/2026/04/IMG_96541-2-768x421.jpg",
    images: [
      "https://ponnipatrull.ee/wp-content/uploads/2026/04/IMG_96541-2-768x421.jpg",
      "https://ponnipatrull.ee/wp-content/uploads/2026/04/Screenshot-2026-04-28-at-10.54.24.png",
    ],
    badge: "SOODUS",
    shortDescription:
      "Erakordne Lamborghini Veneno elektriauto kahele lapsele. Spordiauto disain ja suurepärane jõudlus.",
    specs: [
      "2 × 120W mootor",
      "2 istekohta",
      "24V / 12Ah aku",
      "Max kiirus: 8 km/h",
      "Butterfly uksed",
      "LED tuled, MP3",
    ],
    category: "elektriauto",
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}
