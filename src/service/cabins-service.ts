import { Cabin } from "../model/cabin";
import cabin1 from '../assets/cabins/cabin1.png';
import cabin2 from '../assets/cabins/cabin2.png';
import cabin3 from '../assets/cabins/cabin3.png';
import cabin4 from '../assets/cabins/cabin4.png';
import cabin5 from '../assets/cabins/cabin5.png';
import cabin6 from '../assets/cabins/cabin6.png';
import cabin7 from '../assets/cabins/cabin7.png';
import cabin8 from '../assets/cabins/cabin8.png';
import cabin9 from '../assets/cabins/cabin9.png';
import cabin10 from '../assets/cabins/cabin10.png';
import cabin11 from '../assets/cabins/cabin11.png';
import cabin12 from '../assets/cabins/cabin12.png';
import cabin13 from '../assets/cabins/cabin13.png';
import cabin14 from '../assets/cabins/cabin14.png';
import cabin15 from '../assets/cabins/cabin15.png';
import cabin16 from '../assets/cabins/cabin16.png';
import cabin17 from '../assets/cabins/cabin17.png';

export const cabins: Cabin[] = [
  {
      id: 'cabin-001',
      images: [cabin1, cabin4, cabin11],
      categories: ['Skog', 'Avsides'],
      title: 'Skogro Hytte',
      description: 'Nestled deep within the whispering pines of Trysil’s ancient forests, Skogro Hytte is a charming log cabin that promises an escape into nature’s embrace. Perfect for a tranquil weekend away from the bustle of city life, this cozy retreat offers a warm, rustic interior with hand-hewn timber walls and a crackling fireplace. Wake up to the sound of birdsong, sip coffee on the porch as mist rises from the forest floor, and spend evenings stargazing under a pristine sky. Ideal for couples or small families seeking solitude, the cabin provides modern comforts like electricity while maintaining an authentic, off-the-grid feel. Nearby trails invite exploration, and the breathtaking sunsets paint the sky in hues of gold and crimson, making every moment magical.',
      maxGuests: 4,
      location: 'Trysil, Innlandet',
      amenities: ['Peis', 'Strøm', 'Solnedgang', 'Turstier', 'Stjernehimmel'],
      pricePerNight: 950,
  },
  {
      id: 'cabin-002',
      images: [cabin2],
      categories: ['Fjell', 'Familie'],
      title: 'Fjellheimen',
      description: 'Perched high in the rugged mountains of Hemsedal, Fjellheimen is a spacious mountain cabin offering sweeping panoramic views that stretch across jagged peaks and rolling valleys. Designed with families in mind, this inviting retreat combines modern amenities with the timeless charm of alpine living. The open-plan living area, complete with a roaring fireplace, is perfect for cozy evenings after a day of skiing or hiking. A fully equipped kitchen makes family meals a breeze, while the sauna offers a soothing way to unwind. With Wi-Fi to keep everyone connected and nearby trails for outdoor adventures, Fjellheimen strikes the perfect balance between relaxation and exploration. Whether it’s snowball fights in winter or wildflower hikes in summer, this cabin is a year-round haven for creating cherished family memories.',
      maxGuests: 6,
      location: 'Hemsedal, Viken',
      amenities: ['Badstu', 'Kjøkken', 'Wifi', 'Peis', 'Turstier'],
      pricePerNight: 1200,
  },
  {
      id: 'cabin-003',
      images: [cabin3],
      categories: ['Innsjø', 'Romantisk'],
      title: 'Vannkanten',
      description: 'Tucked along the serene shores of a tranquil lake in Seljord, Vannkanten is a charming, intimate cabin crafted for romantic getaways. This petite retreat, designed for two, exudes warmth with its rustic wooden interiors and soft, natural light streaming through large windows. Spend lazy mornings rowing across the glassy lake in the included boat, or simply relax on the private dock, watching the water ripple under the golden glow of sunset. The absence of Wi-Fi and modern distractions fosters a deep connection with your partner and the surrounding nature. Evenings are best spent curled up by the fireplace, sipping wine, and listening to the gentle lapping of waves. With its idyllic setting and thoughtful touches, Vannkanten is the ultimate sanctuary for couples seeking to rekindle their spark.',
      maxGuests: 2,
      location: 'Seljord, Telemark',
      amenities: ['Brygge', 'Båt', 'Solnedgang', 'Peis', 'Stjernehimmel'],
      pricePerNight: 850,
  },
  {
      id: 'cabin-004',
      images: [cabin4],
      categories: ['Luksus', 'Avsides'],
      title: 'Nordlys Retreat',
      description: 'High above the Arctic Circle in the remote wilderness of Alta, Nordlys Retreat is an exclusive, luxurious cabin designed for those chasing the magic of the Northern Lights. Its expansive floor-to-ceiling windows frame the vast, star-studded sky, offering front-row seats to nature’s most spectacular light show. The cabin’s sleek, modern design is complemented by rustic touches, including a roaring fireplace that warms the spacious living area. A fully equipped kitchen allows for gourmet meals, while the private dock invites serene moments by the water. Perfect for small groups or families, this retreat combines seclusion with sophistication, offering a sauna for relaxation and nearby trails for exploring the Arctic landscape. Whether you’re marveling at the aurora or savoring the stillness of the northern wilderness, Nordlys Retreat promises an unforgettable escape.',
      maxGuests: 5,
      location: 'Alta, Troms og Finnmark',
      amenities: ['Brygge', 'Peis', 'Kjøkken', 'Badstu', 'Stjernehimmel', 'Turstier'],
      pricePerNight: 2000,
  },
  {
      id: 'cabin-005',
      images: [cabin5],
      categories: ['Skog', 'Enkel'],
      title: 'Granly',
      description: 'Surrounded by towering spruce trees in the peaceful forests of Eidsvoll, Granly is a simple yet enchanting cabin that invites you to reconnect with nature. This no-frills retreat is perfect for those seeking a back-to-basics experience, with a cozy interior warmed by a traditional fireplace. The absence of modern distractions creates a serene atmosphere, ideal for reading, reflecting, or simply listening to the rustle of leaves. Wi-Fi is available for those who need to stay connected, and nearby hiking trails lead to hidden glades and scenic viewpoints. Whether you’re a solo traveler, a couple, or a small group, Granly offers a chance to slow down and savor the beauty of the forest, with stunning sunsets and starry nights adding to the magic.',
      maxGuests: 3,
      location: 'Eidsvoll, Akershus',
      amenities: ['Peis', 'Wifi', 'Turstier', 'Solnedgang', 'Stjernehimmel'],
      pricePerNight: 600,
  },
  {
      id: 'cabin-006',
      images: [cabin6, cabin17],
      categories: ['Fjell', 'Avsides'],
      title: 'Høgfjellbu',
      description: 'Perched high in the pristine wilderness of Rondane, Høgfjellbu is a traditional mountain cabin that embodies the spirit of solitude and adventure. Surrounded by dramatic peaks and endless skies, this retreat offers breathtaking views and a profound sense of peace. The rustic interior, with its handcrafted wooden furnishings and glowing fireplace, creates a warm haven after a day of exploring nearby hiking trails. A well-equipped kitchen makes it easy to prepare hearty meals, while the absence of modern noise ensures a deep connection with the natural world. Perfect for couples or small groups, Høgfjellbu is a gateway to outdoor activities like skiing, hiking, or simply soaking in the starry nights and vibrant sunsets that make this alpine escape truly unforgettable.',
      maxGuests: 4,
      location: 'Rondane, Innlandet',
      amenities: ['Peis', 'Turstier', 'Kjøkken', 'Solnedgang', 'Stjernehimmel'],
      pricePerNight: 1100,
  },
  {
      id: 'cabin-007',
      images: [cabin7],
      categories: ['Innsjø', 'Familie'],
      title: 'Sjøgløtt',
      description: 'Nestled by a shimmering lake in the rolling hills of Norefjell, Sjøgløtt is a family-friendly cabin that blends comfort with adventure. With ample space for six, this airy retreat features a bright, open living area, a fully equipped kitchen, and large windows that frame stunning lake views. Just steps from a sandy beach, it’s perfect for swimming, fishing, or rowing out in the included boat. Wi-Fi keeps everyone entertained, while the fireplace adds warmth to cool evenings. Nearby trails invite exploration, and the vibrant sunsets over the water create a magical backdrop for family barbecues. Whether it’s building sandcastles, stargazing, or sharing stories by the fire, Sjøgløtt is a place where families can create lasting memories in the heart of nature.',
      maxGuests: 6,
      location: 'Norefjell, Viken',
      amenities: ['Båt', 'Strøm', 'Wifi', 'Peis', 'Turstier', 'Solnedgang'],
      pricePerNight: 1250,
  },
  {
      id: 'cabin-008',
      images: [cabin8],
      categories: ['Romantisk', 'Luksus'],
      title: 'Eventyrhytta',
      description: 'Tucked away in the dramatic fjordlands of Geiranger, Eventyrhytta is a luxurious, romantic cabin that feels like a fairy tale come to life. Designed for couples, this exclusive retreat boasts a private jacuzzi, a cozy fireplace, and floor-to-ceiling windows showcasing majestic mountain views. The sleek, modern interior is softened by rustic touches, creating an intimate atmosphere perfect for special occasions. Relax in the sauna after a day of hiking nearby trails, or stargaze from the deck as the night sky sparkles above. A fully equipped kitchen allows for romantic dinners, while the absence of distractions ensures uninterrupted quality time. With its breathtaking surroundings and thoughtful amenities, Eventyrhytta is the ultimate destination for couples seeking a blend of adventure and indulgence.',
      maxGuests: 2,
      location: 'Geiranger, Møre og Romsdal',
      amenities: ['Badstu', 'Peis', 'Stjernehimmel', 'Kjøkken', 'Turstier'],
      pricePerNight: 2200,
  },
  {
      id: 'cabin-009',
      images: [cabin9],
      categories: ['Skog', 'Familie'],
      title: 'Tretopphytten',
      description: 'Perched high among the treetops in the lush forests of Hurdal, Tretopphytten is a one-of-a-kind cabin that promises an unforgettable family adventure. Elevated above the forest floor, this unique retreat offers panoramic views of the surrounding wilderness and a sense of living among the birds. The cozy interior, complete with a fully equipped kitchen and electricity, ensures comfort, while the nearby lake and included boat invite water-based fun. Hiking trails wind through the forest, leading to hidden clearings perfect for picnics or wildlife spotting. With space for five, this cabin is ideal for families seeking a blend of excitement and relaxation, with vibrant sunsets and starry nights adding a touch of magic to every stay.',
      maxGuests: 5,
      location: 'Hurdal, Akershus',
      amenities: ['Strøm', 'Kjøkken', 'Båt', 'Turstier', 'Solnedgang'],
      pricePerNight: 1350,
  },
  {
      id: 'cabin-010',
      images: [cabin10],
      categories: ['Avsides', 'Enkel'],
      title: 'Stillhet',
      description: 'Hidden deep in the rugged landscapes of Setesdal, Stillhet is a minimalist cabin designed for those craving a complete escape from the modern world. Without electricity or running water, this simple retreat offers a rare opportunity to disconnect and immerse yourself in nature’s rhythm. The rustic interior, warmed by a crackling fireplace, creates a cozy sanctuary, while the surrounding wilderness invites quiet reflection. Spend your days hiking nearby trails or simply sitting on the porch, watching vibrant sunsets fade into a dazzling starry sky. Perfect for solo travelers or couples seeking solitude, Stillhet is a place to recharge, reflect, and find peace in the untouched beauty of the Norwegian countryside.',
      maxGuests: 2,
      location: 'Setesdal, Agder',
      amenities: ['Peis', 'Solnedgang', 'Stjernehimmel', 'Turstier'],
      pricePerNight: 500,
  },
  {
      id: 'cabin-011',
      images: [cabin11],
      categories: ['Fjell', 'Romantisk'],
      title: 'Himmelhytta',
      description: 'Nestled in the snowy peaks of Beitostølen, Himmelhytta is a cozy mountain cabin crafted for romantic escapes. Its intimate interior, warmed by a glowing fireplace, is perfect for couples seeking a blend of rustic charm and modern comfort. Large windows frame sweeping views of the surrounding mountains, while the clear, starry skies above make stargazing a nightly ritual. A fully equipped kitchen allows for intimate dinners, and Wi-Fi keeps you connected if needed. Nearby trails offer opportunities for skiing or hiking, but the real magic lies in the quiet moments—sipping hot cocoa by the fire or watching the sunset paint the peaks in golden hues. Himmelhytta is a haven for love and tranquility in the heart of the mountains.',
      maxGuests: 2,
      location: 'Beitostølen, Innlandet',
      amenities: ['Peis', 'Wifi', 'Kjøkken', 'Stjernehimmel', 'Turstier', 'Solnedgang'],
      pricePerNight: 980,
  },
  {
      id: 'cabin-012',
      images: [cabin12],
      categories: ['Innsjø', 'Avsides'],
      title: 'Skogsvann',
      description: 'Tucked away by a tranquil lake in the peaceful forests of Femsjøen, Skogsvann is a secluded cabin that offers a true escape into nature. This charming retreat, perfect for small groups or couples, features a rustic interior and a private dock with a rowboat for exploring the glassy waters. Wake up to the sight of mist gently rising from the lake, and spend your days hiking nearby trails or simply soaking in the serenity. The vibrant sunsets and dazzling starry skies create a breathtaking backdrop, best enjoyed from the porch with a warm drink in hand. With no modern distractions, Skogsvann invites you to slow down and savor the beauty of the Norwegian wilderness in perfect solitude.',
      maxGuests: 3,
      location: 'Femsjøen, Østfold',
      amenities: ['Båt', 'Stjernehimmel', 'Solnedgang', 'Turstier', 'Peis'],
      pricePerNight: 790,
  },
  {
      id: 'cabin-013',
      images: [cabin13],
      categories: ['Skog', 'Familie'],
      title: 'Bjørkheim',
      description: 'Set in the heart of Tinn’s lush forests, Bjørkheim is a spacious, family-friendly cabin that feels like a home away from home. With room for five, this inviting retreat features a bright living area, a fully equipped kitchen, and large windows that bring the beauty of the surrounding nature indoors. Nearby nature trails wind through the forest, perfect for family hikes, wildlife spotting, or simply letting kids run free. Wi-Fi keeps everyone entertained, while the fireplace adds warmth to cozy evenings filled with board games or storytelling. The vibrant sunsets and clear starry skies create a magical atmosphere, making Bjørkheim an ideal base for families seeking a blend of adventure, relaxation, and quality time in the great outdoors.',
      maxGuests: 5,
      location: 'Tinn, Telemark',
      amenities: ['Turstier', 'Kjøkken', 'Wifi', 'Peis', 'Solnedgang', 'Stjernehimmel'],
      pricePerNight: 1150,
  },
  {
      id: 'cabin-014',
      images: [cabin14],
      categories: ['Luksus', 'Fjell'],
      title: 'Alpine Luxury',
      description: 'Perched in the heart of Oppdal’s alpine paradise, Alpine Luxury is a modern, high-end cabin that redefines mountain living. With ski-in/ski-out access to world-class slopes, this spacious retreat is perfect for families or groups seeking adventure and indulgence. The sleek interior boasts a state-of-the-art kitchen, a roaring fireplace, and floor-to-ceiling windows showcasing jaw-dropping mountain views. Relax in the private sauna after a day of skiing or hiking nearby trails, or gather around the dining table for gourmet meals. With Wi-Fi and electricity ensuring modern comforts, Alpine Luxury seamlessly blends sophistication with the rugged beauty of the mountains. Vibrant sunsets and starry nights add a touch of magic to this unforgettable alpine escape.',
      maxGuests: 6,
      location: 'Oppdal, Trøndelag',
      amenities: ['Turstier', 'Kjøkken', 'Badstu', 'Peis', 'Wifi', 'Solnedgang'],
      pricePerNight: 2400,
  },
  {
      id: 'cabin-015',
      images: [cabin15],
      categories: ['Romantisk', 'Innsjø'],
      title: 'Solglimt',
      description: 'Tucked along the serene shores of Rødenessjøen, Solglimt is a small, idyllic cabin designed for romantic escapes. Perfect for two, this charming retreat features a cozy interior with a fireplace and large windows that frame stunning lake views. The private dock and included rowboat invite lazy afternoons on the water, while the vibrant sunsets create a breathtaking backdrop for intimate evenings. With no Wi-Fi to distract, you can truly connect with your partner and the tranquil surroundings. Nearby trails offer opportunities for scenic walks, but the real magic lies in the quiet moments—sipping wine by the fire or stargazing under a dazzling night sky. Solglimt is a haven for couples seeking love and serenity by the water’s edge.',
      maxGuests: 2,
      location: 'Rødenessjøen, Viken',
      amenities: ['Brygge', 'Båt', 'Solnedgang', 'Peis', 'Stjernehimmel', 'Turstier'],
      pricePerNight: 890,
  },
  {
      id: 'cabin-016',
      images: [cabin16],
      categories: ['Skog', 'Enkel'],
      title: 'Lyngly',
      description: 'Hidden among the windswept heather moors of Lindesnes, Lyngly is a rustic cabin that offers a simple, authentic escape into nature. Without electricity, this charming retreat invites you to embrace a slower pace, with a crackling fireplace providing warmth and ambiance. The surrounding landscape, with its rolling hills and vibrant wildflowers, is perfect for hiking or quiet contemplation. Nearby trails lead to scenic viewpoints, and the clear, starry skies above make stargazing a nightly ritual. Ideal for solo travelers or small groups, Lyngly is a place to disconnect from the modern world and reconnect with the timeless beauty of the Norwegian countryside, with stunning sunsets adding a touch of magic to every stay.',
      maxGuests: 3,
      location: 'Lindesnes, Agder',
      amenities: ['Peis', 'Strøm', 'Turstier', 'Solnedgang', 'Stjernehimmel'],
      pricePerNight: 550,
  }
];

export function findCabinsByLocation(location: string) {
  let matchingLocations: Cabin[] = [];

  for (let i = 0; i < cabins.length; i++) {
    const currentCabin: Cabin = cabins[i];
    
    if (currentCabin.location.toLowerCase().includes(location.toLowerCase())) {
      matchingLocations.push(currentCabin);
    }
  }

  return matchingLocations;
}

export function getCabinById(id: string): any {
  for (let i = 0; i < cabins.length; i++) {
    const currentCabin: Cabin = cabins[i];

    if (currentCabin.id === id) {
      return currentCabin;
    }
  }
}