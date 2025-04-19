import { Cabin } from "../model/cabin";
import cabin1 from '../assets/cabins/cabin1.png';
import cabin2 from '../assets/cabins/cabin2.png';
import cabin3 from '../assets/cabins/cabin3.png';
import cabin4 from '../assets/cabins/cabin4.png';
import cabin5 from '../assets/cabins/cabin5.png';

export const cabins: Cabin[] = [
    {
        id: 'cabin-001',
        images: [cabin1],
        categories: ['Skog', 'Avsides'],
        title: 'Skogro Hytte',
        description: 'En koselig tømmerhytte dypt inne i skogen – perfekt for en rolig helg unna byen.',
        maxGuests: 4,
        location: 'Trysil, Innlandet',
        amenities: ['Peis', 'Vedovn', 'Terrasse'],
        pricePerNight: 950,
      },
      {
        id: 'cabin-002',
        images: [cabin2],
        categories: ['Fjell', 'Familie'],
        title: 'Fjellheimen',
        description: 'Romslig fjellhytte med panoramautsikt, ideell for familieferier.',
        maxGuests: 6,
        location: 'Hemsedal, Viken',
        amenities: ['Badstu', 'Kjøkken', 'Wifi'],
        pricePerNight: 1200,
      },
      {
        id: 'cabin-003',
        images: [cabin3],
        categories: ['Innsjø', 'Romantisk'],
        title: 'Vannkanten',
        description: 'Sjarmerende liten hytte rett ved vannet – perfekt for to.',
        maxGuests: 2,
        location: 'Seljord, Telemark',
        amenities: ['Bålplass', 'Robåt', 'Solnedgang'],
        pricePerNight: 850,
      },
      {
        id: 'cabin-004',
        images: [cabin4],
        categories: ['Luksus', 'Avsides'],
        title: 'Nordlys Retreat',
        description: 'Eksklusiv hytte i nord med store vinduer – perfekt for å se nordlyset.',
        maxGuests: 5,
        location: 'Alta, Troms og Finnmark',
        amenities: ['Jacuzzi', 'Peis', 'Fullt kjøkken'],
        pricePerNight: 2000,
      },
      {
        id: 'cabin-005',
        images: [cabin5],
        categories: ['Skog', 'Enkel'],
        title: 'Granly',
        description: 'Enkel og sjarmerende hytte omringet av grantrær – tilbake til naturen.',
        maxGuests: 3,
        location: 'Eidsvoll, Akershus',
        amenities: ['Vedovn', 'Utetoalett', 'Natursti'],
        pricePerNight: 600,
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